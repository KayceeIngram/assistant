import { request, addQueryArgs } from 'utils/request'

/**
 * Returns any array of content for the given type
 * such as posts or terms.
 *
 * @since 0.1
 * @param {String} type
 * @param {Object} args
 * @param {Function} complete
 * @return {Object}
 */
export function getContent( type, args, complete ) {
	switch ( type ) {
		case 'posts':
			return getPosts( args, complete )
		case 'terms':
			return getTerms( args, complete )
	}
}

/**
 * Returns any array of posts.
 *
 * @since 0.1
 * @param {Object} args
 * @param {Function} complete
 * @return {Object}
 */
export function getPosts( args, complete ) {
	return request( {
		route: addQueryArgs( 'fl-assistant/v1/posts', args ),
		complete
	} )
}

/**
 * Returns data for a single post.
 *
 * @since 0.1
 * @param {Number} id
 * @param {Function} complete
 * @return {Object}
 */
export function getPost( id, complete ) {
	return request( {
		route: `fl-assistant/v1/post/${ id }`,
		complete
	} )
}

/**
 * Returns any array of post terms.
 *
 * @since 0.1
 * @param {Object} args
 * @param {Function} complete
 * @return {Object}
 */
export function getTerms( args, complete ) {
	return request( {
		route: addQueryArgs( 'fl-assistant/v1/terms', args ),
		complete
	} )
}

/**
 * Returns data for a single term.
 *
 * @since 0.1
 * @param {Number} id
 * @param {Function} complete
 * @return {Object}
 */
export function getTerm( id, complete ) {
	return request( {
		route: `fl-assistant/v1/term/${ id }`,
		complete
	} )
}

/**
 * Returns any array of users.
 *
 * @since 0.1
 * @param {Object} args
 * @param {Function} complete
 * @return {Object}
 */
export function getUsers( args, complete ) {
	return request( {
		route: addQueryArgs( 'fl-assistant/v1/users', args ),
		complete
	} )
}

/**
 * Returns data for a single user.
 *
 * @since 0.1
 * @param {Number} id
 * @param {Function} complete
 * @return {Object}
 */
export function getUser( id, complete ) {
	return request( {
		route: `fl-assistant/v1/user/${ id }`,
		complete
	} )
}
