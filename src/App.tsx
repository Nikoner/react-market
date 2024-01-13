import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import PromoCarousel from './components/PromoCarousel';

function App() {
  return (
    <>
      <Header />
      <PromoCarousel />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
