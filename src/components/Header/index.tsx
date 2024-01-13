import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";
import NavBar from "../NavBar";
import './style.css';

const Header = () => {
  return (
  <header className="header">
      <div className="logo-left-icons">
        <Link to="/" className="logo">
          <img src="../image/logo.png" alt="logo" />
          <h2 className="logo-name">
            FOX Market
          </h2>
        </Link>
      </div>
    <SearchForm />
    <NavBar />
  </header>

  )
}

export default Header