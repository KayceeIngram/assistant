import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useStore, useDispatch } from 'store'
import { useWindowSize } from 'utils/window'

export const useAppFrame = () => {
	const { panelPosition, appFrameSize } = useStore()
	const { setAppFrameSize } = useDispatch()
	const { width: windowWidth } = useWindowSize()

	const normalPreferredWidth = 440
	const widePreferredWidth = 720
	let frameWidth = 0
	let frameHeight = '100vh'

	if ( 'wide' === appFrameSize ) {
		frameWidth = 768 > windowWidth ? windowWidth : widePreferredWidth
	} else if ( 'full' === appFrameSize ) {
		frameWidth = '100vw'
	} else {
		frameWidth = normalPreferredWidth > ( windowWidth * .6 ) ? windowWidth : normalPreferredWidth
	}

	return {
		appFrame: {
			width: frameWidth,
			height: frameHeight,
			sizeName: appFrameSize,
			alignment: panelPosition,
		},
		setAppFrameSize,
	}
}

export const AppFrame = ( { children } ) => {
	const { isShowingUI } = useStore()
	const { appFrame: { width, height, alignment } } = useAppFrame()
	const { width: windowWidth } = useWindowSize()

	const transform = () => {
		if ( isShowingUI ) {
			return 'translateX( 0% )'
		} else {
			if ( 'end' === alignment ) {
				return 'translateX( 100% )'
			} else {
				return 'translateX( -100% )'
			}
		}
	}

	const [ springProps, set ] = useSpring( () => {
		const values = {
			width,
			height,
			borderLeft: '1px solid var(--fl-line-color)',
			transform: transform(),
			right: 'end' === alignment ? 0 : windowWidth - width,
		}
		return values
	} )

	const springState = () => {
		return {
			width,
			height,
			right: 'end' === alignment ? 0 : windowWidth - width,
			transform: transform()
		}
	}

	set( springState() )

	const styles = {
		position: 'fixed',
		top: 0,
		zIndex: 999999,
		boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
		...springProps
	}

	return (
		<animated.div style={styles}>{children}</animated.div>
	)
}
