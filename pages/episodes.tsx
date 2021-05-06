import { Fragment, useState } from 'react';
import { service }  from '../service';
import Card from '../components/card';
import Pagination from '../components/pagination';

const Episodes = ({ episodes }) => {
  const [data, setData] = useState(episodes);
  const [currentPage, setCurrentPage] = useState(1);
  const getData = async (pageNo = 1) => {
    const data = await service({
      url: 'https://rickandmortyapi.com/api/episode',
      method: 'get',
      page: pageNo,
    });
    setData(data?.results || []);
  };


  return (
    <Fragment>
      {data?.length > 0 &&
        data.map((item) => (
          <Card
            key={item.id}
            dataObj={{
              EPISODE: item && item.episode,
              'AIR DATE': item && item.air_date
            }}
            heading={item && item.name}
          />
        ))}
        <Pagination
          contentLength={data?.length || 0}
          currentPage={currentPage}
          limit={20}
          onChange={(pageNo) => {
            getData(pageNo);
            setCurrentPage(pageNo);
          }}
        />
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