import { Fragment, useState } from 'react';
import { service }  from '../service';
import Card from '../components/card';
import Pagination from '../components/pagination';

const Characters = ({ characters }) => {
  const [data, setData] = useState(characters);
  const [currentPage, setCurrentPage] = useState(1);
  const getData = async (pageNo = 1) => {
    const data = await service({
      url: 'https://rickandmortyapi.com/api/character',
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

export default Characters;