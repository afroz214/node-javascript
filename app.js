//1. Scope

// 1.Difference between let const and var


// let or const = these are block level variable
// var = it is function level scope


// There are 3 types of scope

// 1.Global Scope
// 2.Function Scope
// 3.Block Scope


// const myName = 'Jonas'


// const first = () => {
//     const age = 30
//     if (age >= 30) {
//         const decade = 3
//         var millinien = 'String'
//     }
//     // var can be access outside of the if block but const can't because var is function level scope while const is a block level scope

//     function second () {
//         var job = 'teacher'

//         console.log(`${myName} is ${age} years old and is a ${job}`)
//     }
//     second()

// }
// first()

// myName is global scope
// age is a function scope
// decade is a block level scope

// important to note
// second function can access a variable of age and first function can access a variable of myName 
// which is a global scope and access the variable by looking up above the parent element is knowns as scope chain

// 2. Scope Chain vs Call Stack


// const a = 'jonas'
// const firstFunction = () => {
//     const b = 'Hello'
//     second()

//     function second() {
//         const c = 'Hi'
//         third()
//     }
// }
// const third = () => {
//     const d = 40
//     console.log(`${d} ${a}`)
// }
// firstFunction()


// we cannot access variable c and b even if the third function executed inside the second funtion
// because third function is written in a global scope 

// 3. Hoisting


// Hoisting = we can use variable or functions before initialising

// console.log(firstName)
// console.log(secondName)
// console.log(year)

// var firstName = 'Jonas'
// let secondName = 'Sch'
// const year = 1991

// var is hoisiting but in case of let or const it gives us a Reference Error

// console.log(addDecs(2, 3))
// console.log(addDec2(3,4))


// function addDecs (r, s) {
//     return r + s
// }

// const addDec2 = (r, s) => {
//     return r + s
// }

// Same is true for function as well


// 5. this keyword


// this keyword only can use in function method means function inside a object or method
// like this


// const jonas = {
//     firstName: 'Jonas',
//     birthyear: 1995,
//     calcAge: function() {
//         console.log(this)
//         return 2021 - this.birthyear
//     }
// }
// jonas.calcAge()

// // this keyword simply points out the jonas object


// const matilda = {
//     year: 1999
// }
// matilda.calcAge = jonas.calcAge // copy the calcAge method from jonas to matilda object
// matilda.calcAge()


// if we call the calcAge method from the matilda object then this keyword simply points out the matilda object
// simply this keyword points out the object which is calling the method


// 6. Spread Operator


// Spread Operator = we took out all the element from an array, string but not object
// const arr1 = [2, 3, 5]
// const arr2 = [5, 9, 4]

// console.log(...arr1)

// // join 2 arrays
// const joinArray = [...arr1, ...arr2]
// console.log(joinArray)


// 7. Working with String

// 1. slice method

// const seatNumber = (seat) => {
//     const seatCharacter = seat.slice(-1)
//     if (seatCharacter === 'B' || seatCharacter === 'E') {
//         console.log('you got the middle seat')
//     } else {
//         console.log('you got the window seat')
//     }
// }
// seatNumber('11B')
// seatNumber('23C')
// seatNumber('3E')

// 2. toUpperCase() or toLowerCase() or trim() or replace()

// const newString = 'jonas'
// console.log(newString[0].toUpperCase() + newString.slice(1))

// const replaceString = '200$'

// const dollarIntoRuppes = (dollar) => {
//     const numberString = dollar.slice(0, -1)
//     const realNumber = Number(numberString)
//     return realNumber * 80 + ' Rupees'
// } 
// console.log(dollarIntoRuppes(replaceString))

// // console.log(replaceString.replace('$', 'Rupees'))

// const announcement = 'the door is not good so the door might be bad for you'
// console.log(announcement.replace(/door/g, 'gate'))

// 3. Booleans
// includes(), startsWith(), endsWith()

// const newString = 'Air Bus'
// console.log(newString.includes('Air')) 
// console.log(newString.startsWith('Air')) 
// console.log(newString.endsWith('Bus')) 

// 4. split
// split = it turned the string into arrays

// console.log('ab+bc+cd+de'.split('+'))
// console.log('Jonas Schema'.split(' '))

// 5. Repeat
// Repeat = it simply repeat the string

// const message2 = 'there is not way... '
// console.log(message2.repeat(15))

// 8. Functional Programming

// 1. Default Parameters

// const bookings = []

// const createBooking = (flightNumber, newPassenger = 1, price = 199 * newPassenger) => {
//     const booking = {
//         flightNumber,
//         newPassenger,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking('LH123')

// the default parameters in function is taken as a undefined like in this case newPassenger and price are
// if you want default parameter a number, string, or anything you can specify in the parameter it self

// createBooking('LH1234', 5)

// if you want to skip some parameter then you have to put undefined in its place 

// createBooking('LH345', undefined, 400)

// 2. FirstClass function and High Order function

// First Class function = it simply means a function always returns a value which we can put inside a variable also like below

// const add = (num1, num2) => {
//     return num1 + num2
// }
// const addNumber = add(2, 4)
// console.log(addNumber)

// High Order Function = the function can recive another function or a function returns a function like

// const increase = function(number) {
//     return function() {
//         const newNumber = number + 5
//         console.log(newNumber)
//         return newNumber
//     }
// }

// increase(4)()

// (function () {
//     console.log('This will never run again')
// })()


//   OR

// const increaseNumber = increase(4)
// increaseNumber()

// 3. Clouser


// Clouser = Clouser is a ability of a function to remember all the variable and functions declared in its outer scope


// const secureBooking = () => {
//     let passengerCount = 0

//     return function() {
//         passengerCount++
//         console.log(passengerCount)
//     }
// }


// booker become a global context
// const booker = secureBooking()
// and the secureBooking function has gone right this but we can still access the variable inside the secureBooking because of clouser
// booker()
// booker()
// booker()

// all we say booker function has became the global execution but we can still access the passengerCount inside the secureBooking just because of clouser

// 9. Object Oriented Programming (OOP)

// OOP = this is just a way of writing clean code and this is a class based programming

// There are 4 building blocks for OOP

// 1. Abstraction = this simply hides the data which we don't need

// 2. Inheritance = it simply inherite the class means extend the class ex:-

// 3. Encapsulation = it keeps properties and methods private inside the class so they aren't accessible outside the class

// 4. Polymorphism = it simply the child class overwrites a method inherited from a parent class

// There are 3 ways to create an object

// 1. Constructor Function


// const Person = function(firstName, birthyear) {
//     this.username = firstName  // set property name using this keyword and are knowns as instance property
//     this.year = birthyear

//     // this.calcAge = function() {
//     //     console.log(2037 - this.year)
//     // }

//     // instead of creating method for every object we could link this with prototype
// }
// const jonas = new Person('Jonas', 1992)
// console.log(jonas)

// const matilda = new Person('Matilda', 2000)
// console.log(matilda)

// // instance = the object created by the blueprint of the class or the contructor function
// // in this case jonas is an instance of Person

// // Prototype

// Person.prototype.calcAge = function() {
//     console.log(2038 - this.year)
// }

// jonas.calcAge()
// matilda.calcAge()

// important to remember:-
// Once we defined method the constructor function in this case like a Person using prototype we can use the method with all the object created by the Person constructor.


// 2. ES6 Classes


// class = classes are simply a function 

// class PersonCl {
//     // constructor = this function creates the objects and set their property name as well
//     constructor(firstName, birthyear) {
//         this.firstName = firstName
//         this.birthyear = birthyear
//     }
//     // after constructor we can now define method which will automatically linked with the object created by this class
//     clacAge() {
//         console.log(2034 - this.birthyear)
//     }
//     greet() {
//         console.log(`Hey ${this.firstName}`)
//     }
// }

// const jessica = new PersonCl('Jessica', 1999)
// console.log(jessica)
// jessica.clacAge()
// jessica.greet()


// important to keep in mind
// 1. classes are not hoisted = this can't be use before define
// 2. classes are first-class citizen = we can pass them into function and return them from a function because classes are just a another type of function



//3. Inheritance between classes

// inheritance b/w classes = child class (StudentCl) inheritate the parent class (PersonCl) by extends keyword so they can use all the method defined in the parent class

// class PersonCl {
//     // constructor = this function creates the objects and set their property name as well
//     constructor(firstName, birthyear) {
//         this.firstName = firstName
//         this.birthyear = birthyear
//     }
//     // after constructor we can now define method which will automatically linked with the object created by this class
//     clacAge() {
//         console.log(2034 - this.birthyear)
//     }
//     greet() {
//         console.log(`Hey ${this.firstName}`)
//     }
// }


// const jessica = new PersonCl('Jessica', 1999)

// class StudentCl extends PersonCl {
//     constructor(firstName, birthyear, course) {
//         super(firstName, birthyear)
//         this.course = course
//     }
//     introduce() {
//         console.log(`Hey ${this.firstName}, I study ${this.course}`)
//     }
// }

// const martha = new StudentCl('Martha', 2019, 'CS')
// console.log(martha)
// martha.clacAge()
// martha.greet()
// martha.introduce()

// since martha is extended by the PersonCl class so she can use all the method which are defined in the PersonCl class


// 10. Asynchronous javaScript

// Synchronous Code = it execute code line by line and is a blocking code

// Asynchronous Code = it happens in the background without blocking the code

// AJAX(Asynchronous JavaScript And XML) = with AJAX calls, we can request data from a web server

// API(Application Programming Interface) = allow application to talk to each other

// How Asynchronous JavaScript works behind the scenes

// There are mainly 5 things which make javaScript Asynchronous

// 1. Call Stack(where the JS code executes) = this is the place where javaScript Code run
// 2. Web Api's = this is the background place where asynchronous tasks run all the heavy tasks runs here
// 3. Microtasks Queue = Once the promises fetched this is the place where its stays
// 4. CallBack Queue = All the call backs function stays here
// 5. Event Loop = Once the image loads or data fetched from the server and waiting 
//                 to execute in the Microtasks Queue or Callback Queue then the event
//                 event loop execute them in the Call Stack

// important to note event loop execute Microtask Queue first if there were the task waiting for execution


// Consuming Promimses using async/await

// const getFlag = async () => {
//     const res = await Promise //we use await for promises
// }
// getFlag()

// try/catch

// const myFlag = async () => {
//     try {
        
//         throw new Error('Problem')
        
//     } catch (err) {
//         console.log(err.message)
//         console.log('d')
//     }
// }
// myFlag()

// important to remember = we can handle errors in catch block by (err) or for message (err.message)

// const reverseString = (str) => {
//     const arr = str.split('').reverse().join('')
//     console.log(arr)
// }
// reverseString('gnirtSesrever')

// const arr = [1,2,3,4]

// const findMaxAndMin = (arr1) => {
//     let minNum = Math.min.apply(null, arr1)
//     let maxNum = Math.max.apply(null, arr1)

//     const sumOfArray = arr1.reduce((acc, item) => acc + item)

//     const maxSum = sumOfArray - minNum
//     const minSum = sumOfArray - maxNum
//     console.log(maxSum, minSum)
// } 
// findMaxAndMin(arr)

// const arr = [123, -76, 56, -23]

// arr.map((a, i) => {
//     if (a > 0) {
//         console.log(`${i} ${a} is credited in your account`)
//     } else {
//         console.log(`${i} ${-a} Widrawl from your account` )
//     }
// })

// const profile = {
//     name: 'Peter',
//     age: 56,
//     kids: [{
//         name: 'Jill',
//         age: 23,
//         kids: [{
//             name: 'Jerry',
//             age: 1
//         }, {
//             name: 'Bill',
//             age: 2
//         }]
//     }]
// }

// const addAge = () => {
//     const peterAge = profile.age
//     const jillyAge = profile.kids.reduce((acc, item) => acc + item.age, 0)
//     const jerryAge = profile.kids.map(x => {
//         return x.kids.reduce((acc, item) => acc + item.age, 0)
//     })
//     const value = jerryAge[0]
//     return peterAge + jillyAge + value
// }
// console.log(addAge())

// const arr = [1,6,5,9,9,9,8,2,8,3,4]
// const value = [...new Set(arr)]
// console.log(value)

// 1. Convert an object into an array

// const x = {
//     a: 2,
//     b: 3
// }
// const value = Object.values(x)
// console.log(value)

// 2. Reverse a string

// const x = 'myname'
// const y = x.split('').reverse().join('')
// console.log(y)

// 3. return this keyword

// const obj = {
//     a: 1,
//     b: 2,
//     getA() {
//         console.log(this.a)
//         return this
//     },
//     getB() {
//         console.log(this.b)
//         return this
//     }
// }

// obj.getA().getB()

// 4. Create New method to an array using prototype

// Array.prototype.print = function() {
//     console.log(...this)
// }

// const arr = [1,2,3]
// arr.print()

// const obj = {
//     x: 1,
//     getX() {
//         // const that = this
//         const inner = function() {
//             console.log(this.x)
//         }
//         inner.bind(this)()
//     }
// }
// obj.getX()

//How to clone an object 

// const obj = {
//     a: {
//         b: {
//             c: 1
//         }
//     }
// }


// const clone = JSON.parse(JSON.stringify(obj))

// clone.a.b.c = 4
// console.log(clone)

// console.log(obj)


// 5. One number is missing from  an array

// const a = [1,2,3,5,6]
// const b = a.length


// const totalSum = function(n) {
//    const value =  (n * (n+1)) / 2
//    return value
// }
// const sumOfArray = a.reduce((acc, item) => acc + item, 0)

// console.log(totalSum(6) - sumOfArray)

// 6. Max an Min value from  an array

// const arr = [2,3,6,1,7,9]

// const getValue = () => {
//     const maxValue = Math.max(...arr)
//     const minValue = Math.min(...arr)
//     const total = arr.reduce((acc, item) => acc + item, 0)
//     console.log('Max Value = ',total - minValue)
//     console.log('Min Value = ',total - maxValue)
// }
// getValue()


// useRef

// userRef = this is similar to useState

// 1. this returns an object with the "current" value 
// 2. this does not re-render the component while useState does
// 3. you can also use it to get the previous value from the state

// useContext = this help us to not passing props into a long chain of children component

// useCallBack = we use this to prevent the function to re-create if it doesn't need to be

// useState = it is a function which store state value in a functional component

// useEffect is function which takes a callback function which run everytime render happens 


// const arr = [1,2,3,4]

// const index = arr.findIndex(x => x === 2)
// console.log(index)
// const leftValue = arr.filter(x => x !== 2)
// console.log(leftValue)
// const storedValue = arr.splice(index, 1)
// console.log(arr)
// console.log(storedValue)

// State = state is a way to store internal state of a component

// 1. How to prevent re-render in react = Use Pure Components

// 2. High Order Component = it simply means a function takes in a Component and return a new Component

// 3. Context = it is like a global prop

// 4. Code Splitting = Lazy Loading but i haven't used it yet

// 5. Event Delegation = it is a method of attaching event handler to an element

const arr = [{id: 1, name: 'Jonas'}, {id: 2, name: 'Matilda'}]
const index = arr.findIndex(o => o.id === 1)

console.log(index)

const name1 = {
    firstName: 'Somya',
    lastName: 'Kumar'
}
const name2 = {
    firstName: 'Jenny',
    lastName: "D'Souza"
}
const printAll = function (value) {
    const { state, city } = value
    console.log(`${this.firstName} ${this.lastName} from ${state} and ${city}`)
}

printAll.call(name1, { state: 'Jharkhand', city: 'Bokaro' })

name2.firstName = 'Miracle'
console.log(name2)


const aryy = [1,2,3]
const aryy2 = [7,8,9]
aryy.push(aryy2)
aryy.push(8)
console.log(aryy)
aryy.splice(2, 1)
console.log(aryy2)
