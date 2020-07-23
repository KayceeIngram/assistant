import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { __ } from '@wordpress/i18n'
import { Button, Icon, Layout } from 'assistant/ui'
import cloud from 'assistant/cloud'

export default ( {
	headline = '',
	team = null,
	query = null,
} ) => {
	const history = useHistory()
	const teamId = team ? team.id : 0
	const [ libraries, setLibraries ] = cloud.libraries.useAll( teamId )

	const canAddNew = team ? team.user_permissions.update : true
	const [ isAddingNew, setIsAddingNew ] = useState( false )
	const [ newName, setNewName ] = useState( '' )
	const [ loading, setLoading ] = useState()

	const createLibrary = () => {
		if ( ! newName ) {
			return
		}
		const data = {
			name: newName,
			team_id: teamId
		}
		setNewName( '' )
		setIsAddingNew( false )
		setLoading( true )
		cloud.libraries.create( data ).then( response => {
			libraries.unshift( response.data )
			setLibraries( [ ...libraries ] )
		} ).catch( error => {
			alert( __( 'Something went wrong. Please try again.' ) )
		} ).finally( () => {
			setLoading( false )
		} )
	}

	return (
		<>
			{ ! isAddingNew &&
				<Layout.Toolbar>
					<Layout.Headline>
						{ headline }
					</Layout.Headline>
					{ loading &&
						<Icon.Loading
							style={ {
								marginLeft: 'auto'
							} }
						/>
					}
					{ canAddNew && ! loading &&
						<Button
							appearance='transparent'
							onClick={ () => setIsAddingNew( true ) }
							style={ {
								marginLeft: 'auto'
							} }
						>
							<Icon.Plus />
						</Button>
					}
				</Layout.Toolbar>
			}

			{ isAddingNew &&
				<Layout.Toolbar>
					<input
						type='text'
						placeholder={ __( 'New Library Name' ) }
						value={ newName }
						onChange={ e => setNewName( e.target.value ) }
					/>
					<Button
						onClick={ createLibrary }
						style={ {
							marginLeft: 'var(--fluid-sm-space)'
						} }
					>
						<Icon.Plus />
					</Button>
					<Button
						onClick={ () => setIsAddingNew( false ) }
					>
						<Icon.Close />
					</Button>
				</Layout.Toolbar>
			}

			{ libraries && 0 === libraries.length &&
				<Layout.Box style={ { textAlign: 'center' } }>
					{ __( 'No libraries found.' ) }
				</Layout.Box>
			}

			{ libraries && 0 !== libraries.length &&
				<Layout.Box style={ {
					flexDirection: 'row',
					flexWrap: 'wrap',
					padding: 0,
				} }>
					{ libraries.map( ( library, i ) =>
						<Layout.Box
							key={ i }
							style={ {
								width: '50%',
								cursor: 'pointer'
							} }
							onClick={ () => history.push( `/fl-cloud-libraries/${ library.id }` ) }
						>
							<Layout.AspectBox>
								{ library.thumb && <img src={ library.thumb } /> }
							</Layout.AspectBox>
							<Layout.Box style={ {
								textAlign: 'center'
							} }>
								{ library.name }
							</Layout.Box>
						</Layout.Box>
					) }
				</Layout.Box>
			}
		</>
	)
}
