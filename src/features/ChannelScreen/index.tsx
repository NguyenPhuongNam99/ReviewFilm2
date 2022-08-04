import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/header';
import imagesIcon from '../../assets/images';
import {useNavigation} from '@react-navigation/core';
// import Admod from '../admod';

const ChannelScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: '1',
      image: imagesIcon.imageChannel,
      title: 'Movie Coverage',
      new: 'Breaking News',
      decription:
        'Movie Coverage is an American YouTuber who uploads various trailers of upcoming films. He joined YouTube on November 15, 2011, and is currently residing in the United States. Film publishers can even request for their trailer on this channel.',
    },
    {
      id: '2',
      image: imagesIcon.imageChannel1,
      title: 'Sony Movies',
      new: 'Breaking News',
      decription:
        'Sony Pictures Entertainment Motion Picture Group (commonly known as Sony Pictures Motion Picture Group, formerly known as the Columbia TriStar Motion Picture Group until 2013, and abbreviated as SPMPG) is a division of Sony Pictures Entertainment to manage its motion picture operations. It was launched in 1998 by integrating the businesses of Columbia Pictures Industries, Inc. and TriStar Pictures, Inc',
    },
    {
      id: '3',
      image: imagesIcon.imageChannel2,
      title: 'Fox Coverage',
      new: 'Breaking News',
      decription:
        'The Fox News Channel, abbreviated FNC, commonly known as Fox News, and stylized in all caps, is an American multinational conservative cable news television channel based in New York City.[3][4] It is owned by Fox News Media, which itself is owned by the Fox Corporation.[',
    },
    {
      id: '4',
      image: imagesIcon.imageChannel10,
      title: 'EPL Channel',
      new: 'Breaking News',
      decription:
        'The Premier League, is the top level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League. Seasons typically run from August to May with each team playing 38 matches',
    },
    {
      id: '5',
      image: imagesIcon.imageChannel4,
      title: 'Movie Afican',
      new: 'Breaking News',
      decription:
        'African Movie Channel operates the fastest growing channels in Africa, and is one of the most popular broadcasters on the continent; its channels are available in millions of homes on multiple TV platforms in several African countries.',
    },
    {
      id: '6',
      image: imagesIcon.imageChannel5,
      title: 'Film Corner',
      new: 'Breaking News',
      decription:
        'THE FILM CORNER. Online and offline activities for Film Literacy” project is aimed to the design, release and testing of an online digital virtual user- centered platform for Film Literacy, taking advantage of the opportunities offered by web 2.0 and crossmedia innovative approach in the digital era in order to raise the average film literacy level of EU young audiences',
    },
    {
      id: '7',
      image: imagesIcon.imageChannel6,
      title: 'Hindi Films',
      new: 'Breaking News',
      decription:
        'Hindi cinema, popularly known as Bollywood and formerly as Bombay cinema, is the Indian Hindi-language film industry based in Mumbai (formerly Bombay).',
    },
    {
      id: '8',
      image: imagesIcon.imageChannel7,
      title: 'ChauHan Digital',
      new: 'Breaking News',
      decription:
        'ChauHan Digital is A media enthusiast with interest and choice for digital space pursuit to learn more about the world of internet and its evolution.',
    },
    {
      id: '9',
      image: imagesIcon.imageChannel8,
      title: 'UK Film',
      new: 'Breaking News',
      decription:
        'The United Kingdom has had a significant film industry for over a century. While film production reached an all-time high in 1936,[6] the "golden age" of British cinema is usually thought to have occurred in the 1940s, during which the directors David Lean,[7] Michael Powell, (with Emeric Pressburger)[8] and Carol Reed[9] produced their most critically acclaimed works',
    },
    {
      id: '10',
      image: imagesIcon.imageChannel9,
      title: 'Cinema Movies',
      new: 'Breaking News',
      decription:
        'A movie theater (American English),[1] cinema (British English),[2] or cinema hall (Indian English),[3] also known as a picture house, the pictures, picture theater, the silver screen, the big screen or the movies, is a building that contains auditoria for viewing films (also called movies) for entertainment.',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Channel" />

      <ScrollView>
        <View style={styles.blockContent}>
          {data?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.contentContainer}
                onPress={() =>
                  navigation.navigate(
                    'ChannelDetail' as never,
                    {item: item} as never,
                  )
                }>
                <Image
                  source={item.image}
                  resizeMode={'cover'}
                  style={styles.imageContent}
                  defaultSource={imagesIcon.LOGO_ICON}
                />

                <Text
                  numberOfLines={1}
                  style={{textAlign: 'center', paddingVertical: 3}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      {/* <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <Admod />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    width: '31.3%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 16,
  },
  imageContent: {width: '100%', height: '80%', backgroundColor: 'yellow'},
  blockContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loading: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChannelScreen;
