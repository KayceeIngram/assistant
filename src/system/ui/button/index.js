import React, { Children, cloneElement, useState, useLayoutEffect, useRef } from 'react'
import { __ } from '@wordpress/i18n'
import classname from 'classnames'
import { Button as FLUID_Button } from 'fluid/ui'
import { Icon } from 'ui'
import './style.scss'

const Button = { ...FLUID_Button }

const Rule = ( { className, direction: dir = 'horizontal', isHidden = false } ) => {
	const classes = classname( className, {
		'fl-asst-divider': true,
		'fl-asst-vertical-divider': 'vertical' === dir,
		'fl-asst-horizontal-divider': 'horizontal' === dir,
		'fl-asst-is-hidden': isHidden,
	} )
	return (
		<hr className={ classes } />
	)
}

/**
 * Button.Group
 */
Button.Group = ( {
	children,
	className,
	direction = 'row',
	appearance = 'normal',
	shouldHandleOverflow = false,
	label,
	...rest
} ) => {
	const [ visibleChildren, setVisibleChildren ] = useState( [] )
	const [ moreChildren, setMoreChildren ] = useState( [] )
	const [ shouldShowMoreBtn, setShouldShowMoreBtn ] = useState( true )
	const [ shouldShowMoreMenu, setShouldShowMoreMenu ] = useState( false )
	const wrapRef = useRef()
	const moreBtnRef = useRef()

	const shouldInsertDividers = 'normal' === appearance
	const dividerDirection = 'row' === direction ? 'vertical' : 'horizontal'

	let allChildren = []
	let childWidths = []

	allChildren = Children.map( children, ( child, i ) => {

		if ( ! child ) {
			return null
		}

		const isFirst = 0 === i
		const shouldInsertDivider = ! isFirst && shouldInsertDividers
		const shouldHideDivider = child.props.isSelected
		const childRef = el => {
			if ( el ) {
				childWidths.push( el.clientWidth + ( isFirst ? 0 : 2 ) )
			}
		}
		return (
			<>
				{ shouldInsertDivider && <Rule direction={ dividerDirection } isHidden={ shouldHideDivider } /> }
				{ cloneElement( child, { ref: childRef } ) }
			</>
		)
	} )

	useLayoutEffect( () => {
		if ( ! shouldHandleOverflow ) {
			setShouldShowMoreBtn( false )
			return
		}

		const wrapWidth = wrapRef.current.clientWidth
		const moreBtnWidth = moreBtnRef.current.offsetWidth
		let totalChildWidths = 0
		let visibleChildren = []
		let moreChildren = []

		childWidths.map( ( width, i ) => {
			totalChildWidths += width
			if ( totalChildWidths + moreBtnWidth < wrapWidth ) {
				visibleChildren.push( allChildren[ i ] )
			} else {
				moreChildren.push( allChildren[ i ] )
			}
		} )

		setVisibleChildren( visibleChildren )
		setMoreChildren( moreChildren )
		setShouldShowMoreBtn( 0 < moreChildren.length )
	}, [] )

	const classes = classname( {
		'fl-asst-button-group': true,
		[`fl-asst-button-group-${direction}`]: direction,
		[`fl-asst-button-group-appearance-${appearance}`]: appearance,
	}, className )

	const props = {
		...rest,
		className: classes,
		role: rest.role ? rest.role : 'group',
		ref: wrapRef,
	}

	const MoreBtn = () => {
		return (
			<>
				<Rule
					className='fl-asst-more-button-divider'
					direction={ dividerDirection }
				/>
				<Button
					ref={ moreBtnRef }
					className='fl-asst-more-button'
					onClick={ () => setShouldShowMoreMenu( ! shouldShowMoreMenu ) }
				>
					{__( 'More' )}
				</Button>
			</>
		)
	}

	const MoreMenu = () => {
		return (
			<div className="fl-asst-more-menu">{ moreChildren }</div>
		)
	}

	return (
		<>
			{ label && <label>{label}</label> }
			<div { ...props }>
				{ 0 === visibleChildren.length ? allChildren : visibleChildren }
				{ shouldShowMoreBtn && <MoreBtn /> }
			</div>
			{ shouldShowMoreMenu && 0 < moreChildren.length && <MoreMenu /> }
		</>
	)
}

Button.Loading = ( {
	className,
	children,
	isLoading = true,
	...rest
} ) => {
	const classes = classname( {
		'fl-asst-button-loading': true,
	}, className )

	return (
		<Button className={ classes } { ...rest }>
			{ children }
			{ isLoading && <Icon.SmallSpinner /> }
		</Button>
	)
}

Button.renderActions = actions => {
	const defaultAction = {
		label: null,
		shouldRender: true,
		isEnabled: true,
	}
	return Object.values( actions ).map( ( action, i ) => {

		const { label, shouldRender, isEnabled, ...rest } = { ...defaultAction, ...action }

		// NOTE: isEnabled is an older prop coming from the currently viewing actions.

		if ( ! shouldRender || ! isEnabled ) {
			return null
		}

		return (
			<Button key={ i } { ...rest }>{label}</Button>
		)
	} )
}

export { Button }

export default Button
