import React from 'react';
import './App.css';
import NewProductCom from './components/NewProductCom';
import ProductCom from './components/ProductCom';

function App() {
  return (
    <div className="App">
      <ProductCom/>
      <NewProductCom/>
    </div>
  );
}

export default App;
