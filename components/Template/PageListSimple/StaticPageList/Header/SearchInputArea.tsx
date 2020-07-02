import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { TableStateContext } from '../';

const SearchInputArea: React.FC = () => {
  const { dispatch } = useContext(TableStateContext);
  return (
    <Wrap>
      <SearchIcon>search</SearchIcon>
      <SearchInput
        onChange={(e) => {
          dispatch({ type: 'changeQuery', payload: e.target.value });
        }}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  &:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid white;
  }
`;

const SearchInput = styled.input`
  color: white;
  border: 0;
  display: block;
  background: none;
  padding: 4px;
  font-size: 14px;
  outline: 0;
  width: 100%;
`;

const SearchIcon = styled.span`
  font-family: 'Material Icons';
  color: white;
  font-size: 18px;
  line-height: 1;
  direction: ltr;
  transform: translateY(2px);
`;

export default SearchInputArea;
