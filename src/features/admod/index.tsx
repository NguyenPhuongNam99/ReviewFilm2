import React from 'react';
import {
  InterstitialAd,
  TestIds,
  BannerAd,
  RewardedAd,
  AppOpenAd,
} from 'react-native-google-mobile-ads';

// # App Open
// AppOpenAd.createForAdRequest(TestIds.APP_OPEN);

// # Interstitial
// InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

// # Rewarded
// RewardedAd.createForAdRequest(TestIds.REWARDED);

function Admod() {
  // No advert ready to show yet
  AppOpenAd.createForAdRequest(TestIds.APP_OPEN);

  InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

  RewardedAd.createForAdRequest(TestIds.REWARDED);

  return <BannerAd unitId={TestIds.BANNER} size={'ANCHORED_ADAPTIVE_BANNER'} />;
}
export default Admod;
