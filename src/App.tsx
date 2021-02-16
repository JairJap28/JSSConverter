import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import { Footer } from './components/footer/footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JSS Converter</h1>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
