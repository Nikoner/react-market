import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Basket from './pages/BasketPage';
import Login from './components/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
