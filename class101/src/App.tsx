import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import Layout from './components/common/Layout';
import Routes from './Routes';

function App() {
  return (
    <Layout>
      <Router>
        <Routes />
      </Router>
    </Layout>
  );
}

export default App;
