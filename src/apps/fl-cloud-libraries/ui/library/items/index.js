import React, { useEffect, useState } from 'react'
import { __ } from '@wordpress/i18n'
import { Button, Layout } from 'assistant/ui'
import { useAppState, getAppHooks } from 'assistant/data'

import ItemsHeader from './header'
import ItemsFilter from './filter'
import ItemsGrid from './grid'
import ItemsUpload from '../upload'
import LibraryContext from '../context'
import { getFilteredItems } from './utils'
import './style.scss'

export default () => {
	const { items, showUpload, setShowUpload, setUploadTab, uploader } = LibraryContext.use()
	const { handleDrop } = uploader
	const { defaultItemsFilter } = useAppState( 'fl-cloud-libraries', 'defaultItemsFilter' )
	const { useItemsFilter } = getAppHooks( 'fl-cloud-libraries' )
	const [ itemsFilter, setItemsFilter ] = useItemsFilter()
	const filteredItems = getFilteredItems( itemsFilter, items )
	const hasItems = items && !! items.length

	useEffect( () => {
		if ( items && ! hasItems ) {
			setShowUpload( true )
		}
	}, [ items ] )

	const onDrop = ( files ) => {
		setUploadTab( 'media' )
		setShowUpload( true )
		handleDrop( files )
	}

	const shouldShowNoResults = () => {
		const { view_by, type, collection } = itemsFilter
		if ( items && ! Object.keys( filteredItems ).length ) {
			if ( 'type' === view_by && 'all' !== type ) {
				return true
			} else if ( 'collection' === view_by && 'all' !== collection ) {
				return true
			}
		}
		return false
	}

	return (
		<Layout.DropArea onDrop={ onDrop }>

			{ hasItems && (
				<ItemsFilter />
			)}

			<ItemsHeader />

			{ showUpload && <ItemsUpload /> }

			{ hasItems &&
				<>
					<ItemsGrid categories={ getFilteredItems( itemsFilter, items ) } />
				</>
			}

			{ shouldShowNoResults() && ! showUpload &&
				<>
					<Layout.Box style={ { textAlign: 'center' } }>
						{ __( 'No results found.' ) }
					</Layout.Box>
					<Layout.Row>
						<Button onClick={ () => setItemsFilter( defaultItemsFilter ) }>
							{ __( 'Reset Filter' ) }
						</Button>
					</Layout.Row>
				</>
			}

			{ items && ! hasItems && ! showUpload &&
				<Layout.Box style={ { textAlign: 'center' } }>
					{ __( 'This library doesn\'t have any items yet.' ) }
				</Layout.Box>
			}
		</Layout.DropArea>
	)
}
