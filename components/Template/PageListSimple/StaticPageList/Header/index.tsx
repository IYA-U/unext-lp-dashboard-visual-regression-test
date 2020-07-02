import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';
import SearchInputArea from './SearchInputArea';

const StaticPageListHeader: React.FC = () => (
  <Wrap>
    <Lower>
      <Column>
        文字変えました🐶 🐱 🐭 🐹🐰 🦊
        <Arrow sortKey="path" sortOrder="asc" />
        <Arrow sortKey="path" sortOrder="desc" />
      </Column>
      <Column>
        テンプレート
        <Arrow sortKey="template" sortOrder="asc" />
        <Arrow sortKey="template" sortOrder="desc" />
      </Column>
      <Column>
        <SearchInputArea />
      </Column>
    </Lower>
  </Wrap>
);

const Wrap = styled.div`
  position: sticky;
  background: purple;
  color: white;
  top: 0;
  padding: 10px;
  z-index: 1;
  border: 1px solid orange;
`;

const Lower = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 33%;
  line-height: 1;
  display: flex;
  align-items: center;
`;

export default StaticPageListHeader;
