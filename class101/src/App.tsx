import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Layout from './components/common/Layout';
import Routes from './Routes';
import GlobalProvider from './contexts/GlobalProvider';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Layout>
          <Routes />
        </Layout>
      </GlobalProvider>
    </Router>
  );
}

export default App;
