import React, { useContext } from 'react';
import ProductList from '../components/common/ProductList';
import productContext from '../contexts/productContext';

function Products() {
  const products = useContext(productContext);

  return (
    <ProductList products={products.slice(0, 5)} />
  );
}

export default Products;
