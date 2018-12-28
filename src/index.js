import React from 'react'
import { render } from 'react-dom'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import TodoApp from './TodoApp'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './store/index'
render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <TodoApp />
        </PersistGate>
    </Provider>,
    document.querySelector('#root')
)
