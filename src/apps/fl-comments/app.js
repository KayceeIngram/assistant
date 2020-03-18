import React from 'react'
import { Page, Nav } from 'assistant/ui'
import { getSystemConfig } from 'assistant/data'
import { AllTab, CommentTypeTab } from './tabs'
import { __ } from '@wordpress/i18n'
import './style.scss'


export const CommentsApp = ( { match } ) => (
	<Nav.Switch>
		<Nav.Route exact path={ `${match.url}/` } component={ Main } />
		<Nav.Route path={ `${match.url}/tab/:tab` } component={ Main } />
		<Nav.Route path={ `${match.url}/comment/:id` } component={ Page.Comment } />
	</Nav.Switch>
)

const Main = () => {

	const getTabs = () => {
		let tabs = [
			{
				handle: 'all',
				label: __( 'All' ),
				path: '/fl-comments',
				component: AllTab,
				exact: true,
			}
		]
		let tab = [

			{
				handle: 'hold',
				label: __( 'Pending ' ),
				path: '/fl-comments/',
			},
			{
				handle: 'approve',
				label: __( 'Approved' ),
				path: '/fl-comments/',
			},
			{
				handle: 'spam',
				label: __( 'Spam' ),
				path: '/fl-comments/',
			},
			{
				handle: 'trash',
				label: __( 'Trashed' ),
				path: '/fl-comments/',
			},

		]

		Object.keys( tab ).map( key => {
			const type = tab[key]

			tabs.push( {
				handle: type.handle,
				path: '/fl-comments/tab/' + type.handle,
				label: type.label,
				component: () => <CommentTypeTab type={ type.handle } label={ type.label } />,

			} )
		} )

		return tabs
	}
	const tabs = getTabs()

	const { pluginURL } = getSystemConfig()
	const hero = `${pluginURL}img/comment-hero-a.jpg`

	return (
		<Page
			id="fl-comments-list-page"
			padX={ false }
			padY={ false }
			title={ __( 'Comments' ) }
			header={ <Nav.Tabs tabs={ tabs } /> }
			hero={ hero }
			shouldScroll={ false }
		>
			<Nav.CurrentTab tabs={ tabs } />
		</Page>
	)
}
