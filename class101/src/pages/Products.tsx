import React, { useContext, useMemo } from 'react';
import ProductList from '../components/common/ProductList';
import productContext from '../contexts/productContext';
import IProduct from '../types/product';

function Products() {
  const products = useContext(productContext);

  const sortProductByScore = (_products: IProduct[]) => [..._products].sort((a, b) => b.score - a.score);
  const sortedProducts = useMemo(() => sortProductByScore(products), [products]);

  return (
    <ProductList products={sortedProducts.slice(0, 5)} />
  );
}

export default Products;
