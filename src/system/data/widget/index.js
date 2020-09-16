import {
	registerStore,
	useStore,
	getStore,
	getDispatch
} from '../registry'

import * as actions from './actions'
import * as reducers from './reducers'
import * as effects from './effects'
import * as selectors from './selectors'

const KEY = 'fl-assistant/widgets'

const defaultLayout = [
	{
		id: 1,
		size: 'sm',
		type: 'post-count',
		settings: {
			type: 'post'
		}
	},
	{
		id: 5,
		size: 'sm',
		type: 'post-count',
		settings: {
			type: 'page'
		}
	},
	{
		id: 2,
		size: 'sm',
		type: 'media',
		settings: {}
	},
	{
		id: 6,
		size: 'sm',
		type: 'post-count',
		settings: {
			type: 'page'
		}
	},
	{
		id: 3,
		size: 'med',
		type: 'currently-viewing',
		settings: {}
	},
	{
		id: 4,
		size: 'lg',
		type: 'fl-empty',
		settings: {}
	}
]

registerStore( KEY, {
	state: {
		types: {},
		layouts: {
			default: [ ...defaultLayout ],
			home: [ ...defaultLayout ],
		}
	},
	actions,
	reducers,
	effects,
	selectors,
} )

export const getWidgetStore = () => getStore( KEY )

export const useWidgetState = shouldUpdate => useStore( KEY, shouldUpdate )

export const getWidgetState = () => getStore( KEY ).getState()

export const getWidgetActions = () => getDispatch( KEY )

//export const getWidgetSelectors = () => getSelectors( KEY )

//export const getWidgetHooks = () => getHooks( KEY )