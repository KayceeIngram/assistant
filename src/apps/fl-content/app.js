import React from 'react'
import { __ } from '@wordpress/i18n'
import { getSystemConfig } from 'assistant/data'
import { Page, Nav, Icon, Button } from 'assistant/ui'
import { SummaryTab, PostTypeTab } from './tabs'

export const Content = ( { match } ) => (
	<Nav.Switch>
		<Nav.Route exact path={ `${match.url}` } component={ Main } />
		<Nav.Route path={ `${match.url}/tab/:tab` } component={ Main } />
		<Nav.Route path={ `${match.url}/post/new` } component={ Page.CreatePost } />
		<Nav.Route path={ `${match.url}/post/:id` } component={ Page.Post } />
	</Nav.Switch>
)

const Main = () => {
	const { contentTypes } = getSystemConfig()

	const getTabs = () => {
		let tabs = [
			{
				handle: 'summary',
				label: __( 'Summary' ),
				path: '/fl-content',
				component: SummaryTab,
				exact: true,
			}
		]
		Object.keys( contentTypes ).map( key => {

			const type = contentTypes[key]
			tabs.push( {
				handle: key,
				path: '/fl-content/tab/' + key,
				label: type.labels.plural,
				component: () => <PostTypeTab type={ key } />,
				showButton: type.builtin
			} )
		} )

		return tabs
	}

	const Header = () => {
		return (
			<div style={ { flex: '1 1 auto', display: 'flex', flexDirection: 'column', margin: '0 -5px' } }>
				<Nav.Tabs tabs={ tabs } />
			</div>
		)
	}

	const Actions = () => {
		const to = {
			pathname: '/fl-content/post/new',
			state: {
				detailBaseUrl: '/fl-content/post'
			}
		}
		return (
			<>
				<Button to={ to } title={ __( 'Create New' ) }>
					<Icon.Plus />
				</Button>
			</>
		)
	}

	const tabs = getTabs()

	return (
		<Page
			title={ __( 'Content' ) }
			padY={ false }
			header={ <Header /> }
			actions={ <Actions /> }
			shouldScroll={ false }
		>
			<Nav.CurrentTab tabs={ tabs } />
		</Page>
	)
}

Content.Icon = () => {
	return (
		<svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M24.0575 1.1579C24.868 1.1579 25.645 1.47074 26.2161 2.02701L37.94 13.4461C38.5059 13.9973 38.8235 14.7426 38.8235 15.5194V36.2217C38.8235 39.878 35.759 42.8421 31.9786 42.8421H8.0214C4.24106 42.8421 1.17648 39.878 1.17648 36.2217V7.77833C1.17648 4.12197 4.24106 1.1579 8.0214 1.1579H24.0575ZM23.5294 2.62842L8.0214 2.62911C5.08113 2.62911 2.69758 4.93449 2.69758 7.77833V36.2217C2.69758 39.0655 5.08113 41.3709 8.0214 41.3709H31.9786C34.9189 41.3709 37.3024 39.0655 37.3024 36.2217V15.5194C37.3024 15.3595 37.2755 15.2022 37.2241 15.0533L26.7059 15.0526C24.9516 15.0526 23.5294 13.6529 23.5294 11.9263V2.62842Z" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
		</svg>
	)
}
