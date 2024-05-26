
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import FavMovies from './Pages/FavMovies/FavMovies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favmovies" element={<FavMovies />} />
      </Routes>
    </div>
  );
}

export default App;
