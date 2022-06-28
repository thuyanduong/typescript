let reuben = {
  name: "Reuben",
  age: 30,
  job: "Executive Director"
}

function personFactory(name, age, job){
  return {
    name, 
    age, 
    job
  }
}

let mayaName = "Maya"
let mayaAge = 30
let mayaJob = "Chief Program Officer"

let maya = personFactory(mayaName, mayaAge, mayaJob)

function sayHello(person){
  return `${person.name} says, "Hello, world!"`
}

function celebrateBirthday(person){
  let newAge = ++person.age
  return `${person.name} is now ${newAge} years old!`
}

console.log(reuben)
console.log(maya)
console.log(sayHello(reuben))
console.log(celebrateBirthday(reuben))
console.log(sayHello(maya))
console.log(celebrateBirthday(maya))