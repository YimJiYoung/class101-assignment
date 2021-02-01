import React, { useCallback } from 'react';
import { Row, Col } from 'antd';
import ProductItem from './ProductItem';
import { Product } from '../../types';
import { useGlobalContext } from '../../contexts/GlobalProvider';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/actions';

interface IProps {
    products: Product[];
}

const ProductList = ({ products }: IProps) => {
  const [state, dispatch] = useGlobalContext();

  const checkInCart = (id: string) => {
    const index = state.cart.findIndex((_item) => _item.id === id);
    return index !== -1;
  };

  const handleCartButtonClick = useCallback((item: Product) => {
    if (!checkInCart(item.id)) dispatch({ type: ADD_TO_CART, payload: item });
    else dispatch({ type: REMOVE_FROM_CART, payload: item.id });
  }, []);

  return (
    <Row justify="space-around">
      { products && products.map((product) => (
        <Col xs={24} md={4} key={product.id}>
          <ProductItem
            item={product}
            isInCart={checkInCart(product.id)}
            onCartButtonClick={handleCartButtonClick}
          />
        </Col>
      ))}
    </Row>
  );
};

export default React.memo(ProductList);
