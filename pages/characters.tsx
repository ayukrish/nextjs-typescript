import { Fragment } from 'react';
import { service }  from '../service';
import Card from '../components/card';

const Characters = ({ characters }) => {
  return (
    <Fragment>
      {characters?.length > 0 &&
        characters.map((item) => (
          <Card
            key={item.id}
            dataObj={{
              STATUS: item && item.status,
              SPECIES: item && item.species,
              GENDER: item && item.gender,
              ORIGIN: item && item.origin && item.origin.name,
              LOCATION: item && item.location && item.location.name
            }}
            imgSrc={item && item.image}
            heading={item && item.name}
          />
        ))}
    </Fragment>
  );
}



export const getStaticProps = async ()  => {
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

export default Characters;