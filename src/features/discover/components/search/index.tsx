import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Search = () => {
  const refInput: any = useRef();
  useEffect(() => {
    refInput.current.focus();
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        ref={refInput}
        style={styles.input}
        placeholder={'Search'}
        placeholderTextColor={'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  input: {
    width: '100%',
    height: 40,
    paddingLeft: 10,
  },
});
export default Search;
