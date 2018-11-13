import { createStore, combineReducers } from 'redux'

import { todosReducer } from './todos/reducer'
import { habitsReducer } from './habits/reducer'

const rootReducer = combineReducers({
  todosStore: todosReducer,
  habitsStore: habitsReducer,
})

export const store = createStore(rootReducer)
