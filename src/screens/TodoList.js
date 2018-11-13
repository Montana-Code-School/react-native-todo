//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux'

import { toggleTodo } from '../store/todos/actions'
import TodoHeader from '../components/TodoHeader'
import TodoItem from '../components/TodoItem'

// create a component
class TodoList extends Component {
  onPressItem = (index) => {
    this.props.toggleTodo(index)
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={TodoHeader}
        data={this.props.todos}
        keyExtractor={({ id }) => `${id}`}
        renderItem={(item) => {
          return <TodoItem {...item} index={item.index} pressHandler={this.onPressItem}
        />}}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

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

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
