

function Pastries({ pastries = ['N/A']}) {
  return (
    <div>
      {pastries.map((pastry, index) => ( 
      <p key={index}>{pastry}</p>
      ))}
    </div>
  )
}

export default Pastries
