import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{ item.task }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 30,
    marginBottom: 2,
  },
});

//make this component available to the app
export default TodoItem;
