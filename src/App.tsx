import React from 'react';
import './App.css';

// Components
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
