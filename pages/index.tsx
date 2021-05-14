import React from 'react';
import Characters from './characters';
import { service } from '../service';

interface ICharactersProps {
  characters: any;
}

const HomePage: React.FunctionComponent<ICharactersProps> = ({
  characters,
}: ICharactersProps) => <Characters characters={characters} />;

export const getStaticProps = async () => {
  const data = await service({
    url: 'https://rickandmortyapi.com/api/character',
    method: 'get',
    page: 1,
  });

  return {
    props: {
      characters: data?.results || [],
    },
  };
};

export default HomePage;
