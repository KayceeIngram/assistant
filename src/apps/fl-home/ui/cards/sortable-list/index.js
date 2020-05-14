import React, { useState, useRef, useEffect } from 'react'
import classname from 'classnames'
import { motion, useMotionValue, useDragControls } from 'framer-motion'
import arrayMove from 'array-move'
import findIndex from './find-index'

const SortableList = ( {
	items = [],
	setItems = () => {},
	children,
	...rest
} ) => {

	const positions = useRef( [] ).current
	const setPosition = ( i, offset ) => ( positions[i] = offset )

	const moveItem = ( i, dragOffset ) => {
		const targetIndex = findIndex( i, dragOffset, positions )
		if ( targetIndex !== i ) {
			setItems( arrayMove( items, i, targetIndex ) )
		}
	}

	return (
		<ul { ...rest }>
			{ items.map( ( item, i ) => {
				return (
					<Item
						key={ item.id }
						i={ i }
						setPosition={ setPosition }
						moveItem={ moveItem }
					>
						{ children( item ) }
					</Item>
				)
			} )}
		</ul>
	)
}

const Item = ( { i, setPosition, moveItem, className, children } ) => {
	const [ isDragging, setDragging ] = useState( false )
	const ref = useRef( null )
	const dragOriginY = useMotionValue( 0 )
	const controls = useDragControls()

	useEffect( () => {
		setPosition( i, {
			height: ref.current.offsetHeight,
			top: ref.current.offsetTop
		} )
	} )

	const classes = classname( {
		'is-dragging': isDragging
	}, className )

	// Spring configs
	const onTop = {
		zIndex: 9,
		scale: 1.04
	}
	const flat = {
		zIndex: 0,
		scale: 1,
	}

	const isDragElement = e => e.target.classList.contains( 'fl-asst-card-title' )

	return (
		<motion.li
			ref={ ref }
			className={ classes }

			animate={ isDragging ? onTop : flat }

			drag="y"
			dragControls={ controls }
			dragOriginY={ dragOriginY }
			dragConstraints={ { top: 0, bottom: 0 } }
			dragElastic={ 1 }

			onDragStart={ ( e, info ) => {
				if ( ! isDragElement( e ) ) {

					controls.componentControls.forEach( entry => {
						entry.stop( e, info )
					} )

					setDragging( false )
					return
				}
				setDragging( true )
			} }
			onDragEnd={ () => setDragging( false ) }
			onDrag={ ( e, { point } ) => moveItem( i, point.y ) }

			positionTransition={ ( { delta } ) => {
				if ( isDragging ) {
					dragOriginY.set( dragOriginY.get() + delta.y )
				}
				return ! isDragging
			} }
		>
			{children}
		</motion.li>
	)
}

SortableList.Item = Item

export default SortableList