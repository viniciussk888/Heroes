import {StyleSheet} from 'react-native';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  matches: {
    marginTop: getStatusBarHeight() + 26,
    marginLeft: 24,
  },
});
