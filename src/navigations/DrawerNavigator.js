import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';

import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import StackNavigator from './StackNavigator';
const {width, height} = Dimensions.get('screen');
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  console.log('======props======', props.navigation.navigate);

  return (
    <>
      <ScrollView
        style={{backgroundColor: 'black'}}
        {...props}
        showsVerticalScrollIndicator={false}>
        <DrawerItem
          label="Privacy Polycy"
          onPress={() => props.navigation.navigate('Policy')}
          labelStyle={styles.labelStyle}
          style={styles.styleItem}
        />

        <DrawerItem
          label="Terms"
          onPress={() => props.navigation.navigate('Term')}
          labelStyle={styles.labelStyle}
          style={styles.styleItem}
        />
      </ScrollView>
    </>
  );
}
const DrawerMenu = props => {
  const dimensions = useWindowDimensions();

  return (
    <>
      <SafeAreaView style={styles.SafeAreaViewBackground} />
      <Drawer.Navigator
        drawerPosition="left"
        drawerStyle={{}}
        drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          options={{headerShown: false}}
          name="Main"
          component={StackNavigator}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 15,
    color: 'yellow',
  },
  styleItem: {
    borderBottomWidth: 0.5,
    width: width,
    marginLeft: -5,
    paddingLeft: 15,
    height: 50,
    backgroundColor: 'black',
    // borderBottomWidth: 1,
    borderColor: 'gray',
  },
  headerContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
  },
  avatar: {
    width: 77,
    height: 77,
    borderRadius: 50,
  },
  borderAvatar: {
    width: 83,
    height: 83,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
  },
  email: {
    fontSize: 14,
  },
  headerStyle: {
    width: width / 1.25,

    paddingTop: 20,
    paddingBottom: 10,
    marginLeft: 0,
    marginTop: -53,
    justifyContent: 'center',
    borderRadius: 0,
  },
  SafeAreaViewBackground: {backgroundColor: 'black'}
});
