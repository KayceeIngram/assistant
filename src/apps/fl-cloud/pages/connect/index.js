import React, { useState } from 'react'
import { __ } from '@wordpress/i18n'
import { Button, Layout, Page } from 'assistant/ui'
import { getSystemConfig } from 'assistant/data'
import { getQueryArgs, addQueryArgs } from 'assistant/utils/url'
import cloud from 'assistant/cloud'
import AppIcon from '../../icon'

export default () => {
	const { cloudConfig } = getSystemConfig()
	const { href } = window.location
	const { token, ...args } = getQueryArgs( href )
	const [ isTokenValid, setIsTokenValid ] = useState( !! token )

	if ( token && isTokenValid ) {
		cloud.session.setToken( token )
		cloud.auth.refresh().then( response => {
			cloud.session.create( response.token, response.user, true )
			window.location.href = addQueryArgs( href.split( '?' ).shift(), args )
		} ).catch( () => {
			cloud.session.destroy()
			setIsTokenValid( false )
		} )
		return <Page.Loading />
	}

	const connect = () => {
		const redirect = encodeURIComponent( href )
		window.location.href = `${ cloudConfig.appUrl }/login/connect?redirect=${ redirect }`
	}

	return (
		<Page
			className='fl-asst-connect-layout'
			title={ __( 'Cloud' ) }
			icon={ <AppIcon context='sidebar' /> }
			shouldShowBackButton={ false }
		>
			<Layout.Headline>{ __( 'Connect to Assistant Cloud' ) }</Layout.Headline>
			<p>{ __( 'Click the button below to connect this site to your Assistant Cloud account.' ) }</p>
			<Button appearance="normal" onClick={ connect }>
				{ __( 'Connect' ) }
			</Button>
			<Layout.Box padX={ false }>
				<a href={ `${ cloudConfig.appUrl }/register` } target='blank'>
					{ __( 'Don\'t have an account? Register now!' ) }
				</a>
			</Layout.Box>
		</Page>
	)
}
