//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import TodoHeader from '../components/TodoHeader'
import TodoItem from '../components/TodoItem'

// create a component
class TodoList extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: 'Learn React Native',
        completed: false,
      }, {
        id: 2,
        task: 'Learn other stuff',
        completed: false,
      }
    ]
  }

  onPressItem = (index) => {
    const todos = [...this.state.todos]
    const todo = {...todos[index]}
    todo.completed = !todo.completed
    todos[index] = todo
    this.setState({ todos })
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={TodoHeader}
        data={this.state.todos}
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

//make this component available to the app
export default TodoList;
