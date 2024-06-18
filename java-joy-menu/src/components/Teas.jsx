

function Teas({teas = ['N/A']}) {
  return (
    <div>
      {teas.map((tea, index) => (
      <p key={index}>{tea}</p>
      ))}
    </div>
  )
}

export default Teas
