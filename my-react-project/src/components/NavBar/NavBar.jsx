//external imports
import { useState } from 'react';

//internal imports
import '../../index.css';

function NavBar({name =  "Da'Von"}) {
  // HOOKS allows functional components to NOW be stateful vs stateless
  // If this functional component did not have any hooks it would be stateless
  
  
  // reason why we use state vs directly manipulating variables because of 
  // not needing to re-render the whole DOM if a variable changes & ease of use
  // and it won't try to constantly set the state back to the original state
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser ] = useState(name); 
    
    // internal CSS (creating a css style object)
    // if you have 3 or more CSS objects, do external css linking
    const linkStyle = {
        textDecoration: 'none',
        color: "red"
    }
    
    // this is bad practice to create variables inside your component and manage them directly
    // because in order to pick up the changes we would need to re-render the whole DOM vs state management
    // allows variables to update just their state without re-rendering the whole DOM
    // let myVar = 'Hello'
    
    // function changeVar(){
    //   alert('We are in the changeVar function')
    //   myVar = 'Goodbye'
    // }
    
    function handleClick(){
      alert('You clicked me inside the NavBar Component')
    }
    
    function handleLogIn(){
      setLoggedIn(!loggedIn) //because loggedIn is a boolean the ! will assign it the opposite value
    }
    
  return (
    // inline CSS
    // if you have 3 or more properties, don't do inline css
    <div id="navBar" style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>About</a>
        { loggedIn && <a href='#' style={linkStyle}>Profile</a>}
        <a href="#" style={linkStyle}>Contact</a>
        {/* if there only exists an if conditional you can use the && */}
        { loggedIn && <p>Logged In: {user} </p>}
        {/* we can only render strings & numbers in the DOM so ^ need to change booleans into a string */}
        <button onClick={handleLogIn}>
          {/* same as if (loggedIn === true) { return 'Sign Out'} else { return 'Sign In'} */}
          { loggedIn ? 'Sign Out' : 'Sign In' }
          </button>
    </div>
  )
}

export default NavBar;


// NavBar.defaultProps = {
//   name : "Da'Von"
// };


