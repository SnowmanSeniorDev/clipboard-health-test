import { useMemo } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import jobs from './jobs.reducer';

export function useStore(initialState) {
    const store = useMemo(() => {
        return createStore(
            combineReducers({ jobs }) ,
            initialState,
            composeWithDevTools(applyMiddleware(thunkMiddleware))
        )
    }, [initialState])
    return store
}
