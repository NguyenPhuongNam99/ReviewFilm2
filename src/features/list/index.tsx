import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/AntDesign';
import {dataHeaderList} from '../../constants';
import axios from 'axios';
import {useNavigation} from '@react-navigation/core';

const List = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<Boolean>(false);
  const [data, setData] = useState({
    watchlist: '',
    top100: '',
    top250: '',
    top1000: '',
    razzieWining: '',
    razzieNominated: '',
    goldenGlobal: '',
    nationFlim: '',
  });
  const callApi = () => {
    let url1 = 'https://imdb-api.com/en/API/IMDbList/k_ftyzt2lc/ls004285275';
    let url2 =
      'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc?groups=top_100';
    let url3 =
      'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc?groups=top_250';
    let url4 =
      'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc?groups=top_1000';
    let url5 =
      'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc?groups=razzie_winners';
    let url6 =
      'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc?groups=razzie_nominees';
    let url7 =
      'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc?groups=golden_globe_winners';
    let url8 =
      'https://imdb-api.com/API/AdvancedSearch/k_ftyzt2lc?groups=national_film_registry';
    const promise1 = axios.get(url1);
    const promise2 = axios.get(url2);
    const promise3 = axios.get(url3);
    const promise4 = axios.get(url4);
    const promise5 = axios.get(url5);
    const promise6 = axios.get(url6);
    const promise7 = axios.get(url7);
    const promise8 = axios.get(url8);
    setLoading(true);
    Promise.all([
      promise1,
      promise2,
      promise3,
      promise4,
      promise5,
      promise6,
      promise7,
      promise8,
    ])
      .then(dataResponse => {
        setData({
          watchlist: dataResponse[0].data.items,
          top100: dataResponse[1].data.results,
          top250: dataResponse[2].data.results,
          top1000: dataResponse[3].data.results,
          razzieWining: dataResponse[4].data.results,
          razzieNominated: dataResponse[5].data.results,
          goldenGlobal: dataResponse[6].data.results,
          nationFlim: dataResponse[7].data.results,
        });
        setLoading(false);
        // data[1]; // second promise resolve data.results
        //data[2]data.results
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    callApi();
  }, []);

  const passDataofIndexItem = (index: number) => {
    switch (index) {
      case 0:
        return data.watchlist;
      case 1:
        return data.top100;
      case 2:
        return data.top250;
      case 3:
        return data.top1000;
      case 4:
        return data.razzieWining;
      case 5:
        return data.razzieNominated;
      case 6:
        return data.goldenGlobal;
      case 7:
        return data.nationFlim;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Lists" />

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={'yellow'} />
        </View>
      ) : (
        <FlatList
          data={dataHeaderList}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.blockContainer}
                onPress={() =>
                  navigation.navigate(
                    'ListDetail' as never,
                    {
                      title: item.title,
                      data: passDataofIndexItem(index),
                    } as never,
                  )
                }>
                <Text>{item.title}</Text>
                <Icon name="right" size={20} />
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
  blockContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 16,
  },
  loading: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default List;
