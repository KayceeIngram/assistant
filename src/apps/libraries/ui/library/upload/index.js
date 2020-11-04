import React from 'react'
import { Libraries, Uploader } from '@beaverbuilder/cloud-ui'
import { Layout } from 'assistant/ui'

export default () => {
	const { library, showUpload, uploader } = Libraries.LibraryContext.use()

	if ( ! library.permissions.edit_items ) {
		return null
	}

	return (
		<>
			{ showUpload &&
				<Libraries.LibraryUpload />
			}
			{ !! uploader.queuedFiles.length &&
				<Layout.Box padY={ false }>
					<Uploader.FileList files={ uploader.queuedFiles } />
				</Layout.Box>
			}
		</>
	)
}
