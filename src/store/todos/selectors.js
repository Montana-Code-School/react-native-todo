import { createSelector } from 'reselect'

todoSelector = state => state.todosStore.todos

export const totalCompleted = createSelector(
  todoSelector,
  todos => todos.filter(({ completed }) => completed).length
)
