
//map polyfill
Array.prototype.myMap =  function (cb) {
  let temp= [];

  for(let i = 0; i< this.length; i++){
    temp.push(cb(this[i], i,this))
  }
  return temp
}

//filter polyfill

Array.prototype.myMap =  function (cb) {
  let temp= [];

  for(let i = 0; i< this.length; i++){
    if(cb(this[i], i,this))
    temp.push(this[i])
  }
  return temp
}