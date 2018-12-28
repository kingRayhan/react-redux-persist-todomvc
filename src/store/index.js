import { createStore } from 'redux'

import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_DONE_TODO,
    COMPLETE_ALL_TODO,
    CLEAR_COMPLETE_TODO,
    EDIT_TODO,
} from './actions/types'

const todoReducer = (state = [], { type, payload }) => {
    if (type === ADD_TODO) {
        return [payload, ...state]
    }

    if (type === TOGGLE_DONE_TODO) {
        const todos = [...state]
        const index = todos.findIndex(todo => todo.id === payload)
        todos[index].completed = !todos[index].completed
        return todos
    }

    if (type === CLEAR_COMPLETE_TODO) {
        const todos = [...state]
        return todos.filter(todo => !todo.completed)
    }

    if (type === COMPLETE_ALL_TODO) {
        const todos = [...state]
        return todos.map(todo => ({ ...todo, completed: true }))
    }

    if (type === EDIT_TODO) {
        /**
         * {
         *      payload: { id , task }
         * }
         */

        const todos = [...state]
        const index = todos.findIndex(todo => todo.id === payload.id)
        todos[index].task = payload.task
        return todos
    }

    if (type === REMOVE_TODO) {
        return state.filter(todo => todo.id !== payload)
    }

    return state
}

const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
