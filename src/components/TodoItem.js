import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, index, pressHandler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => pressHandler(index)}>
      <Text style={ item.completed ? styles.taskCompleted : {}}>{ item.task }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 30,
    marginBottom: 2,
    display: 'flex',
  },
  taskCompleted: {
    opacity: 0.5,
    textDecorationLine: 'line-through'
  },
});

//make this component available to the app
export default TodoItem;
