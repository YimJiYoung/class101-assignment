import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Card, Image } from 'antd';
import CartButton from '../common/CartButton';
import { useGlobalContext } from '../../contexts/GlobalProvider';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/actions';
import { Product } from '../../types';

const { Meta } = Card;

interface IProps {
    item: Product;
}

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const ProductItem = ({ item }: IProps) => {
  const { title, coverImage, price } = item;
  const [state, dispatch] = useGlobalContext();
  const inCartIdList = state.cart.map((product) => product.id);
  const [isInCart, SetIsInCart] = useState(inCartIdList.includes(item.id));

  const handleCartButtonClick = () => {
    if (!isInCart) dispatch({ type: ADD_TO_CART, payload: item });
    else dispatch({ type: REMOVE_FROM_CART, payload: item.id });
    SetIsInCart(!isInCart);
  };

  return (
    <Card
      cover={<Image alt={title} src={coverImage} preview={false} style={{ minHeight: 160 }} />}
    >
      <Meta
        title={title}
        description={`가격: ${price}`}
      />
      <ButtonWrapper>
        <CartButton
          isInCart={isInCart}
          handleClick={handleCartButtonClick}
        />
      </ButtonWrapper>
    </Card>
  );
};

export default ProductItem;
