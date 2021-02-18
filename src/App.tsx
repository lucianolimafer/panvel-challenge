import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import GlobalStle from './styles/global';

const App: React.FC = () => (
  <>
    <Router>
      <Routes />
    </Router>
    <GlobalStle />
  </>
);

export default App;
