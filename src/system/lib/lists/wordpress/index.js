import React, { useEffect, useState } from 'fl-react'
import { CancelToken, isCancel } from 'axios'
import { getWpRest } from 'shared-utils/wordpress'
import { List } from 'lib'

export const WordPress = ( {
	type = 'posts',
	getItemProps = ( item, defaultProps ) => defaultProps,
	formatItems = items => items,
	onItemsLoaded = () => {},
	query = {},
	...rest,
} ) => {
	const [ items, setItems ] = useState( [] )
	const { getPagedContent } = getWpRest()
	const source = CancelToken.source()
	const offset = items.length

	useEffect( () => {
		setItems( [] )
	}, [ type, JSON.stringify( query ) ] )

	return (
		<List.Scroller
			items={ formatItems( items ) }
			getItemProps={ ( item, defaultProps ) => {
				return getItemProps( item, {
					...defaultProps,
					removeItem: () => {
						const { key } = defaultProps
						items.splice( key, 1 )
						setItems( [ ...items ] )
					},
					cloneItem: () => {
						const { key } = defaultProps
						items.splice( key, 0, Object.assign( {}, items[0] ) )
						setItems( [ ...items ] )
					}
				} )
			} }
			loadItems={ ( setHasMore ) => {
				getPagedContent( type, query, offset, {
					cancelToken: source.token,
				} ).then( response  => {
					setItems( items.concat( response.data.items ) )
					setHasMore( response.data.has_more )
					onItemsLoaded( response )
				} ).catch( ( error ) => {
					if ( ! isCancel( error ) ) {
						console.log( error ) // eslint-disable-line no-console
					}
				} )
			} }
			{ ...rest }
		/>
	)
}
