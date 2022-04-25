import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Flex = styled.div`
  //  add required style
  
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  margin: 10px;
`;
export const BookCard = (props) => {
  const { id, title, isbn, thumbnailUrl } = props.item;

  return (
    <>
      <Link to={`/books/${id}`}>
        <Flex>
          <img src={thumbnailUrl} alt={title} height='200px' width={'200px'} />
          <h3>{title}</h3>
          <h4>{isbn}</h4>
        </Flex>
      </Link>
    </>
  );
};
