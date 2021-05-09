import Characters from './characters';
import { service }  from '../service';


const HomePage = ({ characters }) => {
  return (
    <Characters characters={characters} />
  );
}


export const getServerSideProps = async ()  => {
  const data = await service({
    url: 'https://rickandmortyapi.com/api/character',
    method: 'get',
    page: 1,
  });

  return {
    props: {
      characters: data?.results || [],
    },
  }
}


export default HomePage