import React from 'react';
import { Typography } from 'antd';
import { useGlobalContext } from '../contexts/GlobalProvider';
import CartItem from '../components/Cart/CartItem';

const { Title } = Typography;

function Cart() {
  const [state] = useGlobalContext();
  const { cart } = state;

  return (
    <>
      <Title level={2}> 상품 목록 </Title>
      { cart.length > 0 ? cart.map((item) => <CartItem item={item} />)
        : <Typography> 장바구니에 담긴 상품이 없습니다 </Typography>}
    </>
  );
}

export default Cart;
