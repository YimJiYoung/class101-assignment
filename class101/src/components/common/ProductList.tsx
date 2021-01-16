import React from 'react';
import { Row, Col } from 'antd';
import ProductItem from './ProductItem';
import { Product } from '../../types';

interface IProps {
    products: Product[];
}

const ProductList = ({ products }: IProps) => (
  <Row justify="space-around">
    { products && products.map((product) => (
      <Col xs={24} md={4} key={product.id}>
        <ProductItem
          item={product}
        />
      </Col>
    ))}
  </Row>
);

export default ProductList;
