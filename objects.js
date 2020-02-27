
let webClass = {name: 'Web Client Server', code: 2560, room: 'T.3050'} // create an object called 
// webClass, its variables, and those variables' values

let className = webClass.name // define className as name variable's value

webClass.room = 'T.3080' // Change/update object variable's value

webClass.studentsEnrolled = 27 // Add a variable and its value to object

console.log(webClass) // display all info within webClass object

let user = {userName: 'Michael', password: '123ABC'} // create an object called 
// user, its variables, and those variables' values

console.log(user) // display all info within user object
console.log(user.password) // specifically display password from user object

user.email = 'michael@email.com' // add e-mail variable and value to user object
console.log(user) // display all info within user object

let roles = ['phone', 'email', 'interpersonal'] // add nested roles to user object
user.roles = roles // define roles
console.log(user) // display all info within user object

let contact = {office: 'T.3066', phone: '555-123-4567'} // add nested contact info to user object
user.contact = contact // define contact
console.log(user) // display all info within user object
