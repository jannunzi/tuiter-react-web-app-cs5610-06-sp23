export default function DestructorScreen() {
  const house = {
    rooms: 3,
    baths: 2,
    sqft: 1500
  }

  const {rooms, baths, sqft} = house
  // rooms = house.rooms
  // baths = house.baths

  const colors = ['warning', 'primary', 'danger']
  const [warning, primary, danger] = colors

  return(
    <div>
      <h1>Destructors</h1>
      <h2>Destructing objects</h2>
      <h3>House</h3>
      Rooms: {rooms}<br/>
      Baths: {baths}<br/>
      SQFT: {sqft}<br/>
      <h3>Colors</h3>
      Warning: {warning}<br/>
      Primary: {primary}<br/>
      Danger: {danger}
    </div>
  )
}