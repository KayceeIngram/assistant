import React, { useEffect, useState } from 'fl-react'
import { __ } from '@wordpress/i18n'
import { getUpdaterStore, getUpdaterActions, getUpdaterSelectors } from 'store'
import { List, Button } from 'lib'

export const Updates = ( {
	getItemProps = ( item, defaultProps ) => defaultProps,
	query = {
		updateType: 'all',
	},
	...rest,
} ) => {
	return (
		<List.WordPress
			type={ 'updates' }
			query={ query }
			formatItems={ items => {
				const groups = [ {
					label: __( 'Plugins' ),
					items: [],
				}, {
					label: __( 'Themes' ),
					items: [],
				} ]
				items.map( item => {
					if ( 'plugin' === item.type ) {
						groups[0].items.push( item )
					} else {
						groups[1].items.push( item )
					}
				} )
				return groups
			} }
			getItemProps={ ( item, defaultProps ) => {
				const UpdateButton = () => {
					const updater = getUpdaterStore()
					const { setUpdateQueueItem, removeCompletedUpdate } = getUpdaterActions()
					const { getQueuedUpdate, getCompletedUpdate } = getUpdaterSelectors()
					const [ updating, setUpdating ] = useState( !! getQueuedUpdate( item.id ) )
					const { removeItem } = defaultProps

					useEffect( () => {
						if ( getCompletedUpdate( item.id ) ) {
							removeCompletedUpdate( item.id )
							removeItem()
						}
						const unsubscribe = updater.subscribe( () => {
							if ( getQueuedUpdate( item.id ) ) {
								setUpdating( true )
							}
						} )
						return () => unsubscribe()
					} )

					return (
						<>
						{ updating &&
							<Button tabIndex="-1">
								{__( 'Updating...' )}
							</Button>
						}
						{ ! updating &&
							<Button tabIndex="-1" onClick={ () => setUpdateQueueItem( item ) }>
								{__( 'Update' )}
							</Button>
						}
						</>
					)
				}

				return getItemProps( item, {
					...defaultProps,
					label: item.title,
					description: item.meta,
					thumbnail: item.thumbnail,
					accessory: props => <UpdateButton { ...props } />,
				} )
			} }
			{ ...rest }
		/>
	)
}