import { useState } from 'react'; 
                    // default valaue if nothinng gets passed in
function Coffees({ coffees = ['N/A']}) {
  const [ ourCoffees, setCoffees] = useState(coffees);
  
  // console.log(ourCoffees)
  
  function handleRemove(index){
    // the ... is grabbing EVERYTHING that already exists in ourCoffees
    let currentCoffees = [...ourCoffees]
    console.log(currentCoffees, index)
    //since index is our unique identifier we can use .splice()
    // .splice() takes in 3 arguments, only 2 are required
    // first is the index to start
    // second is how many items are you replacing
    // third is what you are replacing with
    currentCoffees.splice(index, 1)
    console.log(currentCoffees)
    setCoffees(currentCoffees)
    
    // when using a value say coffee.id it is better to use the .filter() to filter out all
    // coffees whose id does not equal the id you are targeting
  }
  
  return (
    <div>
      { ourCoffees.map((coffee, index) => (
        <p key={index}>{coffee} <button onClick={()=> handleRemove(index)}>X</button></p>
      ))}
    </div>
  )
}

export default Coffees
