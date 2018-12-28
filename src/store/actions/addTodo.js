import { v4 } from 'uuid'

import { ADD_TODO } from './types'

export default task => ({
    type: ADD_TODO,
    payload: { id: v4(), task, completed: false },
})
