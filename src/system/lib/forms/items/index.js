import React from 'fl-react'
import { Form } from '../'

export const TextItem = ( {
	label,
	labelPlacement,
	type = 'text',
	id,
	value,
	isRequired = false,
	onChange = () => {},
	...rest,
} ) => {

	const isTextArea = 'textarea' === type

	return (
		<Form.Item label={ label } placement={ labelPlacement } labelFor={ id } isRequired={ isRequired }>
			{ isTextArea && (
				<textarea
					key={ id }
					id={ id }
					value={ value }
					onChange={ e => onChange( e.target.value, e ) }
					{ ...rest }
				/>
			)}
			{ ! isTextArea && (
				<input
					type={ type }
					key={ id }
					id={ id }
					value={ value }
					onChange={ e => onChange( e.target.value, e ) }
					{ ...rest }
				/>
			)}
		</Form.Item>
	)
}

export const SelectItem = ( {
	label,
	labelPlacement,
	id,
	value,
	options = {},
	isRequired = false,
	onChange = () => {},
	...rest,
} ) => {

	return (
		<Form.Item label={ label } placement={ labelPlacement } labelFor={ id } isRequired={ isRequired }>
			<select
				key={ id }
				id={ id }
				value={ value }
				onChange={ e => onChange( e.target.value, e ) }
				{ ...rest }
			>
				{ Object.entries( options ).map( ( [ value, label ] ) => (
					<option key={ value } value={ value }>{label}</option>
				) )}
			</select>
		</Form.Item>
	)
}

export const CheckboxItem = ( {
	label,
	labelPlacement,
	id,
	value,
	isRequired = false,
	onChange = () => {},
	content,
	...rest,
} ) => {

	return (
		<Form.Item label={ label } placement={ labelPlacement } isRequired={ isRequired }>
			<input
				type="checkbox"
				key={ id }
				id={ id }
				checked={ value ? true : false }
				onChange={ e => onChange( e.target.checked, e ) }
				{ ...rest }
			/>
			{ content && <label htmlFor={ id }>{content}</label> }
		</Form.Item>
	)
}
