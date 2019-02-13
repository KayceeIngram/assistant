import { updatePlugin, updateTheme } from 'utils/wordpress'

/**
 * Cached queue array retrieved from local storage.
 *
 * @type {Array}
 */
const cache = localStorage.getItem( 'fl-assistant-updater-queue' )

/**
 * An array of updates waiting to be processed
 * once the current update finishes.
 *
 * @type {Array}
 */
const queue = cache ? JSON.parse( cache ) : []

/**
 * Callback functions that are called when an
 * update matching the type and key completes.
 *
 * @type {Object}
 */
const subscriptions = {}

/**
 * Data for the current update.
 *
 * @type {Object}
 */
let current = null

/**
 * Caches the queue to local storage.
 */
const cacheQueue = () => {
	localStorage.setItem( 'fl-assistant-updater-queue', JSON.stringify( queue ) )
}

/**
 * Adds an update to the queue.
 *
 * @param {String}
 * @param {String}
 */
const queueUpdate = ( type, key ) => {
	if ( ! isUpdateQueued( type, key ) ) {
		queue.push( { type, key } )
		cacheQueue()
		requestUpdate()
	}
}

/**
 * Checks if an update has been queued.
 *
 * @param {String}
 * @param {String}
 * @return {Boolean}
 */
const isUpdateQueued = ( type, key ) => {
	const filtered = queue.filter( item => {
		return type === item.type && key === item.key
	} )
	return !! filtered.length
}

/**
 * Checks if an update is currently updating.
 *
 * @param {String}
 * @param {String}
 * @return {Boolean}
 */
const isUpdateUpdating = ( type, key ) => {
	if ( ! current ) {
		return false
	}
	return type === current.type && key === current.key
}

/**
 * Requests the next update if one isn't running.
 */
const requestUpdate = () => {
	if ( queue.length ) {
		const { type, key } = queue[ 0 ]
		if ( ! isUpdateUpdating( type, key ) ) {
			current = { type, key }
			if ( 'plugin' === type ) {
				updatePlugin( key, requestUpdateComplete )
			} else {
				updateTheme( key, requestUpdateComplete )
			}
		}
	}
}

/**
 * Callback for when an update completes.
 *
 * @param {Object}
 */
const requestUpdateComplete = response => {
	const { type, key } = queue.shift()
	current = null
	cacheQueue()
	resolveSubscription( type, key, response )
	requestUpdate()
}

/**
 * Subscribes a custom callback for when an update
 * completes. This and the unsubscribe method are
 * useful in useEffect when you want updates to run
 * but don't want to set state if the component has
 * already unmounted.
 *
 * @param {String}
 * @param {String}
 * @param {Function}
 */
const subscribeToUpdate = ( type, key, callback ) => {
	if ( ! subscriptions[ `${ type }-${ key }` ] ) {
		subscriptions[ `${ type }-${ key }` ] = callback
	}
}

/**
 * Unsubscribes a custom callback for an update.
 *
 * @param {String}
 * @param {String}
 */
const unsubscribeToUpdate = ( type, key ) => {
	subscriptions[ `${ type }-${ key }` ] = null
	delete subscriptions[ `${ type }-${ key }` ]
}

/**
 * Resolves a custom callback subscription when a
 * update has completed.
 *
 * @param {String}
 * @param {String}
 */
const resolveSubscription = ( type, key, response ) => {
	if ( subscriptions[ `${ type }-${ key }` ] ) {
		subscriptions[ `${ type }-${ key }` ]( response )
	}
	unsubscribeToUpdate( type, key )
}

/**
 * The public updater.
 *
 * @type {Object}
 */
export const updater = {
	init: requestUpdate,
	queue: queueUpdate,
	isQueued: isUpdateQueued,
	subscribe: subscribeToUpdate,
	unsubscribe: unsubscribeToUpdate,
}
