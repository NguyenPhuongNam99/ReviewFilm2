import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlayListOnline = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'blue'}}>Danh sách PlayList trống rỗng !</Text>
    </View>
  );
};

export default PlayListOnline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
