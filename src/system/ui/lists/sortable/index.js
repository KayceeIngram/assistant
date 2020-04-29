import React, { useState, useRef, useEffect } from 'react'
import classname from 'classnames'
import { motion, useMotionValue, useDragControls } from 'framer-motion'
import arrayMove from 'array-move'
import findIndex from './find-index'

const Sortable = ( {
    tag: Tag = 'ul',
	items = [],
	setItems = () => {},
	children,
    keyProp = 'handle',
    itemProps = {},
    onSortStart = () => {},
    onSortEnd = () => {},
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

    // Need to provide a unique key for each item
    // Indexes do not work well here.
    const getItemKey = ( item, i ) => {
        return 'function' === typeof keyProp ? keyProp( item, i ) : item[ keyProp ]
    }

	return (
		<Tag { ...rest }>
			{ items.map( ( item, i ) => {

				return (
					<Item
						key={ getItemKey( item, i ) }
						i={ i }
						setPosition={ setPosition }
						moveItem={ moveItem }
                        onSortStart={onSortStart}
                        onSortEnd={onSortEnd}
                        {...itemProps}
					>
						{ children( item ) }
					</Item>
				)
			} )}
		</Tag>
	)
}

const Item = ( {
    i,
    setPosition,
    moveItem,
    className,
    children,
    onSortStart,
    onSortEnd,
    ...rest
} ) => {
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

	const classes = classname({
		'is-dragging': isDragging
	}, className )

	// Spring configs
	const onTop = {
		zIndex: 9,
		scale: 1.04,
        originX: 1,
	}
	const flat = {
		zIndex: 0,
		scale: 1,
        originX: 1,
	}

	const isDragElement = e => true

	return (
		<motion.li
			ref={ ref }
			className={classes}
            initial={false}
			animate={ isDragging ? onTop : flat }

			drag="y"
			dragControls={controls}
			dragOriginY={ dragOriginY }
			dragConstraints={ { top: 0, bottom: 0 } }
			dragElastic={ 1 }

			onDragStart={ ( e, info ) => {
				if ( ! isDragElement( e ) ) {

					controls.componentControls.forEach( entry => {
						entry.stop( e, info )
					})

					setDragging( false )
					return
				}
                onSortStart()
				setDragging( true )
			} }
			onDragEnd={ e => {
                setDragging( false )
                onSortEnd()
            } }
			onDrag={ ( e, { point } ) => moveItem( i, point.y ) }

			positionTransition={ ( { delta } ) => {
				if ( isDragging ) {
					dragOriginY.set( dragOriginY.get() + delta.y )
				}
				return ! isDragging
			} }

            onTapEnd={ e => console.log('tap end')}
            onClickCapture={ e => {
                console.log('capture click', isDragging )
                if ( isDragging ) {
                    e.stopPropagation()
                }
            } }

            {...rest}
		>
			{children}
		</motion.li>
	)
}

export default Sortable