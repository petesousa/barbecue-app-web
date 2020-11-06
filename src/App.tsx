import React from 'react';
import { HashRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes/index';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <HashRouter>
          <Routes />
        </HashRouter>
      </AppProvider>

      <GlobalStyles />
    </>
  );
};

export default App;
