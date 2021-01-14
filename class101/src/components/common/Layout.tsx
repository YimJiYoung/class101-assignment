import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Logo from './Logo';

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
  background-color: white;
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
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/cart">
        <ShoppingCartOutlined style={{ color: 'black', fontSize: 25 }} />
      </Link>
    </Header>
    <Content>
      {children}
    </Content>
  </>
);

export default Layout;
