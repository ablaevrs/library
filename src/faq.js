import React from 'react'
import './App.css';
import { faq } from './faq-data.js'
import Faq from './components/Faq/index.js';

function App() {
  return (
    <div className="App">
      <Faq 
        data={faq}
      />
    </div>
  );
}

export default App;
