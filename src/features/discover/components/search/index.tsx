import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../../../app/store';
import {searchApi} from '../../discoverSlice';

const Search = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const dataSearch = useAppSelector(state => state.counterSlice.dataSearch);
  console.log('dataFake search', dataSearch);
  const dispatch = useAppDispatch();
  // console.log('date rdeux', dataSearch);

  return (
    <View style={styles.container}>
      <TextInput
        value={valueInput}
        onChangeText={(text: string) => setValueInput(text)}
        style={styles.input}
        placeholder={'Search'}
        placeholderTextColor={'white'}
      />

      <TouchableOpacity
        onPress={() => dispatch(searchApi(valueInput))}
        style={{width: 100, height: 30, backgroundColor: 'green'}}>
        <Text>Tim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  input: {
    width: '100%',
    height: 40,
    paddingLeft: 10,
    color: 'white',
  },
});
export default Search;
