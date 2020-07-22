import React, { useState } from 'react'
import { __ } from '@wordpress/i18n'
import { Button, Form, Icon, Layout, List, Page } from 'assistant/ui'
import cloud from 'assistant/cloud'
import AppIcon from '../../icon'

export default () => {
	const [ currentTeam, setCurrentTeam ] = useState( 0 )
	const [ teams ] = cloud.teams.useAll()
	const [ libraries ] = cloud.libraries.useAll( currentTeam )

	if ( ! teams ) {
		return <Page.Loading />
	}

	const getOwnerOptions = () => {
		const options = {
			0: __( 'Your Libraries' ),
		}
		if ( teams ) {
			teams.map( team => options[ team.id ] = team.name )
		}
		return options
	}

	const getItemProps = ( item, defaults ) => {
		return {
			...defaults,
			label: item.name,
			description: item.description,
			shouldAlwaysShowThumbnail: true,
			thumbnailSize: 'sm',
			to: {
				pathname: `/fl-cloud-libraries/${item.id}`,
			}
		}
	}

	return (
		<Page
			title={ __( 'Libraries' ) }
			icon={ <AppIcon context="sidebar" /> }
			shouldShowBackButton={ false }
			actions={ <PageActions /> }
		>
			<Page.Section padX={ false }>
				<Layout.Box padY={ false } style={ { flexDirection: 'row' } }>
					<Form.SelectItem
						options={ getOwnerOptions() }
						value={ currentTeam }
						onChange={ value => setCurrentTeam( parseInt( value ) ) }
					></Form.SelectItem>
					<Button to='/fl-cloud-libraries/new' style={ { marginLeft: '10px' } }>
						<Icon.Plus />
					</Button>
				</Layout.Box>
				{ ! libraries &&
					<Page.Loading />
				}
				{ libraries && !! libraries.length &&
					<List
						items={ libraries }
						getItemProps={ getItemProps }
					/>
				}
				{ libraries && ! libraries.length &&
					<Layout.Box padY={ false } style={ { textAlign: 'center' } }>
						<p>{ __( 'No libraries found.' ) }</p>
					</Layout.Box>
				}
			</Page.Section>
		</Page>
	)
}

const PageActions = () => {
	return (
		<Button
			title={ __( 'Logout' ) }
			onClick={ cloud.auth.logout }
		>
			<span
				className="dashicons dashicons-lock"
			></span>
		</Button>
	)
}
