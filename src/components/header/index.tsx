import React, {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

const Header = ({
<<<<<<< Updated upstream
  title = 'Movies Box',
  iconLeft,
=======
  title = 'Nhạc trẻ việt nam',
>>>>>>> Stashed changes
  iconRight,
  onRightPress,
  lStyle,
  rStyle,
}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <View>
          <Text numberOfLines={1} style={styles.colorWhite}>
            {title}
          </Text>
        </View>
        <View style={{margin: 20}}>
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
      </View>
    </>
  );
};

export default Header;
