import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import HeadElement from './HeadElement';

export const ConfigContext = React.createContext();

const withConfig = (OriginalComponent) => {
  const EnchantedComponent = (props) => {
    return (
      <>
        <HeadElement />
        <ThemeProvider theme={theme}>
          <Wrap>
            <Nav />
            <Content>
              <OriginalComponent {...props} />
            </Content>
          </Wrap>
        </ThemeProvider>
      </>
    );
  };

  EnchantedComponent.displayName = 'EnchantedComponent';
  return EnchantedComponent;
};

const Wrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Content = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  width: calc(100% - 200px);
  color: rgba(0, 0, 0, 0.87);
  margin-left: 200px;
  height: calc(100vh - 40px);
`;

const Nav = styled.nav`
  width: 200px;
  height: 100vh;
  background: rgb(15, 25, 38);
  position: fixed;
`;

export default withConfig;
