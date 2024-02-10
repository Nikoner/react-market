import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BasketPage from "./pages/BasketPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
