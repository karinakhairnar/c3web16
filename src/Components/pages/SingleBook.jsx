import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

// style for Flex
const Flex = styled.div``;

// add style for button
export const Button = styled.button`
  height: 35px;
  width: 15%;
  border: none;
  background: lightblue;
  border-radius: 10px;
  font-weight: bold;
`;

export const SingleBook = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    // make a GET request to http://localhost:8080/books/${id}`
    // use useParams to get the id

    const getSingleData = async () => {
      try {
        let res = await fetch(`http://localhost:8080/books/${id}`);
        let Data = await res.json();
        setData(Data);
      } catch (error) {}
    };
    getSingleData();
  }, []);

  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
      {!!data && (
        <>
          <Flex>
            <img
              data-testid='book-image-url'
              src={data.thumbnailUrl}
              alt={data.title}
            />

            <div>
              <h2 data-testid='book-title'>{data.title}</h2>
              <h3 data-testid='book-isbn'>{data.isbn}</h3>
              <p data-testid='book-longdesc'>{data.longDescription}</p>
            </div>
          </Flex>
          <Link to={`/books/${data.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </>
  );
};
