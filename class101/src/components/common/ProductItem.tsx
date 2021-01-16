import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Image } from 'antd';
import CartButton from './CartButton';
import { useGlobalContext } from '../../contexts/GlobalProvider';
import { ADD_TO_CART } from '../../constants/actions';
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
  const [isInCart, setIsInCart] = useState(false);
  const [_, dispatch] = useGlobalContext();

  return (
    <Card
      cover={<Image alt={title} src={coverImage} preview={false} style={{ minHeight: 160 }} />}
    >
      <Meta
        title={title}
        description={`가격: ${price}`}
      />
      <ButtonWrapper>
        {/* TODO : 장바구나 담기/빼기 로직 구현 */}
        <CartButton
          isInCart={isInCart}
          handleClick={() => {
            dispatch({ type: ADD_TO_CART, payload: item });
            setIsInCart(!isInCart);
          }}
        />
      </ButtonWrapper>
    </Card>
  );
};

export default ProductItem;
