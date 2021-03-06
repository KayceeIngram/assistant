import React, { useState } from 'react'
import classname from 'classnames'
import { __ } from '@wordpress/i18n'

export const useFileDrop = ( handleDrop = () => { } ) => {
	const [ isDragging, setIsDragging ] = useState( false )

	const onDragEnter = e => {
		e.preventDefault()
		e.stopPropagation()

		if ( e.dataTransfer.items ) {
			e.dataTransfer.effectAllowed = 'copy'
			setIsDragging( true )
		}
		return false
	}

	const onDragLeave = e => {
		e.preventDefault()
		e.stopPropagation()

		if ( e.target === e.currentTarget ) {
			setIsDragging( false )
		}
		return false
	}

	const onDragOver = e => {

		// Yea, it's necessary to prevent browser opening file
		e.preventDefault()
		e.stopPropagation()
	}

	const onDrop = e => {
		e.preventDefault()
		e.stopPropagation()

		if ( e.dataTransfer.files && 0 < e.dataTransfer.files.length ) {
			handleDrop( e.dataTransfer.files )
		}
		setIsDragging( false )
	}

	return {
		bind: {
			onDragEnter,
			onDragLeave,
			onDragOver,
			onDrop,
		},
		isDragging
	}
}

const DraggingView = ( {
	children = __( 'Drop files to begin uploading.' ),
	className,
	...rest
} ) => {
	return (
		<div className={ classname( 'fl-asst-file-drop-file-wrapper', className ) } { ...rest }>{ children }</div>
	)
}

export const FileDropListener = props => {
	const {
		children,
		className,
		onDrop = () => { },
		draggingView = <DraggingView />
	} = props

	const onFilesDropped = files => {
		onDrop( files )
	}
	const { bind, isDragging } = useFileDrop( onFilesDropped )

	const classes = classname( {
		'fl-asst-file-drop': true,
		'fl-asst-file-drop-is-dragging': isDragging,
	}, className )

	const merged = {
		...props,
		...bind,
		className: classes,
	}

	return (
		<div { ...merged }>
			<div className="fl-asst-file-drop-content-view">{children}</div>
			{ isDragging && <div className="fl-asst-file-drop-dragging-view">{draggingView}</div> }
		</div>
	)
}
