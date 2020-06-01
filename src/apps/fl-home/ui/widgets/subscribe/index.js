import React, { useState } from 'react'
import { __ } from '@wordpress/i18n'
import { ENTER } from '@wordpress/keycodes'
import { Form, Icon, Button, Layout } from 'assistant/ui'
import { Card } from 'home/ui'
import './style.scss'

const SubscribeWidget = () => {
	const [ email, setEmail ] = useState( '' )
	const [ isSubscribing, setisSubscribing ] = useState( false )

	const placeholderText = __( 'Please enter a valid email address.' )

	const isValid = mail => {
		if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( mail ) ) {
			return true
		}
		alert( placeholderText )
		return false
	}

	const subscribeUser = () => {
		const successText = __( 'Subscribed Successfully!' )
		const errorText = __( 'There was an issue subscribing. Please try again.' )

		if ( '' === email ) {

			//alert( placeholderText )
		} else if ( isValid( email ) ) {

			setisSubscribing( true )

			if ( 'undefined' !== typeof window._dcq ) {
				window._dcq.push( [
					'identify',
					{
						email: email,
						tags: [ 'Assistant Newsletter' ],
						success: function( response ) {
							if ( response.success ) {
								setisSubscribing( false )
								alert( successText )
								setEmail( '' )
							} else {
								setisSubscribing( false )
								alert( errorText )
							}
						},
					},
				] )
			} else {
				setisSubscribing( false )
				alert( errorText )
			}
		}
	}

	return (
		<Card title={ __( 'Sign Up For Updates' ) }>
			<Layout.Box style={ { paddingTop: 0 } }>
				<p style={ { marginTop: 0 } }>{__( 'Keep up-to-date with the latest news and updates about the Assistant Project.' )}</p>
				<Form.Input
					value={ email }
					onChange={ e => setEmail( e.target.value ) }
					onKeyPress={ e => ( ENTER === e.which ) && subscribeUser() }
					placeholder={ __( 'email@example.com' ) }

					before={ isSubscribing && (
						<span>
							<Icon.Loading />
						</span>
					) }

					after={ email && (
						<Button
							onClick={ e => {
								subscribeUser()
								e.preventDefault()
							} }
						>
							<span style={ { marginRight: 'var(--fluid-sm-space)' } }>{__( 'Send' )}</span>
							<Icon.Return />
						</Button>
					) }
				/>
			</Layout.Box>
		</Card>
	)
}

export default SubscribeWidget