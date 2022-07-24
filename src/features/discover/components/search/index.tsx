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
} from 'react-native';
import axios from 'axios';
import imagesIcon from '../../../../assets/images';

const Search = () => {
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
            style={styles.input}
            placeholder={''}
            placeholderTextColor={'white'}
          />
        </View>
        <View style={styles.searchRight}>
          <TouchableOpacity
            disabled={valueInput === '' ? true : false}
            style={styles.clickContainer}
            onPress={() => searchCallApi()}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
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
              <View style={styles.contentContainer}>
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
              </View>
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
    width: '100%',
    height: 30,
    paddingLeft: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
  },
  searchContainer: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  searchLeft: {width: '80%', height: 30},
  searchRight: {
    width: '16%',
    height: 30,
  },
  clickContainer: {
    width: 60,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  contentContainer: {
    width: '100%',
    height: 90,
    marginTop: 16,
    flexDirection: 'row',
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
