import { Fragment } from 'react';
import { service }  from '../service';
import Card from '../components/card';

const Locations = ({ locations }) => {
  return (
    <Fragment>
      {locations?.results?.length > 0 &&
        locations.results.map((item) => (
          <Card
            key={item.id}
            dataObj={{
              TYPE: item && item.type,
              DIMENSION: item && item.dimension
            }}
            heading={item && item.name}
          />
        ))}
    </Fragment>
  );
}

export const getStaticProps = async ()  => {
  const locations = await service({
    url: 'https://rickandmortyapi.com/api/location',
    method: 'get',
    page: 1,
  });

  return {
    props: {
      locations,
    },
  }
}


export default Locations;