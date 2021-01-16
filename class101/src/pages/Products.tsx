import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import ProductList from '../components/common/ProductList';
import { Product } from '../types';
import usePagination from '../hooks/usePagination';
import useFetch from '../hooks/useFetch';

const { Title } = Typography;

const PaginationWrapper = styled.div`
  margin: 30px;
  text-align: center;
`;

function Products() {
  const [products] = useFetch<Product>('data/productItems.json');

  const sortProductByScore = (_products: Product[]) => [..._products].sort((a, b) => b.score - a.score);
  const sortedProducts = useMemo(() => sortProductByScore(products), [products]);

  const [currentProducts, renderPagination] = usePagination<Product>(sortedProducts, 5);

  return (
    <>
      <Title level={2}> 상품 목록 </Title>
      <ProductList products={currentProducts} />
      <PaginationWrapper>
        {renderPagination()}
      </PaginationWrapper>
    </>
  );
}

export default Products;
