



const mansion = {
  rooms: 4,
  baths: 3,
  sqft: 2500
}

function renderMantionWithJQuery() {
  const roomElement  = jQuery('#jroom')
  const bathsElement = jQuery('#jbaths')
  const sqftElement  = jQuery('#jsqft')

  roomElement.html(mansion.rooms)
  bathsElement.html(mansion.baths)
  sqftElement.html(mansion.sqft)
}

function renderMansion() {
  const roomElement  = document.getElementById('room')
  const bathsElement = document.getElementById('baths')
  const sqftElement  = document.getElementById('sqft')

  roomElement.innerText = mansion.rooms
  bathsElement.innerText = mansion.baths
  sqftElement.innerText = mansion.sqft
}

function renderStudents(students) {
  const studentsElement = document.getElementById('students')
  let lineItems = ''
  for(let j=0; j<students.length; j++) {
    lineItems += `<li>${students[j].name}</li>`
  }
  studentsElement.innerHTML = lineItems
}

function renderStudentsModern(students) {
  const studentsElement = document.getElementById('students')
  let lineItems = students.map(student => `<li>${student.name}</li>`).join('')
  studentsElement.innerHTML = lineItems
}

function renderStudentsWithJQuery(students) {
  const studentsElement = $('#jstudents')
  for(let k=0; k<students.length; k++) {
    const lineItem = $(`<li>${students[k].name}</li>`)
    studentsElement.append(lineItem)
  }
}

renderMansion()
renderMantionWithJQuery()
renderStudentsModern([
  {name: 'Alice'},
  {name: 'Bob'},
  {name: 'Charlie'},
  {name: 'Dan'},
  {name: 'Edward'}
])
renderStudentsWithJQuery([
  {name: 'Alice'},
  {name: 'Bob'},
  {name: 'Charlie'},
  {name: 'Dan'},
  {name: 'Edward'}
])



const lab = $('#lab')
lab.append(`
  <h1>Welcome to JavaScript</h1>

`)
