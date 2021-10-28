import {api} from '../../services/api';

export interface HeroesType {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface Heroes {
  results: HeroesType[];
}

export interface HeroesResponse {
  data: Heroes;
}

export const getHeroes = async () => {
  try {
    const {data} = await api.get<HeroesResponse>(
      `characters?ts=thesoer&nameStartsWith=a&apikey=b057feb45c36d43da0c317f10f5d3a82&hash=2f90a13b5dc655e7455ae4c1d5fec0e2`,
    );

    const {results} = data.data;

    return results;
  } catch (error) {
    return error;
  }
};
