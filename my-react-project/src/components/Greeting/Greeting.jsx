//externaal imports
import { useState } from 'react'; 
// the reason why useState ^ has {} is because we are imported a WHOLE object/package full of modules
// from react so we are using variable deconstructuring to grab the key of useState from that object and it's value associated with it.
// const [aang, katara] = ['aang', 'katara', 'toph', 'zuko']

//internal imports
import style from './Greeting.module.css';
// ^ style is just a variable that takes EVERYTHING in my module.css file


// skeleton for a react functional component
// props is variable name but convention for when we are passing variables/data from 1 component to the next
function Greeting({name = "Spencer", mood = "Tired"}) {
  // at the top of your functional component you set your hooks
  const [compName, setName] = useState(name) //what goes in parethesis () is initial state
  const [showMood, setShowMood] = useState(false)
  const [users, setUsers] = useState([
    {name: "Caleb", mood: "Shy"}, 
    { name: "Chris", mood: "Smiley"}, 
    {name: "Da'Von", mood: "Chill"}, 
    { name: "Winter", mood: "Inquisitive"}])
  
  
  
    function handleClick(){
        alert('You clicked me in a functional component!')
    }
    
    function changeShowMood(){
      setShowMood(!showMood);
    }
    
    function changeName(){
      // checking what the state is and updating it accordingly
      console.log(compName, name)
      if (compName === name) {
        setName('Farzin') //this is calling upon the function in our useState to change the value
      } else {
        setName(name)
      }
    }
    
  return (
    <div>
        <p className={style.greeting} onClick={handleClick}>Welcome {compName} to this Greeting Component! You are {mood} today!</p>
        <p>Our Faithful Users: </p>
        <ul>
          {users.map((user, index)=> (
            <div key={index}>
            <li>Name: {user.name}</li>
            { showMood && <li>Mood: {user.mood}</li>}
            </div>
          ))}
        </ul>
        <button onClick={changeShowMood}>
          {/* the ?: is ternary conditionaal which is what we NEED to use in html */}
          {/* if (showMood === true) { return 'Hide User Moods'} else { return 'Show User Moods'} */}
          { showMood ? 'Hide User Moods' : 'Show User Moods'}
          </button>
        <button onClick={changeName} >Change Name</button>
    </div>
  )
}


// OLD DEFAULTPROPS way
// safety measure to ensure that our props are set to at least something if we are expecting them 
// from the parent component but nothing gets passed down. 
// Greeting.defaultProps = {
//   name: 'Spencer',
//   mood: 'Tired'
// }

export default Greeting;


