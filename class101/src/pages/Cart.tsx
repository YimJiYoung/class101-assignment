import React, { useState } from 'react';
import { Typography } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useGlobalContext } from '../contexts/GlobalProvider';
import CartItem from '../components/Cart/CartItem';
import Payment from '../components/Cart/Payment';
import { CartItem as ICartItem } from '../types';

const { Title } = Typography;

function Cart() {
  const [state] = useGlobalContext();
  const [checkedItems, setCheckedItems] = useState<ICartItem[]>([]);

  const { cart } = state;

  const createHandleCheck = (item: ICartItem) => (e: CheckboxChangeEvent) => {
    if (e.target.checked) setCheckedItems([...checkedItems, item]);
    else setCheckedItems(checkedItems.filter((_item) => _item.id !== item.id));
  };

  return (
    <>
      <Title level={2}> 상품 목록 </Title>
      { cart.length > 0 ? cart.map((item) => <CartItem item={item} createHandleCheck={createHandleCheck} />)
        : <Typography> 장바구니에 담긴 상품이 없습니다 </Typography>}
      <Payment items={checkedItems} />
    </>
  );
}

export default Cart;
