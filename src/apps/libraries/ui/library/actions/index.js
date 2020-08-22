import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Button, Icon } from 'assistant/ui'
import { Libraries } from '@beaverbuilder/cloud-ui'

export default () => {
	const history = useHistory()
	const { pathname } = useLocation()
	const { library, showUpload, setShowUpload } = Libraries.LibraryContext.use()
	const basePath = `/libraries/${ library.id }`

	if ( ! library.permissions.update ) {
		return null
	}

	const goToUpload = () => {
		setShowUpload( ! showUpload )
		if ( pathname !== basePath ) {
			history.goBack()
		}
	}

	const goToSettings = () => {
		if ( pathname === basePath ) {
			history.push( `${ basePath }/settings` )
		}
	}

	return (
		<>
			<Button
				appearance='transparent'
				isSelected={ showUpload && ! pathname.includes( '/settings' ) }
				onClick={ goToUpload }
				style={ {
					marginLeft: 'auto'
				} }
			>
				<Icon.Plus />
			</Button>
			<Button
				appearance='transparent'
				isSelected={ pathname.includes( '/settings' ) }
				onClick={ goToSettings }
			>
				<Icon.Cog />
			</Button>
		</>
	)
}
