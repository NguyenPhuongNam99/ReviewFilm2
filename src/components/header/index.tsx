import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const Header = ({
  title = 'Movies Box',
  iconLeft,
  iconRight,
  onLeftPress,
  onRightPress,
  lStyle,
  rStyle,
}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <View style={styles.left}>
          {iconLeft && (
            <TouchableOpacity
              onPress={onLeftPress}
              style={[styles.widthItem, styles.firtShow]}>
              <Image source={iconLeft} style={[styles.icLeft, lStyle]} />
            </TouchableOpacity>
          )}
        </View>

        <Text numberOfLines={1} style={styles.colorWhite}>
          {title}
        </Text>

        <View style={styles.right}>
          {iconRight && (
            <TouchableOpacity
              onPress={onRightPress}
              style={[styles.widthItem, styles.firtShow]}>
              <Image source={iconRight} style={[styles.icLeft, rStyle]} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Header;
