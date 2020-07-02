import React from 'react';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

const HeadContent = () => (
  <>
    <Head>
      <title>LPダッシュボード</title>
      <meta name="robots" key="robots" content="noindex,nofollow" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        media="all"
      ></link>
    </Head>
    <GlobalStyles />
  </>
);

export default HeadContent;
