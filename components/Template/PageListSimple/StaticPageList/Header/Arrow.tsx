import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { TableStateContext } from '../';
import { SortOrder, SortKey } from 'types';

interface Props {
  sortKey: SortKey;
  sortOrder: SortOrder;
}

const Arrow: React.FC<Props> = ({ sortKey, sortOrder }) => {
  const { state, dispatch } = useContext(TableStateContext);
  const iconTexts: {
    [key: string]: string;
  } = {
    asc: 'arrow_upward',
    desc: 'arrow_downward',
  };

  return (
    <Wrap
      onClick={() => {
        dispatch({ type: 'sort', payload: { key: sortKey, order: sortOrder } });
      }}
      isActive={state.sort.key === sortKey && state.sort.order === sortOrder}
    >
      {iconTexts[sortOrder]}
    </Wrap>
  );
};

const Wrap = styled.div<{ isActive: boolean }>`
  font-family: 'Material Icons';
  color: white;
  font-size: 15px;
  line-height: 1;
  direction: ltr;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
`;

export default Arrow;
