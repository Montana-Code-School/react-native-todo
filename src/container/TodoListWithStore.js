import { connect } from 'react-redux'

import { toggleTodo } from '../store/todos/actions'
import TodoList from '../screens/TodoList'

function mapStateToProps(state) {
  return {
    todos: state.todosStore.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: (index) => dispatch(toggleTodo(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
