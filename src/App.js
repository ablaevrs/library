import React from 'react'
import './App.css';
import { faq } from './faq.js'
import Faq from './components/Faq';

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
