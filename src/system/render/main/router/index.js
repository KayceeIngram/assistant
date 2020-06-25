import React, { useState, useRef } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { useSystemState } from 'data'

const AssistantRouter = ( { children } ) => {
    const { history } = useSystemState( false )
    const entries = history.entries && history.entries.length ? history.entries : null
	return (
		<MemoryRouter initialIndex={ history.index } initialEntries={ entries } >
			{ children }
		</MemoryRouter>
	)
}

export default AssistantRouter
