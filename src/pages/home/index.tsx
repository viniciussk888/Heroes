import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {styles} from './styles';

import {Background} from '../../components/Background';
import {ListDivider} from '../../components/ListDivider';
import {Heroes} from '../../components/Heroes';

import {HeroesType, getHeroes} from './getHeroes';

export const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<Array<HeroesType>>([]);

  useEffect(() => {
    async function searchHeroes() {
      const response = await getHeroes();
      setHeroes(response);
    }
    searchHeroes();
  }, []);

  return (
    <Background>
      <FlatList
        data={heroes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Heroes data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{paddingBottom: 69}}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
};
