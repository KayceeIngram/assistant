import React from 'fl-react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { gravatar } from 'assistant/utils'

export const Avatar = ( props ) => {
	const { email = null, size = 50, displayName = null } = props

	const classes = classnames(
		'fl-asst-avatar',
		props.className
	)

	const imgStyle = {
		borderRadius: '50%',
		border: '2px solid var(--fl-asst-dim-text)',
		height: `${size}px`,
		width: `${size}px`
	}

	return (
		<div className={ classes } style={ { borderRadius: '50%' } }>
			<img src={ gravatar( email, size ) } style={ imgStyle } alt={displayName}/>
		</div>
	)
}

Avatar.propTypes = {
	email: PropTypes.string,
	size: PropTypes.number
}
