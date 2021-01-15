import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Image } from 'antd';
import CartButton from './CartButton';

const { Meta } = Card;

interface IProps {
    id: string;
    title: string;
    coverImage: string;
    price: number;
}

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const ProductItem = ({
  id, title, coverImage, price,
}: IProps) => {
  const [isInCart, setIsInCart] = useState(false);

  return (
    <Card
      cover={<Image alt={title} src={coverImage} preview={false} style={{ minHeight: 145 }} />}
    >
      <Meta
        title={title}
        description={`가격: ${price}`}
      />
      <ButtonWrapper>
        {/* TODO : 장바구나 담기/빼기 로직 구현 */}
        <CartButton isInCart={isInCart} handleClick={() => setIsInCart(!isInCart)} />
      </ButtonWrapper>
    </Card>
  );
};

export default ProductItem;
