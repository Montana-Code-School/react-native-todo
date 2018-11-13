import { TOGGLE_TODO } from "./actions";

const initialState = {
  todos: [
    {
      id: 1,
      task: 'Learn React Native',
      completed: false,
    }, {
      id: 2,
      task: 'Learn other stuff',
      completed: false,
    }, {
      id: 3,
      task: 'Add reselector',
      completed: false,
    }
  ]
}

export function todosReducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_TODO: {
      const { index } = action
      const todos = [...state.todos]
      const todo = { ...todos[index] }
      todo.completed = !todo.completed
      todos[index] = todo
      return {
        ...state,
        todos,
      }
    }
    default:
      return state
  }
}
