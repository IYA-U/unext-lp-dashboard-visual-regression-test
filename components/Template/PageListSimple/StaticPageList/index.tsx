import React, { useReducer } from 'react';
import styled from 'styled-components';
import Content from './Content';
import Header from './Header';
import reducer from './reducer';
import { Filter } from 'types';

export const TableStateContext = React.createContext({} as TableStateContext);

interface TableStateContext {
  state: Filter;
  dispatch: (a: any) => void;
}

const StaticPageList: React.FC = () => {
  const [tableState, tableDispatch] = useReducer(reducer, {
    query: '',
    sort: { key: 'template', order: 'desc' },
  });
  return (
    <Wrap>
      <TableStateContext.Provider
        value={{ state: tableState, dispatch: tableDispatch }}
      >
        <Header />
        <ContentWrap>
          <Content />
        </ContentWrap>
      </TableStateContext.Provider>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background: white;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

const ContentWrap = styled.div`
  height: calc(100% - 40px);
  overflow-y: scroll;
`;

export default StaticPageList;
