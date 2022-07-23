import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {setVisiable} from './popupVideoSlice';
import {useAppDispatch, useAppSelector} from '../../app/store';

const PopupVideo = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dataClick = useAppSelector(state => state.popupVideoSlice.dataClick);
  console.log('dataclick new', dataClick);

  const dispatch = useAppDispatch();

  // variables
  const snapPoints = useMemo(() => ['91%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <TouchableNativeFeedback style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => dispatch(setVisiable(false))}
        onChange={handleSheetChanges}>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: 400,
              backgroundColor: 'green',
            }}></View>
        </ScrollView>
      </BottomSheet>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
});

export default PopupVideo;
