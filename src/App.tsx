import React from 'react';
import Header from './components/header/Header';
import './App.scss';
import SideMenu from './components/side-menu/SideMenu';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SideMenu />
    </div>
  );
};

export default App;
