import React, { useState, useEffect, useRef } from 'react'
import classname from 'classnames'
import { List } from '../'

const hasReachedBounds = e => {
	const el = e.target
	return el.scrollTop + el.clientHeight === el.scrollHeight
}

export const useScrollLoader = ( {
	ref = window,
	hasMore = true,
	callback = () => {},
	shouldFetch = hasReachedBounds,
} ) => {
	const [ isFetching, setIsFetching ] = useState( true )

	const reset = () => {
		setIsFetching( true )
	}

	useEffect( () => {
		if ( 'undefined' === typeof ref.current ) {
			return
		}
		if ( hasMore && ! isFetching ) {
			const handleScroll = e => {
				if ( shouldFetch( e ) ) {
					setIsFetching( true )
				}
			}
			ref.current.addEventListener( 'scroll', handleScroll )
			return () => ref.current.removeEventListener( 'scroll', handleScroll )
		}
	}, [ isFetching, hasMore ] )

	useEffect( () => {
		if ( isFetching ) {
			callback( () => {
				setIsFetching( false )
			} )
		}
	}, [ isFetching ] )

	return {
		isFetching,
		reset,
	}
}

export const Scroller = ( {
	items = [],
	hasMoreItems = true,
	loadItems = () => {},
	before,
	after,
	isListSection = item => 'undefined' !== typeof item.items,
	getSectionItems = section => section.items,
	scrollerClassName,
	...rest
} ) => {
	const scrollRef = useRef()
	const { isFetching, reset } = List.useScrollLoader( {
		ref: scrollRef,
		hasMore: hasMoreItems,
		callback: loadItems,
	} )

	let itemsCount = 0
	items.map( item => {
		if ( isListSection( item ) ) {
			const sectionItems = getSectionItems( item )
			itemsCount += sectionItems.length
		} else {
			itemsCount++
		}
	} )

	useEffect( () => {
		if ( 0 === items.length ) {
			reset()
		}
	}, [ items ] )

	const classes = classname( 'fl-asst-list-scroller fl-asst-scroller', scrollerClassName )

	return (
		<div className={ classes } ref={ scrollRef }>
			{before}
			<List items={ items } { ...rest } />
			{ isFetching &&
				<List.Loading />
			}
			{ ! isFetching && ! hasMoreItems && ! itemsCount &&
				<List.NoResultsMessage />
			}
			{after}
		</div>
	)
}
