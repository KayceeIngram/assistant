import React, { useState, useEffect, createRef } from 'react'
import classname from 'classnames'
import posed from 'react-pose'
import { StackContext } from 'components'
import './style.scss'

const handleTransition = () => {
	return {
		type: 'tween',
		duration: 220
	}
}

export const StackView = posed.div( props => {
	const { shouldAnimate } = props

	if ( false === shouldAnimate ) {
		return {
			init: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: 'var(--fl-background-color)'
			},
			past: {},
			present: {},
			future: {},
		}
	}

	return {
		init: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'var(--fl-background-color)',
			pointerEvents: 'auto'
		},
		past: {
			x: '0%',
			scale: .9,
			opacity: 0,
			transition: handleTransition,
			applyAtStart: {
				pointerEvents: 'none'
			}
		},
		present: {
			x: '0%',
			scale: 1,
			opacity: 1,
			transition: handleTransition,
			applyAtEnd: {
				pointerEvents: 'auto'
			}
		},
		future: {
			x: '80%',
			opacity: 0,
			transition: handleTransition,
			applyAtStart: {
				pointerEvents: 'none'
			}
		},
	}
} )
StackView.displayName = 'StackView'


export const Stack = ( { children, className } ) => {
	const [ views, setViews ] = useState( [
		{
			key: Date.now(),
			pose: 'present',
			children,
			config: { shouldAnimate: true },
		}
	] )
	const [ action, setAction ] = useState()

	// After DOM is mounted, "push" new view on.
	useEffect( () => {
		if ( action ) {
			if ( 'push' === action ) {
				setViews( views.map( view => {
					switch ( view.pose ) {
					case 'future':
						view.pose = 'present'
						break
					case 'present':
						view.pose = 'past'
					}
					return view
				} ) )
			}
			setAction( null )
		}
	} )

	// After pop transition completes, cleanup data
	const poseComplete = name => {
		if ( action && 'pop' === action && 'future' === name ) {

			// ditch the last 'future' item
			views.pop()
			setViews( Array.from( views ) )
		}
		if ( action && 'root' === action && 'future' === name ) {

			// Drop the last 'future' item.
			views.pop()
			setViews( Array.from( views ) )
		}
	}

	// Setup the API that will be exposed with StackContext
	const api = {
		isRootView: false,
		isCurrentView: false,
		viewCount: views.length,

		pushView: (
			children,
			config = { shouldAnimate: true }
		) => {
			const newViews = views
			newViews.push( {
				key: Date.now(),
				pose: 'future',
				children,
				config,
			} )
			setViews( newViews )
			setAction( 'push' )
		},
		popView: () => {
			if ( 2 > views.length ) {
				return
			}

			const newViews = views
			newViews[ newViews.length - 1 ].pose = 'future'
			newViews[ newViews.length - 2 ].pose = 'present'
			setViews( newViews )
			setAction( 'pop' )
		},
		popToRoot: () => {
			if ( 2 > views.length ) {
				return
			}

			const current = views[ views.length - 1 ]
			current.pose = 'future'
			const root = views[0]
			root.pose = 'present'
			setViews( [ root, current ] )
			setAction( 'root' )
		},
	}

	const classes = classname( {
		'fl-asst-stack': true,
	}, className )

	return (
		<div className={classes}>
			{ views.map( ( view, i ) => {
				const { key, pose } = view
				const checks = {
					isRootView: 0 === i,
					isCurrentView: 'present' === pose ? true : false,
				}
				const ref = createRef()
				const context = Object.assign( { ref }, api, checks )
				const props = Object.assign( { ref }, view )
				view.className = 'fl-asst-stack-view'

				return (
					<StackContext.Provider key={i} value={context}>
						<StackView key={key} onPoseComplete={poseComplete} {...props} />
					</StackContext.Provider>
				)
			} ) }
		</div>
	)
}
