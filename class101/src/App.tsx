import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Layout from './components/common/Layout';
import Routes from './Routes';
import useFetch from './hooks/useFetch';
import productContext from './contexts/productContext';
import Product from './types/product';

function App() {
  const [products] = useFetch<Product>('data/productItems.json');

  return (
    <Router>
      <Layout>
        <productContext.Provider value={products}>
          <Routes />
        </productContext.Provider>
      </Layout>
    </Router>
  );
}

export default App;
