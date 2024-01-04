import './App.css';
import Gallery from './components/Gallery';

function App() {
  const images = [
    'https://img.freepik.com/free-photo/mountains-lake_1398-1150.jpg',
    'https://img.freepik.com/free-photo/mesmerizing-scenery-of-green-mountains-with-cloudy-sky-surface_181624-27189.jpg',
    'https://img.freepik.com/free-photo/beautiful-tree-in-the-middle-of-a-field-covered-with-grass-with-the-tree-line-in-the-background_181624-29267.jpg',
    'https://img.freepik.com/free-photo/beautiful-shot-of-a-crystal-clear-lake-next-to-a-snowy-mountain-base-during-a-sunny-day_181624-5459.jpg',
    'https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg'
  ]

  return (
    <div className="App">
        <Gallery 
          images={images}
        />
    </div>
  );
}

export default App;
