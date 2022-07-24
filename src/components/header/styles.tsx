import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: 45,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    opacity: 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  widthItem: {
    width: '33%',
  },
  firtShow: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorWhite: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  icLeft: {
    width: 20,
    height: 20,
  },
  right: {
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  left: {
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
});
