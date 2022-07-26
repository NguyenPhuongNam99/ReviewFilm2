import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../assets/Fonts';
import Header from '../../components/header';
import {images} from '../../assets';

export default function Policy({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        iconLeft={images.ic_back}
        onLeftPress={() => navigation.goBack()}
        lStyle={{tintColor: 'white'}}
        title="Privacy Policy"
      />

      <ScrollView style={{marginHorizontal:16}}>
        <Text style={{color: '#FFF', marginVertical: 20}}>
          This Privacy Policy descibes Our policies and procedures on the
          colection , use and disclosure of your informaiton when You use the
          Service and tall You about Your privacy rights and how the law
          protects You. We use Your Personal Data to provide and improve the
          Service.By using the Service, You agree to the colection and you of
          informaiton in accordance with this Privacy Policy{' '}
        </Text>
        <Text style={{color: '#FFF', marginBottom: 10}}>
          Interpretation and Definitions {'\n'}
          ===================================
        </Text>
        <Text style={{color: '#FFF', marginBottom: 10}}>
          Interpretation{'\n'}------------------------{'\n'}The words of which
          the inital letter is capitalized have neanings defined under thr
          following conditions.The following definitions shaw have the same
          meaning regardless of whether they app prear in singular or in plural.{' '}
        </Text>
        <Text style={{color: '#FFF'}}>
          Definition{'\n'}----------------{'\n'}For the purposes of this Privacy
          Policy:{'\n'} * Account means a unique account created for You to
          access our Service or parts of our Service.{'\n'}* Affiliate means an
          entiny that controls, is controlsled by or is under common control
          with a partty,where"control"mean ownership of 50% or more od the
          shares,equity interrest or other securities entitled to votr for
          election of diretors or other managing authority.{'\n'}* Application
          means the sofwqre program provided by the Company downloaded by You on
          any electronic device.{'\n'}* Business,for the purpose of the CCPA
          (California Consumer Privacy Act), refers to the Company as the legal
          entity that collects Consumers' personal informations and determines
          the purpose and means of the processing of Consumers' personal
          informaiton,or on behalf of which such informaiton is collected and
          that alone, or jointly with others, determines the purposes annd means
          of the processing of Consumers' Personal informaiton,that does
          business in the State of California.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  btn: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
  },
  txt: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  txtChose: {
    margin: 10,
    ...Fonts.h1,
  },
  txtChoseUpgade: {
    margin: 10,
    color: 'yellow',
    ...Fonts.h14,
  },

  txtSetting: {
    alignItems: 'center',
    margin: 10,
  },
  text: {
    ...Fonts.h1,
  },
  privacy: {
    alignItems: 'center',
    ...Fonts.h8,
  },
  settingPrivacy: {
    alignItems: 'center',
    top: 34,
  },
  txtautoSetting123: {
    color: '#FFF',
  },
});
