import React from 'react';
import {Image, View} from 'react-native';

import {styles} from './styles';

type Props = {
  icon: {
    path: string;
    extension: string;
  };
};
export function Icon({icon}: Props) {
  return (
    <View style={styles.container}>
      {icon ? (
        <Image
          source={{uri: `${icon.path}.${icon.extension}`}}
          style={styles.image}
          resizeMode="cover"
        />
      ) : null}
    </View>
  );
}
