// const amount = 12
// if(amount<10){
//     console.log('small number');
// }
// else{
//     console.log('large number')
// }
// console.log('hey this  is me aditi!!')

// console.log(__dirname)
// setInterval(()=>{
//     console.log('hello world');

// },1000)

// module
// const john='john'
// const peter='peter'

// CommonJS , every file is module (by default)
// Modules  - Encapsulated Code (only share minimum)
const names = require('./4_names')
const sayHi = require('./5_utils')
const data=require('./6_alternative_flavour')
require('./7_mind_grenade') //also calls the function called in the module
// console.log(data)
// const setIntervals=require('./2_globals')
// console.log(setIntervals)
// console.log(names)
// console.log(sayHi)

sayHi('susan') 
sayHi(names.john)
sayHi(names.peter)
