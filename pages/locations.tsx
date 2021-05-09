import React, { useState } from 'react';
import { service } from '../service';
import Card from '../components/card';
import Pagination from '../components/pagination';

interface ILocationProps {
  locations: any
}

const Locations:React.FunctionComponent<ILocationProps> = ({ locations }: ILocationProps) => {
  const [data, setData] = useState(locations);
  const [currentPage, setCurrentPage] = useState(1);
  const getData = async (pageNo = 1) => {
    const response = await service({
      url: 'https://rickandmortyapi.com/api/location',
      method: 'get',
      page: pageNo,
    });
    setData(response?.results || []);
  };

  return (
    <>
      {data?.length > 0
        && data.map((item) => (
          <Card
            key={item.id}
            dataObj={{
              TYPE: item && item.type,
              DIMENSION: item && item.dimension,
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
    </>
  );
};

export const getStaticProps = async () => {
  const data = await service({
    url: 'https://rickandmortyapi.com/api/location',
    method: 'get',
    page: 1,
  });

  return {
    props: {
      locations: data?.results || [],
    },
  };
};

export default Locations;
