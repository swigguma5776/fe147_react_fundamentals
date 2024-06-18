//external imports
import { useState } from 'react'; 

// internal imports
import Greeting from "./components/Greeting/Greeting";
import NavBar from "./components/NavBar/NavBar";
import Benders from './components/Benders/Benders';

/* IN THE WORLD OF REACT
  - We only re-render what the DOM NEEDS to re-render vs in vanilla JS
    we re-rendered the whole DOM which at times wasn't necessary and is going to make
    our apps slower than they need to
*/


// App.jsx acts as our base point for our JS code
// in that sense its similar to our script.js 
// this is built off of components and we will be importing other components into this file


// functional component makeup.
// .jsx extension
// meaning we can have html & javascript in the same file
// these are tied to components aka different functionality & features
// .jsx extension ALLOWS us to build components (html & js code)


// try to have 1 component per file
function App() {
  
  const [imageSrc, setImageSrc] = useState("https://img-s3.onedio.com/id-6344fb21b1dff0af263f7355/rev-0/raw/s-048b6f17a642881b362bfd3ffe5ab03369255885.jpg")
  // we can add javascript code
  // components ALWAYS return an html tree to add to the DOM
  
  function handleChangeImage(){
    setImageSrc("https://wegotthiscovered.com/wp-content/uploads/2022/10/house-of-the-dragon-season-two.png")
  }
  
  // adding JS into our HTML
  // creating a whole variable with HTML code
  const element = <h1>Hello SE147 Crew!</h1>;
  const image = <img onClick={handleChangeImage}src={imageSrc}></img>
  const name = "Andy";
  
  return (
    <div>
      <NavBar name={name} />
      <h1>Hello World!</h1>
      {/* when passing properties/variables to another Component its almost like an invisible object props = {name: 'Karen', mood: 'Happy'} */}
      <Greeting name={name} mood="Happy"/> 
      {/* will add the whole element HTML variable into our code */}
      <Benders />
      <br/>
      <br/>
      <br/>
      <hr/>
      <br/>
      {element} 
      {image}
      <h3>Hello, {name}!</h3>
    </div>
  )
}

// if you only have 1 component per file you can simply export default
export default App;
