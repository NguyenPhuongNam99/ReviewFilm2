import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useAppSelector} from '../../app/store';
import Header from '../../components/header';

const MyLibrary = (props:any) => {
  const data = useAppSelector(state => state.MovieSlice.data);

 
  return (
    <View style={{flex: 1}}>
      <Header title="My Library" />
      <View style={styles.headerContent}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.blockContent}
              onPress={()=>props.navigation.navigate('MovieDetail',{item})}
            >
              <View style={styles.content}>
                <Image
                  style={styles.fullWidth}
                  resizeMode={'stretch'}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text numberOfLines={2} style={styles.textAlign}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MyLibrary;

const styles = StyleSheet.create({
  blockContent: {
    width: '31.3%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 16,
    marginLeft: 5,
  },
  content: {
    width: '100%',
    height: '80%',
    backgroundColor: 'yellow',
  },
  fullWidth: {width: '100%', height: '100%'},
  textAlign: {textAlign: 'center', paddingVertical: 3},
  headerContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
