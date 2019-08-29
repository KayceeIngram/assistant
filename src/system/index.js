import { api as data } from 'store'
import { api as ui } from 'lib'
import utils from './utils'
import * as i18n from '@wordpress/i18n'
import * as cloud from 'shared-utils/cloud'

// After everything is imported
import './config'

const fl = window.FL || {}
const asst = fl.Assistant || {}
const {
	registerApp,
	toggleIsShowingUI,
} = data.getSystemActions()

const Assistant = {
	...asst,
	registerApp,
	toggleUI: toggleIsShowingUI,

	i18n,
	data,
	ui,
	utils,
	cloud
}

window.FL = {
	...fl,
	Assistant,
}
