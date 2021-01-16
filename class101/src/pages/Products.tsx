import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import ProductList from '../components/common/ProductList';
import productContext from '../contexts/productContext';
import IProduct from '../types/product';
import usePagination from '../hooks/usePagination';

const { Title } = Typography;

const PaginationWrapper = styled.div`
  margin: 30px;
  text-align: center;
`;

function Products() {
  const products = useContext(productContext);

  const sortProductByScore = (_products: IProduct[]) => [..._products].sort((a, b) => b.score - a.score);
  const sortedProducts = useMemo(() => sortProductByScore(products), [products]);

  const [currentProducts, renderPagination] = usePagination<IProduct>(sortedProducts, 5);

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
