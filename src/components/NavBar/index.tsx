import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <div>
      <nav className="right-icons">
        <ul>
          <li><Link to="/basket" className="icons-designations"><img src="Image/basket.png" alt="basket" className="basket" /></Link></li>
          <li><Link to="/favorites" className="icons-designations"><img src="Image/favorites.png" alt="favorites" /></Link></li>
          <li><Link to="/account" className="icons-designations"><img src="Image/Account.png" alt="account" /></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar