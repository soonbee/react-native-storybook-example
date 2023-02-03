import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Hello() {
  return (
    <View>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
  },
});

export default Hello;
