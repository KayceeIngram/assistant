import React, { useState, useEffect } from 'react'
import classname from 'classnames'
import { CancelToken, isCancel } from 'axios'
import { __ } from '@wordpress/i18n'
import { List, Button, Icon } from 'ui'
import Clipboard from 'react-clipboard.js'
import { getWpRest } from 'utils/wordpress'
import { getSrcSet } from 'utils/image'
import './style.scss'

const Attachments = ( {
	baseURL,
	listStyle = '',
	className,
	...rest
} ) => {
	const [ labels, setLabels ] = useState( {} )
	const wpRest = getWpRest()
	const source = CancelToken.source()

	// Retrieve Labels
	useEffect( () => {

		// Get the color labels references
		wpRest.labels().findWhere( {}, {
			cancelToken: source.token,
		} ).then( response => {
			const items = {}
			if ( 'data' in response ) {
				for ( let i in response.data ) {
					const { id, ...rest } = response.data[i]
					items[id] = rest
				}
				setLabels( items )
			}
		} ).catch( ( error ) => {
			if ( ! isCancel( error ) ) {
				console.log( error ) // eslint-disable-line no-console
			}
		} )

		return () => source.cancel()
	}, [] )

	const classes = classname( {
		[`fl-asst-${listStyle}-list`]: listStyle
	}, className )

	const trashItem = () => console.log( 'Stub: Need to implment trash functionality' )
	return (
		<List.WordPress
			type="attachments"
			className={ classes }
			getItemProps={ ( item, defaultProps ) => {

				const Extras = () => (
					<div className="fl-asst-item-extras">
						<Button
							title={ __( 'View Post' ) }
							tabIndex="-1"
							href={ item.url }
							appearance="transparent"
						>
							<Icon.View />
						</Button>
						<Clipboard
							button-tabIndex={ '-1' }
							button-className={ 'fluid-button fluid-appearance-transparent' }
							data-clipboard-text={ item.url }
						>
							<Icon.Link />
						</Clipboard>
						<Button
							onClick={ trashItem }
							tabIndex="-1"
							title={ __( 'Move to Trash' ) }
							status='destructive'
							appearance="transparent"
						>
							<Icon.Trash />
						</Button>
					</div>
				)

				const getMarks = item => {
					const marks = []

					if ( 'labels' in item && 0 < item.labels.length ) {

						item.labels.map( id => {
							if ( id in labels ) {
								const { color, label } = labels[id]
								marks.push(
									<span
										className="fl-asst-list-item-color-mark"
										style={ { background: color } }
										title={ label }
									></span>
								)
							}
						} )
					}

					if ( 'isFavorite' in item && item.isFavorite ) {
						marks.push(
							<span>
								<Icon.Bookmark style={ { height: 12, width: 12, marginTop: 2 } } />
							</span>
						)
					}

					return marks
				}

				return {
					...defaultProps,
					thumbnail: item.thumbnail,
					shouldAlwaysShowThumbnail: true,
					label: item.title ? item.title : __( 'Untitled' ),
					description: item.type + ' | ' + item.subtype,
					to: {
						pathname: `${baseURL}/attachment/${item.id}`,
						state: { item }
					},
					extras: () => <Extras />,
					marks: getMarks( item ),
					className: classname( {
						['fl-asst-grid-list-item']: 'grid' === listStyle
					}, defaultProps.className ),
					children: 'grid' === listStyle ? props => <GridItem item={ item } { ...props } /> : defaultProps.children,
				}
			} }
			{ ...rest }
		/>
	)
}

const GridItem = ( { item, extras } ) => {
	const { type, thumbnail, sizes } = item

	if ( 'image' !== type ) {
		return null
	}

	const itemExtras = 'function' === typeof extras ? extras() : null
	const stopProp = e => e.stopPropagation()

	return (
		<div className="fl-asst-attachment-grid-item">
			<img src={ thumbnail } srcSet={ getSrcSet( sizes ) } />
			{ itemExtras && (
				<div
					className="fl-asst-list-item-extras"
					onClick={ stopProp }
				>{itemExtras}</div>
			) }
		</div>
	)
}

export default Attachments
