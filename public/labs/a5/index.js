// alert('Hello World!')

const a = 12
const b = 23
const c = a + b
document.write(`
    <h2>Arithmetics</h2>
    a = ${a}<br/>
    b = ${b}<br/>
    c = ${c}<br/>
`)

document.write('<h2>For Loops</h2>')
// let i = 0
const people = ['Alice', 'Bob', 'Charlie']
document.write('<ul>')
for (let i = 0; i < people.length; i++) {
  document.write(`<li>${people[i]}</li>`)
}
document.write('</ul>')

document.write('<h2>JSON Object</h2>')
const house = {
  rooms: 3,
  baths: 2,
  sqft: 1500
}
document.write(`
    Rooms: ${house.rooms}<br/>
    Baths: ${house.baths}<br/>
    SQFT: ${house.sqft}<br/>
`)
