import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import axios from 'axios';
import imagesIcon from '../../../../assets/images';

const Search = props => {
  const [valueInput, setValueInput] = useState<string>('');
  const [dataSearch, setDataSearch] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  const searchCallApi = async () => {
    try {
      setLoading(true);
      await axios({
        method: 'get',
        url:
          'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc/?title=' +
          valueInput,
      }).then(apiResponse => {
        const products = apiResponse;
        setDataSearch(products.data.results);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchLeft}>
          <TextInput
            value={valueInput}
            onChangeText={(text: string) => setValueInput(text)}
            style={[styles.input, Platform.OS === 'ios' && styles.inputIos]}
            placeholder={''}
            placeholderTextColor={'white'}
          />
        </View>

        <TouchableOpacity
          disabled={valueInput === '' ? true : false}
          style={[
            styles.clickContainer,
            Platform.OS === 'android' && styles.clickAndroid,
          ]}
          onPress={() => searchCallApi()}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.viewLoading}>
          <ActivityIndicator size={'large'} color={'yellow'} />
        </View>
      ) : (
        <FlatList
          data={dataSearch}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('MovieDetail', {item})}
                style={styles.contentContainer}>
                <View style={styles.leftContent}>
                  <Image
                    defaultSource={imagesIcon.LOGO_ICON}
                    source={{uri: item.image}}
                    resizeMode={'cover'}
                    style={styles.fullWidth}
                  />
                </View>
                <View style={styles.rightContent}>
                  <Text numberOfLines={1} style={styles.colorWhite}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.colorWhite}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  input: {
    // width: '100%',
    // height: 30,
    paddingLeft: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
  },
  inputIos: {
    width: '100%',
    height: 30,
  },
  searchContainer: {
    height: 40,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  searchLeft: {flex: 1, marginRight: 10},
  clickContainer: {
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingHorizontal: 20,
  },
  clickAndroid: {
    height: 37,
  },
  contentContainer: {
    height: 90,
    marginTop: 16,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  leftContent: {
    width: '20%',
    height: '100%',
  },
  rightContent: {
    width: '80%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  colorWhite: {
    color: 'white',
  },
  fullWidth: {width: '100%', height: '100%'},
  viewLoading: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Search;
