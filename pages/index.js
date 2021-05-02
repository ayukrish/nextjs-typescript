import Characters from './characters';
import { service }  from '../service';


const HomePage = ({ characters }) => {
  return (
    <Characters characters={characters} />
  );
}


export const getStaticProps = async ()  => {
  const characters = await service({
    url: 'https://rickandmortyapi.com/api/character',
    method: 'get',
    page: 1,
  });

  return {
    props: {
      characters,
    },
  }
}


export default HomePage