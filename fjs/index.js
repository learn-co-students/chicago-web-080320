//
// Pure functions
//

// A function is considered pure if: 
// 1. given an input it always produces the same output
// 2. a pure function has no external side effects





// const cart = {
  // socks: 3,
  // shoes: 2
// }




// const addToShoppingCart = (shoppingCart, itemName, itemQuantity) => {
  // const updatedCart = {
    // ...shoppingCart,
    // [itemName]: itemQuantity
  // }

  // return updatedCart
// }

// console.log(cart, '------');

// addToShoppingCart(cart, 'tshirt', 2)

// console.log(cart, '------');











































// Higher Order Function
// A HOF is any function that either takes a function as an input or produces a function as an output




// const nums = [1, 2, 3]



// const newNums = nums.map(callback)

// const callback = (el) => {
  // return el * 10
// }



// const users = [{fname: 'raza', lname: 'jafri'}]

// const updatedUsers = users.map((user) => {
  // return { fullname: user.fname + ' ' + user.lname }
// })






// [].map(callback)




// const forEach = (arr, callback) => {
  // for(let i = 0; i < arr.length; i++) {
    // const element = arr[i]
    // callback(element)
  // }
// }



// forEach(['a', 'b', 'c'], function(el){ console.log(el) } )




// const map = (arr, callback) => {
  // const output = []

  // for(let i = 0; i < arr.length; i++) {
    // const element = arr[i]
    // output.push(callback(element))
  // }

  // return output
// }


// const test = map(['a', 'b', 'c'], function(el){ return el.toUpperCase() } )
// ['A', 'B', 'C']
 

// console.log(test)






// [1, 44, 23, 3, 8].filter(isEven)

// [44, 8]
// const isEven = (num) => num % 2 === 0








































function greetingMaker(greeting) {
  return function(name){
    return `${greeting}, ${name}`
  }
}



const holaMaker = greetingMaker('hola')


holaMaker('brian')
holaMaker('jeff')
holaMaker('austin')




const bonjourMaker = greetingMaker('bonjour')






















































































// Closure
// HOF that returns a functions. 
// if that inner function uses a variable in the outer function then it is known as a closure


























function odometerMaker(){
  let odometer = 100000


  return function(){
    odometer += 10
    console.log('your current mileage is: ', odometer)
  }
}


const increaseMileage = odometerMaker()

increaseMileage()
increaseMileage()
increaseMileage()
increaseMileage()
increaseMileage()


console.log('--new car----');


const newCarMileage = odometerMaker()
newCarMileage()




































// const updateOdometer = OdometerMaker()
// updateOdometer()


