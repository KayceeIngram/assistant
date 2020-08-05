import React from 'react'
import { useParams } from 'react-router-dom'
import { Notice, Page } from 'assistant/ui'
import cloud from 'assistant/cloud'
import ItemContext from './context'
import ItemLayout from './layout'

export default () => {
	const { itemId } = useParams()
	const [ item, setItem ] = cloud.libraries.useItem( itemId )
	const { renderNotices, createNotice } = Notice.useNotices()

	if ( ! item ) {
		return <Page.Loading />
	}

	const context = {
		item,
		setItem,
		renderNotices,
		createNotice
	}

	return (
		<ItemContext.Provider value={ context }>
			<ItemLayout />
		</ItemContext.Provider>
	)
}
