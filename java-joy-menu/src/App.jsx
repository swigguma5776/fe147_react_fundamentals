//external imports
import { useState } from 'react';

//internal imports
import Coffees from "./components/Coffees";
import Pastries from "./components/Pastries";
import Teas from "./components/Teas";
import './MenuStyles.css';

function App() {
  const [showCoffees, setShowCoffees] = useState(false)

  // pretend we made an API call to a server & got all the data 
  // for our coffees, pastries, & teas available in our warehouse. 
  
  function handleShowCoffees(){
    setShowCoffees(!showCoffees);
  }
  
  
  return (
    // the id="menu" ties to the #menu in our MenuStyles.css
   <div id="menu">
    <h1>Our Menu</h1>
    <h3>Coffees</h3>
    <button onClick={handleShowCoffees}>
      { showCoffees ? 'Hide Coffees' : 'Show Coffees'}
      </button>
    { showCoffees && <Coffees coffees={['Latte', 'Cappuccino', 'Espresso','Americano']}/>}
    <h3>Teas</h3>
    <Teas teas={['Green', 'Black', 'Jasmine','Chamomile']}/>
    <h3>Pastries</h3>
    <Pastries pastries={['Croissant', 'Muffin', 'Danish']}/>
   </div>
  )
}

export default App;
