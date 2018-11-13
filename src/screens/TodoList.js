//import liraries
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import TodoHeader from '../components/TodoHeader'
import TodoItem from '../components/TodoItem'
import TodoListFooterWithStore from '../container/TodoListFooterWithStore'

// create a component
class TodoList extends Component {
  onPressItem = (index) => {
    this.props.toggleTodo(index)
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={TodoHeader}
        ListFooterComponent={TodoListFooterWithStore}
        data={this.props.todos}
        keyExtractor={({ id }) => `${id}`}
        renderItem={(item) => {
          return <TodoItem {...item} index={item.index} pressHandler={this.onPressItem}
        />}}
      />
    );
  }
}

//make this component available to the app
export default TodoList;
