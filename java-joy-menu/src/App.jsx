import Coffees from "./components/Coffees";
import Pastries from "./components/Pastries";
import Teas from "./components/Teas";
import './MenuStyles.css';

function App() {

  return (
    // the id="menu" ties to the #menu in our MenuStyles.css
   <div id="menu">
    <h1>Our Menu</h1>
    <h3>Coffees</h3>
    <Coffees />
    <h3>Teas</h3>
    <Teas />
    <h3>Pastries</h3>
    <Pastries />
   </div>
  )
}

export default App;
