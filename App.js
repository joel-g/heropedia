import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Nav';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
        <Text>HEROPEDIA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33ccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
