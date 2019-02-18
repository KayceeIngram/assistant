import React, { useContext } from 'react'
import {
	Button,
	Icon,
	Separator,
	Tab,
	Stack,
	AppContext,
	AppTabButton,
	UIContext,
} from 'components'
import { NotificationsTabButton } from 'apps/fl-notifications'
import { useAppsMenu, AppFrame } from 'system'
import './style.scss'

/**
 * Main UI Controller
 */
export const UI = () => {
	const {
		apps,
		activeApp,
		activeAppName,
		setActiveApp,
		setIsShowingUI,
		renderModals,
	} = useContext( UIContext )

	const { isShowingAppsMenu, toggleIsShowingAppsMenu } = useAppsMenu()

	const excludedApps = [ 'fl-notifications' ]
	const maxTabCount = 3
	let count = 0

	return (
		<AppFrame>
			<div className="fl-asst-panel-wrap">

				{ /* Toolbar */ }
				<div className="fl-asst-panel-chrome">
					<div className="fl-asst-panel-chrome-area">
						<NotificationsTabButton isShowingAppsMenu={isShowingAppsMenu} />
					</div>
					<div className="fl-asst-app-tabs-wrap">
						<div className="fl-asst-app-tabs-area">
							{ Object.keys( apps ).map( key => {

								if ( excludedApps.includes( key ) ) {
									return null
								}

								if ( count >= maxTabCount ) {
									return null
								}
								count++

								const tab = apps[key]
								const isSelected = ( key === activeAppName && ! isShowingAppsMenu ) ? true : false

								if ( false === tab.enabled ) {
									return null
								}

								if ( 'function' !== typeof tab.icon ) {
									tab.icon = props => <Icon name="default-app" {...props} />
								}

								return (
									<AppTabButton key={key} isSelected={isSelected} onClick={() => setActiveApp( key )} tooltip={tab.label}>
										{tab.icon( { key, isSelected } )}
									</AppTabButton>
								)
							} ) }

							<AppTabButton appearance="icon" isSelected={isShowingAppsMenu} onClick={toggleIsShowingAppsMenu}>
								<Icon name="apps-app" />
							</AppTabButton>
						</div>
					</div>
					<div className="fl-asst-panel-chrome-area">
						<Button onClick={ () => setIsShowingUI( false ) } appearance="icon">
							<Icon name="close" />
						</Button>
					</div>
				</div>

				<Separator isSlim={true} />

				{ /* Screens */ }
				<div className="fl-asst-panel-contents">
					<AppContext.Provider key={activeAppName} value={activeApp}>
						<Tab name={activeAppName} isSelected>
							<Stack>{ activeApp.content() }</Stack>
						</Tab>
					</AppContext.Provider>
				</div>
			</div>

			{ renderModals() }
		</AppFrame>
	)
}

/**
 * Button To Show/Hide The UI
 */
export const ShowUITrigger = () => {
	const { setIsShowingUI } = useContext( UIContext )

	const styles = {
		position: 'fixed',
		right: 0,
		bottom: 0,
		padding: 10,
		zIndex: 999,
	}
	const buttonStyles = {
		borderRadius: '8px'
	}
	return (
		<div style={styles}>
			<Button className="fl-asst-outline-button" onClick={ () => setIsShowingUI( true ) } style={buttonStyles} isSelected={true}>
				<Icon name="trigger-button"/>
			</Button>
		</div>
	)
}
