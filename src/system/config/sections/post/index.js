import React from 'fl-react'
import { getSystemActions } from 'store'
import { Form, Control } from 'lib'
import { __ } from '@wordpress/i18n'

const { registerSection } = getSystemActions()

registerSection( 'fl-post-title', {
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const { title, slug } = useForm()

		return (
			<>
				<Form.TextItem { ...title } />
				<Form.TextItem { ...slug } />
			</>
		)
	},
} )

registerSection( 'fl-post-permalink', {
	label: __( 'Permalink' ),
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const { url } = useForm()
		return (
			<>
				<Form.Item>
					<Control.URL
						value={ url.value }
					/>
				</Form.Item>
			</>
		)
	},
} )

registerSection( 'fl-post-publish', {
	label: __( 'Publish Settings' ),
	location: {
		type: 'post',
	},
	render: ( { useForm } ) => {
		const { status, visibility, parent } = useForm()
		return (
			<>
				<Form.SelectItem { ...status } />
				<Form.SelectItem { ...visibility } />
				<Form.SelectItem { ...parent } />
			</>
		)
	},
} )

registerSection( 'fl-post-categories', {
	label: 'Categories',
	location: {
		type: 'post',
	},
	render: () => (
		<div>Categories</div>
	),
} )

registerSection( 'fl-post-tags', {
	label: 'Tags',
	location: {
		type: 'post',
	},
	render: () => (
		<div>Tags</div>
	),
} )

registerSection( 'fl-post-comments', {
	label: 'Comments',
	location: {
		type: 'post',
		tab: 'comments',
	},
	render: () => (
		<div>Comments List</div>
	),
} )


// Create Post Screen
registerSection( 'fl-new-post-title', {
	label: 'Basic Info',
	location: {
		type: 'create-post',
	},
	render: () => (
		<>
			<Form.Item label={ __( 'Title' ) }>
				<input type="text" placeholder={ __( 'Title' ) } />
			</Form.Item>
		</>
	),
} )