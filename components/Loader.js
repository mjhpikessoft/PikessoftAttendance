import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100000,
  },
});
