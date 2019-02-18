import React, { useEffect, useState } from 'react'
import { ExpandedContents, TagGroupControl } from 'components'

export const CommentListFilter = ( { onChange } ) => {
	const [ activeTag, setActiveTag ] = useState( 'all' )
	const tags = [
		{
			label: 'All',
			value: 'all',
		},
		{
			label: 'Pending',
			value: 'hold',
		},
		{
			label: 'Approved',
			value: 'approve',
		},
		{
			label: 'Spam',
			value: 'spam',
		},
		{
			label: 'Trash',
			value: 'trash',
		}
	]

	useEffect( () => {
		onChange( {
			status: activeTag,
		} )
	}, [ activeTag ] )

	return (
		<ExpandedContents>
			<TagGroupControl tags={ tags } value={ activeTag } title="Status" onChange={ setActiveTag } />
		</ExpandedContents>
	)
}
