import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SearchPage from './pages/SearchPage';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
