// external import
import { useState } from "react";

function Benders() {
    const [benderId, setBenderId] = useState(null)
    const [benders, setBenders] = useState([
        {
        id: 1,
        name: 'Aang',
        age: 12,
        nations: 'Air',
        abilities: ['WaterBendering', 'AirBending', 'EarthBending', 'FireBending']
        },
        {
        id: 2,
        name: 'Katara',
        age: 17,
        nations: 'Water',
        abilities: ['WaterBendering']
        },
        {
        id: 3,
        name: 'Toph',
        age: 11,
        nations: 'Earth',
        abilities: ['EarthBending']
        },
        {
        id: 4,
        name: 'Zuko',
        age: 17,
        nations: 'Fire',
        abilities: ['FireBending']
        }  
    ])
    
    function updateBenderId(id){
        setBenderId(id)
        alert(`Showing Details for Bender with Id ${id}`)
    }
    
  return (
    <div>
      <h3>These are Our Benders:</h3>
      <ul>
        {benders.map((bender)=> (
            <div key={bender.id}>
                <li>Name: {bender.name}</li>
                {/* when needing to pass arguments to event functions, must wrap in an arrow function */}
                <button onClick={ ()=> updateBenderId(bender.id) }>Details</button>
                { bender.id === benderId && <ul>
                    <li >Nations: {bender.nations}</li>
                    <li >Abilities: {bender.abilities.join(", ")}</li>
                </ul>}
            </div>
        ))}
      </ul>
    </div>
  )
}

export default Benders
