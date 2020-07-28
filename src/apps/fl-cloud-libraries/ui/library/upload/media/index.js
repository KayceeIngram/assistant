import React from 'react'
import { __ } from '@wordpress/i18n'
import { Text } from 'fluid'
import { Layout, Uploader } from 'assistant/ui'
import LibraryContext from '../../context'

export default () => {
	const { uploader } = LibraryContext.use()
	const { queuedFiles, errorFiles, handleSelect } = uploader

	return (
		<div style={ { marginTop: 'var(--fluid-lg-space)' } }>
			<Uploader.SelectBox onSelect={ handleSelect } />
			<Uploader.FileList files={ queuedFiles } />
			<Uploader.FileList files={ errorFiles } />
		</div>
	)
}
