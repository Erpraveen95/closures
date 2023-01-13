let multiply = function(x,y){
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(3)

//closures method

let multiplyByClosure=function(x){
    return function(y){
        console.log(x*y)
    }
}
let mutiplyByThree = multiplyByClosure(3)
mutiplyByThree(10)
