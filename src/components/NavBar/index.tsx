import { Link } from "react-router-dom"
import account from "../../assets/images/account.png"
import basket from "../../assets/images/basket1.png"
import favorites from "../../assets/images/favorites.png"
import './style.css'

const NavBar = () => {

  return (
    <nav className="navigation-icons">
      <ul className="icons-container">
        <li>
          <Link to="/basket" className="icons-designations">
            <div className="icons-box">
              <img src={basket} alt="basket" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="icons-designations">
            <div className="icons-box">
              <img src={favorites} alt="favorites" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login" className="icons-designations">
            <div className="icons-box">
              <img src={account} alt="account" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar