//external imports
import { Link } from "react-router-dom"; //Link is essentially <a> tag but associated with the Routes we just created
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// saame as above but less efficient because its importing the whole entire bootstrap package
// import { Container, Nav, Navbar } from 'react-bootstrap; 


//internal import
import style from './NavBar.module.css'; 

function NavBar() {
  return (
    <Navbar expand="lg" className={`${style.navbar} bg-primary navbar-dark`}>
    <Container >
      <Navbar.Brand className="text-white"href="/">SE147 Ecommerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-white"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* Check why hover effects isn't being allowed by bootstrap */}
          <Nav.Link className={style["nav-links"]} href="/">Home</Nav.Link>
          <Nav.Link className={style["nav-links"]} href="/add-customer">Add Customers</Nav.Link>
          <Nav.Link className={style["nav-links"]} href="/customers">View Customers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
  
  // --------------------WITHOUT BOOTSTRAP------------------
  
  
  
  // return (
  //   <nav className={style.navbar}>
  //     <div>
  //       <Link to='/' className={style["nav-links"]}>
  //           SE147 Ecommerce App
  //       </Link>
  //     </div>
  //     <ul className={style["navbar-nav"]}>
  //       <Link to='/' className={style["nav-links"]}>
  //           Home
  //       </Link>
  //       <Link to='/add-customer' className={style["nav-links"]}>
  //           Add Customer
  //       </Link>
  //       <Link to='/customers' className={style["nav-links"]}>
  //           View Customers
  //       </Link>
  //     </ul>
  //   </nav>
  // )
}

export default NavBar
