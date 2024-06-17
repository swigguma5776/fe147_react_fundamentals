import style from './Greeting.module.css';
// ^ style is just a variable that takes EVERYTHING in my module.css file


// skeleton for a react functional component
function Greeting() {
    
    function handleClick(){
        alert('You clicked me in a functional component!')
    }
    
  return (
    <div>
        <p className={style.greeting}onClick={handleClick}>Welcome to this Greeting Component!</p>
    </div>
  )
}

export default Greeting;
