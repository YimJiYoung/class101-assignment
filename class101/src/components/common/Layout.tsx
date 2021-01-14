import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  z-index: 100;  
  top: 0px;
  left: 0px;
  right: 0px;
  height: 69px;
  padding: 30px; 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #d1d5da;
`;

const Content = styled.main`
  padding: 89px 50px 0px 50px;
`;

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => (
  <>
    <Header>
      <h1> CLASS 101 </h1>
    </Header>
    <Content>
      {children}
    </Content>
  </>
);

export default Layout;
