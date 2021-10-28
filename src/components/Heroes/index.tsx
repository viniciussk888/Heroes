import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {theme} from '../../global/styles/theme';

import {styles} from './styles';

import {Icon} from '../Icon';

import {HeroesType} from '../../pages/home/getHeroes';

type Props = {
  data: HeroesType;
};

export const Heroes = ({data}: Props) => {
  const {secondary50, secondary70} = theme.colors;
  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          style={styles.iconContainer}
          colors={[secondary50, secondary70]}>
          <Icon icon={data.thumbnail} />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.name}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
