
//map polyfill
Array.prototype.myMap =  function (cb) {
  let temp= [];

  for(let i = 0; i< this.length; i++){
    temp.push(cb(this[i], i,this))
  }
  return temp
}

//filter polyfill
//filter polyfill
Array.prototype.myMap =  function (cb) {
  let temp= [];

  for(let i = 0; i< this.length; i++){
    if(cb(this[i], i,this))
    temp.push(this[i])
  }
  return temp
}

// ijmplicit binding: the binding which can be performed with dot notation
//explicit binding is performed with call, apply and bind

// this keyword

// Coding question 1

// function make() {
//   return{

//     name: "hohn",
//     ref() {
//       return this
//     } 
//   }

// }

// let user = make()

// console.log(user.ref().name)

//Coding question 2

const user = {
  name: 'hon',
  logMessage(){
    console.log(this.name)
  }

}

setTimeout(() => {
  user.logMessage()
}, 1000)