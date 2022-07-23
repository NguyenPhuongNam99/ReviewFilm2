import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useAppSelector} from '../../../../app/store';

const NowPlaying = (props: any) => {
  const data = useAppSelector(state => state.counterSlice.data);
  console.log('===========data=========', data);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.blockContent}
                onPress={() =>
                  props.navigation.navigate('MovieDetail', {item})
                }>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  blockContent: {
    width: '31.3%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 16,
  },
  content: {
    width: '100%',
    height: '80%',
    backgroundColor: 'yellow',
  },
  fullWidth: {width: '100%', height: '100%'},
  textAlign: {textAlign: 'center', paddingVertical: 3},
});

export default NowPlaying;
