import '../../index.css';

function NavBar() {
    
    // internal CSS (creating a css style object)
    // if you have 3 or more CSS objects, do do internal
    const linkStyle = {
        textDecoration: 'none',
        color: "red"
    }
    
    function handleClick(){
      alert('You clicked me inside the NavBar Component')
    }
    
  return (
    // inline CSS
    // if you have 3 or more properties, don't do inline css
    <div id="navBar" style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Contact</a>
        <button onClick={handleClick}>Sign In</button>
    </div>
  )
}

export default NavBar
