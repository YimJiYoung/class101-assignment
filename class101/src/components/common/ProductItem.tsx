import React from 'react';
// import styled from 'styled-components';
import { Card, Image } from 'antd';

const { Meta } = Card;

interface IProps {
    id: string;
    title: string;
    coverImage: string;
    price: number;
}

const ProductItem = ({
  id, title, coverImage, price,
}: IProps) => (
  <Card
    cover={<Image alt={title} src={coverImage} preview={false} />}
  >
    <Meta
      title={title}
      description={`가격: ${price}`}
    />
  </Card>
);

export default ProductItem;
