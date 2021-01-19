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

  const isCheckedItem = (id: string) => {
    const index = checkedItems.findIndex((_item) => _item.id === id);
    return index !== -1;
  };

  const handleCheck = (item: ICartItem) => {
    if (!isCheckedItem(item.id)) setCheckedItems([...checkedItems, item]);
    else setCheckedItems(checkedItems.filter((_item) => _item.id !== item.id));
  };

  const handleAmountChange = (id: string, amount: number) => {
    if (!isCheckedItem(id)) return;

    setCheckedItems(checkedItems.map((_item) => {
      if (_item.id !== id) return _item;
      return { ..._item, amount };
    }));
  };

  return (
    <>
      <Title level={2}> 상품 목록 </Title>
      { cart.length > 0 ? cart.map((item) => <CartItem item={item} onCheck={handleCheck} onAmountChange={handleAmountChange} />)
        : <Typography> 장바구니에 담긴 상품이 없습니다 </Typography>}
      <Payment items={checkedItems} />
    </>
  );
}

export default Cart;
