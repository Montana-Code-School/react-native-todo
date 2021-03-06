import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

import { store } from './src/store'
import TodoListWithStore from './src/container/TodoListWithStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoListWithStore />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
