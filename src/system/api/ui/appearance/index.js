import React from 'react'
import { Env } from 'ui'
import classname from 'classnames'

import './style.scss'

export const Appearance = ( {
	className,
	brightness,
	...rest
} ) => {
	const { application } = Env.use()

	const classes = classname( {
		[`fluid-color-scheme-${brightness}`]: brightness && ( 'beaver-builder' !== application ),
	}, className )

	const style = { // This stuff is mainly for the BB panel integration
		maxHeight: '100%',
		minHeight: 0,
		flex: '1 1 auto',
		display: 'flex',
		flexDirection: 'column',
	}

	return (
		<div className={ classes } { ...rest } style={ style } />
	)
}
