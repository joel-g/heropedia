import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Nav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NAV BAR</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
})
