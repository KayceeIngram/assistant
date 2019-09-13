import React, { useContext } from 'fl-react'
import { getSystemActions } from 'store'
import { Form, Button, Control, Nav } from 'lib'
import { __ } from '@wordpress/i18n'

const { registerSection } = getSystemActions()

registerSection( 'fl-screen-labels', {
	label: __( 'Labels' ),
	location: {
		type: [ 'post' ],
	},
	render: ( { useForm } ) => {

		const { labels, isFavorite } = useForm()

		return (
			<>
				<Form.Item label={ __( 'Mark as Favorite' ) } placement="beside">
					<Button onClick={ () => { isFavorite.onChange( !isFavorite.value )}}>
						{ isFavorite.value ? __( 'Favorite' ) : __('Not Your Favorite') }
					</Button>
				</Form.Item>

				<Form.Item label={ labels.label }>
					<Control.TagGroup value={ labels.value } />
				</Form.Item>
			</>
		)
	},
} )

registerSection( 'fl-screen-actions', {
	label: __( 'Actions' ),
	location: {
		type: [ 'post', 'attachment', 'comment', 'plugin' ],
	},
	render: ( { useForm } ) => {

		if ( 'undefined' === typeof useForm ) return null

		const { actions } = useForm()

		if ( 'undefined' === typeof actions || actions.length < 1 ) return (
			<div>{__('No Actions Found')}</div>
		)

		return (
			<>
				<Form.Item label={actions.label}>
					<Button.Group appearance="grid">
						{ Button.renderActions( actions.value ) }
					</Button.Group>
				</Form.Item>
			</>
		)
	},
} )
