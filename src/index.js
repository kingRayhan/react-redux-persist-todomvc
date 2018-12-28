import React from 'react'
import { render } from 'react-dom'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import TodoApp from './TodoApp'
import { Provider } from 'react-redux'
import store from './store/index'
render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.querySelector('#root')
)
