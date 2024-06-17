import Greeting from "./components/Greeting/Greeting";
import NavBar from "./components/NavBar/NavBar";


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
  // we can add javascript code
  // components ALWAYS return an html tree to add to the DOM
  
  // adding JS into our HTML
  // creating a whole variable with HTML code
  const element = <h1>Hello SE147 Crew!</h1>;
  const image = <img src="https://img-s3.onedio.com/id-6344fb21b1dff0af263f7355/rev-0/raw/s-048b6f17a642881b362bfd3ffe5ab03369255885.jpg"></img>
  const name = "Andy";
  
  return (
    <div>
      <NavBar />
      <h1>Hello World!</h1>
      <Greeting />
      {/* will add the whole element HTML variable into our code */}
      {element} 
      {image}
      <h3>Hello, {name}!</h3>
    </div>
  )
}

// if you only have 1 component per file you can simply export default
export default App;
