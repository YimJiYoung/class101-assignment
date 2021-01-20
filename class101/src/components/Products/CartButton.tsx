import React from 'react';
import { ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface IProps {
  isInCart: boolean;
  handleClick: () => void;
}

const CartButton = ({ isInCart, handleClick }: IProps) => (
  <Button
    icon={isInCart ? <CloseOutlined /> : <ShoppingCartOutlined />}
    onClick={handleClick}
  >
    {isInCart ? '빼기' : '담기'}
  </Button>
);

export default CartButton;
