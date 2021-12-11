import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';

const App = () => (
  <div>
    <Header />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;