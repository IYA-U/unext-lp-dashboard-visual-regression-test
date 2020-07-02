import React, { createContext } from 'react';
import { GetServerSideProps } from 'next';
import withLayout from 'hoc/withLayout';
import pageListRequester from 'apiRequester/pageList';
import PageListSimpleTemplate from 'components/Template/PageListSimple';
import { Domain, PageListApi } from 'types';

export interface Props {
  pageListApi: PageListApi;
  domain: Domain;
}

export const DataContext = createContext({} as Props);

const IndexPage: React.FC<Props> = ({ pageListApi, domain }) => (
  <DataContext.Provider value={{ pageListApi, domain }}>
    <PageListSimpleTemplate />
  </DataContext.Provider>
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const domain = query.domain ? query.domain : 'www.video.unext.jp';
  const pageListApi: PageListApi[] = await pageListRequester({
    domain,
  });
  return {
    props: {
      pageListApi,
      domain,
    },
  };
};

export default withLayout(IndexPage);
