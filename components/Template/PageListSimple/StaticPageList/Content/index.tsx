import React, { useContext } from 'react';
import styled from 'styled-components';
import computeRows from './computeRows';
import { TableStateContext } from '../';
import { DataContext } from 'pages';

const Table: React.FC = () => {
  const { pageListApi, domain } = useContext(DataContext);
  const pageList = pageListApi.map((page) => ({
    ...page,
    link: `https://${domain}/lp/${page.path}`,
  }));
  const { state } = useContext(TableStateContext);
  const filteredRows = computeRows(pageList, state);
  return (
    <Wrap>
      <tbody>
        {filteredRows.map((row) => (
          <Tr key={row.path}>
            <Td key="path">{row.path}</Td>
            <Td key="template">{row.template}</Td>
            <Td key="link">
              <TextLink href={row.link} target="_blank">
                リンク
              </TextLink>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Wrap>
  );
};

const Wrap = styled.table`
  width: 100%;
`;

const Tr = styled.tr``;

const Td = styled.td`
  padding: 6px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: 0.02em;
  vertical-align: inherit;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  width: 33.3%;
`;

const TextLink = styled.a`
  text-align: center;
  display: block;
  padding: 6px 8px;
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export default Table;
