import React from 'react';
import { Row, Col } from 'antd';
import ProductItem from './ProductItem';
import IProduct from '../../types/product';

interface IProps {
    products: IProduct[];
}

const ProductList = ({ products }: IProps) => (
  <Row justify="space-around">
    { products && products.map(({
      id, title, coverImage, price,
    }) => (
      <Col xs={24} md={4} key={id}>
        <ProductItem
          id={id}
          title={title}
          coverImage={coverImage}
          price={price}
        />
      </Col>
    ))}
  </Row>
);

export default ProductList;
