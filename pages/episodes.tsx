import { Fragment } from 'react';
import { service }  from '../service';
import Card from '../components/card';

const Episodes = ({ episodes }) => {
  return (
    <Fragment>
      {episodes?.length > 0 &&
        episodes.map((item) => (
          <Card
            key={item.id}
            dataObj={{
              EPISODE: item && item.episode,
              'AIR DATE': item && item.air_date
            }}
            heading={item && item.name}
          />
        ))}
    </Fragment>
  );
}


export const getStaticProps = async ()  => {
  const data = await service({
    url: 'https://rickandmortyapi.com/api/episode',
    method: 'get',
    page: 1,
  });

  return {
    props: {
      episodes: data?.results || [],
    },
  }
}


export default Episodes;