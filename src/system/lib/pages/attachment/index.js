import React from 'fl-react'
import { __ } from '@wordpress/i18n'
import { Page, Form, Control } from 'lib'
import { getSrcSet } from 'utils/image'

export const Attachment = ( { location } ) => {
	const defaultItem = {
		url: '',
		sizes: {},
		caption: '',
		description: '',
		alt: '',
		title: '',
		filesize: '',
	}
	const item = 'undefined' !== typeof location.state.item ?
		{ ...defaultItem, ...location.state.item } :
		defaultItem

	const srcSet = getSrcSet( item.sizes )


	// Form Handler
	const { form, useFormContext } = Form.useForm( {
		title: {
			label: __( 'Title' ),
			labelPlacement: 'beside',
		},
		alt: {
			label: __( 'Alternative Text' ),
			labelPlacement: 'beside',
		},
		description: {
			type: 'textarea',
			label: __( 'Description' ),
			rows: 2,
		},
		caption: {
			type: 'textarea',
			label: __( 'Caption' ),
			rows: 2,
		},
		url: {
			label: __( 'URL' ),
		}
	},
	{ /* options */ }, item )

	const Actions = () => {
		return (
			<Control.NextPrev
				onPrev={ () => {} }
				onNext={ () => {} }
			/>
		)
	}

	const sectionData = {
		attachment: item,

		useForm: useFormContext,

		actions: [
			{
				label: __( 'View Attachment Page' ),
				href: '#'
			},
			{
				label: __( 'Edit in Admin' ),
				href: '#'
			},
			{
				label: __( 'Replace File' ),
				onClick: () => {}
			},
			{
				label: __( 'Refresh Thumbnails' ),
				onClick: () => {}
			},
			{
				label: __( 'Move to Trash' ),
				onClick: () => {}
			},
		],
	}

	return (
		<Page shouldPadSides={ false } title={ __( 'Attachment' ) } headerActions={ <Actions /> }>

			<img src={ item.thumbnail } srcSet={ srcSet } />

			<Form { ...form }>
				<Page.RegisteredSections
					location={ { type: 'attachment' } }
					data={ sectionData }
				/>
			</Form>
		</Page>
	)
}
