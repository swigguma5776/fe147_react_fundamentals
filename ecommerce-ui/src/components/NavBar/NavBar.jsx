//external imports
import { Link } from "react-router-dom"; //Link is essentially <a> tag but associated with the Routes we just created

//internal import
import style from './NavBar.module.css'; 

function NavBar() {
  return (
    <nav className={style.navbar}>
      <div>
        <Link to='/' className={style["nav-links"]}>
            SE147 Ecommerce App
        </Link>
      </div>
      <ul className={style["navbar-nav"]}>
        <Link to='/' className={style["nav-links"]}>
            Home
        </Link>
        <Link to='/add-customer' className={style["nav-links"]}>
            Add Customer
        </Link>
        <Link to='/customers' className={style["nav-links"]}>
            View Customers
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
