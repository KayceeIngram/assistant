import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { __ } from '@wordpress/i18n'
import { Button, Icon, Menu } from 'assistant/ui'

export default ( { library } ) => {
	const history = useHistory()
	const { pathname } = useLocation()
	const basePath = `/fl-cloud-libraries/${ library.id }`
	const teamId = 'team' === library.owner_type ? library.owner_id : 0

	const goto = ( route ) => {
		if ( pathname === basePath ) {
			history.push( route )
		} else {
			history.replace( route )
		}
	}

	return (
		<div
			style={ {
				display: 'flex',
				alignItems: 'center'
			} }
		>
			<AddNewMenu library={ library } />
			<Button
				size='sm'
				appearance={ pathname.includes( '/settings' ) ? '' : 'transparent' }
				onClick={ () => goto( `${ basePath }/settings` ) }
			>
				<Icon.Cog />
			</Button>
		</div>
	)
}

const AddNewMenu = ( { library } ) => {
	const [ isMenuShowing, setIsMenuShowing ] = useState( false )
	const history = useHistory()
	const { pathname } = useLocation()
	const basePath = `/fl-cloud-libraries/${ library.id }`

	const goto = ( route ) => {
		setIsMenuShowing( false )
		if ( pathname === basePath ) {
			history.push( route )
		} else {
			history.replace( route )
		}
	}


	const MenuContent = () => {
		return (
			<>
				<Menu.Item onClick={ () => goto( `${ basePath }/add/posts` ) }>
					{ __( 'Posts' ) }
				</Menu.Item>
				<Menu.Item onClick={ () => goto( `${ basePath }/add/images` ) }>
					{ __( 'Images' ) }
				</Menu.Item>
				<Menu.Item onClick={ () => goto( `${ basePath }/add/svg` ) }>
					{ __( 'SVG' ) }
				</Menu.Item>
				<Menu.Item onClick={ () => goto( `${ basePath }/add/colors` ) }>
					{ __( 'Colors' ) }
				</Menu.Item>
			</>
		)
	}

	return (
		<Menu
			content={ <MenuContent /> }
			isShowing={ isMenuShowing }
			onOutsideClick={ () => setIsMenuShowing( false ) }
		>
			<Button
				size='sm'
				appearance='transparent'
				onClick={ () => setIsMenuShowing( ! isMenuShowing ) }
				style={ {
					marginLeft: 'auto'
				} }
			>
				<Icon.Plus />
			</Button>
		</Menu>
	)
}
