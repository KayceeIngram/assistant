import React, { createRef, createContext } from 'fl-react'
import classname from 'classnames'
import './style.scss'

export const Page = ( {
	className,
	shouldPadTop = false,
	shouldPadSides = true,
	shouldPadBottom = true,
	...rest
} ) => {

	const ref = createRef()

	const classes = classname( {
		'fl-asst-page': true,
		'fl-asst-page-pad-top': shouldPadTop,
		'fl-asst-page-pad-sides' : shouldPadSides,
		'fl-asst-page-pad-bottom' : shouldPadBottom,
	}, className )

	const context = {
		...Page.defaults,
		ref,
	}

	return (
		<Page.Context.Provider value={context}>
			<div className={classes} ref={ref} {...rest} />
		</Page.Context.Provider>
	)
}

Page.defaults = {
	ref: null,
}

Page.Context = createContext( Page.defaults )
Page.Context.displayName = 'Page.Context'
