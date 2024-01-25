import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";
import NavBar from "../NavBar";
import './style.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
  <header>
      <div className="logo-left-icons">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
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