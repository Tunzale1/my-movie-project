import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Header from './components/Header/Header';
import MovieList from './pages/list/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/movielist" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
