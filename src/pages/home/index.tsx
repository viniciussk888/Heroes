import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {styles} from './styles';

import {Background} from '../../components/Background';
import {ListDivider} from '../../components/ListDivider';
import {Heroes} from '../../components/Heroes';
import {Load} from '../../components/Load';

import {HeroesType, getHeroes} from './getHeroes';

export const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<Array<HeroesType>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function searchHeroes() {
      setLoading(true);
      const response = await getHeroes();
      setHeroes(response);
      setLoading(false);
    }
    searchHeroes();
    setLoading(false);
  }, []);

  return (
    <Background>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={heroes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Heroes data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{paddingBottom: 69}}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Background>
  );
};
