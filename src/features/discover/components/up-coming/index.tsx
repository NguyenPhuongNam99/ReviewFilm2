import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../../../app/store';

const Upcoming = () => {
  const dataUpComing = useAppSelector(state => state.counterSlice.dataUpComing);
  console.log('dataUpComing new', dataUpComing);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          {dataUpComing.map(item => {
            return (
              <View style={styles.blockContent}>
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
              </View>
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

export default Upcoming;
