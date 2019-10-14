import React, { useEffect, useState, useRef } from 'fl-react'
import classname from 'fl-classnames'
import { Button, Color, Icon } from 'lib'
import './style.scss'

export const SuggestItem = ( {
	label,
	labelPlacement,
	id,
	hasChanges = false,
	isRequired = false,
	isVisible = true,
	options = [],
	value = [],
	onRemove = () => {},
	onAdd = () => {},
	...rest,
} ) => {

	if ( ! isVisible ) {
		return null
	}

	const [ suggestOptions, setSuggestOptions ] = useState( null )
	const [ inputValue, setInputValue ] = useState( '' )
	const inputRef = useRef()

	useEffect( () => {
		if ( 2 > inputValue.length ) {
			setSuggestOptions( null )
			return
		}
		const newOptions = []
		Object.keys( options ).map( key => {
			if ( options[ key ].includes( inputValue ) ) {
				newOptions[ key ] = options[ key ]
			}
		} )
		setSuggestOptions( Object.keys( newOptions ).length ? newOptions : null )
	}, [ inputValue ] )

	const getTags = () => {
		const tags = []
		value.map( v => {
			if ( options[ v ] ) {
				tags.push( {
					id: v,
					label: options[ v ],
				} )
			}
		} )
	}

	return (
		<Form.Item
			label={ label }
			placement={ labelPlacement }
			labelFor={ id }
			isRequired={ isRequired }
			hasChanges={ hasChanges }
		>
			<div onClick={ () => inputRef.current.focus() }>
				<Control.TagGroup
					key={ id }
					id={ id }
					value={ getTags() }
					onRemove={ ( v, i ) => {
						value.splice( i, 1 )
						onRemove( value )
					} }
				/>
				<input
					type='text'
					ref={ inputRef }
					value={ inputValue }
					size={ inputValue.length + 1 }
					onChange={ e => setInputValue( e.target.value ) }
					onKeyDown={ e => {
						if ( 13 === e.keyCode ) {
							e.preventDefault()
							onAdd( inputValue )
							setInputValue( '' )
						}
					} }
				/>
				{ suggestOptions &&
					<div className='fl-asst-tag-group-suggest'>
						{ Object.keys( suggestOptions ).map( ( key, i ) => {
							return (
								<div
									key={ i }
									className='fl-asst-tag-group-suggest-item'
									onClick={ () => {
										onAdd( suggestOptions[ key ] )
										setInputValue( '' )
									} }
								>
									{ suggestOptions[ key ] }
								</div>
							)
						} ) }
					</div>
				}
			</div>
		</Form.Item>
	)
}