import React from 'react';
import { Typography } from 'antd';
import { useGlobalContext } from '../contexts/GlobalProvider';
import ProductList from '../components/Products/ProductList';

const { Title } = Typography;

function Cart() {
  const [state] = useGlobalContext();

  return (
    <>
      <Title level={2}> 장바구니 </Title>
      <ProductList products={state.cart} />
    </>
  );
}

export default Cart;
