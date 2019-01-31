import { createContext } from 'react'

export const UIContext = createContext()
UIContext.displayName = 'UIContext'

export const AppContext = createContext()
AppContext.displayName = 'AppContext'

export const StackContext = createContext('test')
StackContext.displayName = 'StackContext'

export const PageViewContext = createContext()
PageViewContext.displayName = 'PageViewContext'
