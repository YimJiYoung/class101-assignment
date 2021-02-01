import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Card, Image } from 'antd';
import CartButton from './CartButton';
import { Product } from '../../types';

const { Meta } = Card;

interface IProps {
    item: Product;
    isInCart: boolean;
    onCartButtonClick: (item: Product) => void;
}

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const ProductItem = ({ item, isInCart, onCartButtonClick }: IProps) => {
  const { title, coverImage, price } = item;

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
          handleClick={() => { onCartButtonClick(item); }}
        />
      </ButtonWrapper>
    </Card>
  );
};

export default React.memo(ProductItem);
