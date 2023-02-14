function HouseScreen(
  {
    house = {rooms: 5, baths: 4, sqft: 2500}
  })
{
  // console.log(props)
  // const house = props.house
  //   {
  //   rooms: 3,
  //   baths: 2,
  //   sqft: 1500
  // }
  return(
    <div>
      <h2>House</h2>
      Rooms: {house.rooms}<br/>
      Baths: {house.baths}<br/>
      SQFT: {house.sqft}<br/>
    </div>
  )
}
export default HouseScreen