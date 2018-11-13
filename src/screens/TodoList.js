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

  onPressItem = () => {

  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={TodoHeader}
        data={this.state.todos}
        keyExtractor={({ id }) => `${id}`}
        renderItem={(item, index) => {
          return <TodoItem {...item}
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
