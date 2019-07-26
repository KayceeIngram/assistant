import React, { useEffect, useState } from 'fl-react'
import { __ } from 'assistant'
import { getPagedContent } from 'assistant/utils/wordpress'
import { getSystemConfig, useAppState, getAppActions } from 'assistant/data'
import { Button, List, Page, Nav, Icon } from 'assistant/ui'

export const Content = ( { match } ) => (
	<Nav.Switch>
		<Nav.Route exact path={`${match.url}/`} component={Main} />
		<Nav.Route path={`${match.url}/post/:id`} component={Page.Post} />
	</Nav.Switch>
)

const Main = ( { match } ) => {
	const [ items, setItems ] = useState( [] )
	const { contentTypes } = getSystemConfig()
	const { query } = useAppState()
	const { setQuery } = getAppActions()

	useEffect( () => {
		setItems( [] )

		getPagedContent( 'posts', query, 0, ( data, hasMore ) => {
			setItems( data )
		} )
	}, [ query ] )

	return (
		<Page shouldPadSides={false}>

			<Button.Group>
				{ Object.keys( contentTypes ).map( ( type, i ) =>
					<Button
						key={i}
						isSelected={ type === query.post_type }
						onClick={ () => {
							query.post_type = type
							setQuery( { ...query } )
						} }
					>
						{ contentTypes[ type ].labels.plural }
					</Button>
				) }
			</Button.Group>

			<List
				items={ items }
				defaultItemProps={{ shouldAlwaysShowThumbnail: true }}
				getItemProps={( item, defaultProps, isSection ) => {
					return {
						...defaultProps,
						label: item.title,
						thumbnail: item.thumbnail,
						to: {
							pathname: `${match.url}/post/${item.id}`,
							state: item,
						}
					}
				}}
			/>

		</Page>
	)
}