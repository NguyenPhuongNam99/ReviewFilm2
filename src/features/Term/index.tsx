import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../assets/Fonts';
import Header from '../../components/header';
import {images} from '../../assets';

export default function Term({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        iconLeft={images.ic_back}
        onLeftPress={() => navigation.goBack()}
        lStyle={{tintColor: 'white'}}
        title="Terms"
      />

      <ScrollView style={{marginHorizontal: 16}}>
        <Text style={{color: '#FFF', marginVertical: 20}}>
          {`Please read these terms and conditions carefully before using OurService. Interpretation and Definitions\n==============================\nInterpretation\n -------------- \nThe words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural. Definitions \n-----------  \nFor the purposes of these Terms and Conditions: \n* Application means the software program provided by the Company downloaded by You on any electronic device. \n* Application Store means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded. \n* Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority. \n* Country refers to: The Netherlands \n* Company  (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Rounding Squares BV. \n* Content refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content. \n* Device means any device that can access the Service such as a computer, a cellphone or a digital tablet. \n* Free Trial refers to a limited period of time that may be free when purchasing a Subscription. \n* In-app Purchase refers to the purchase of a product, item, service or Subscription made through the Application and subject to these Terms and Conditions and/or the Application Store's own terms and conditions. \n* Service refers to the Application. \n* Subscriptions refer to the services or access to the Service offered (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of  the Service. \n* Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service. \n* You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.  \nAcknowledgment\n============== \nThese are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, us`}
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
