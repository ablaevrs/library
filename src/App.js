import { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import StarRating from './components/StarRating';

function App() {
  const [currentItem, setCurrentItem] = useState()

  return (
    <div className="App">
      <StarRating 
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </div>
  );
}

export default App;
