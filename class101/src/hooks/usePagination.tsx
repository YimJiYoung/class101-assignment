import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';

function usePagination<T>(items: T[], pageSize: number) {
  const [currentItems, setCurrentItems] = useState<T[]>([]);

  useEffect(() => { // items 달라졌을떄 currentItems 새로 설정
    setCurrentItems(items.slice(0, pageSize));
  }, [items]);

  const handlePageChage = (page: number) => {
    const indexOfLastItem = page * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
  };

  const renderPagination = () => <Pagination total={items.length} pageSize={pageSize} onChange={handlePageChage} />;

  return [currentItems, renderPagination] as const;
}

export default usePagination;
