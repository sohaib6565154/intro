//fnction is a bloxk of code that can use again and again
//JavaScript functions are defined with the function keyword.

//Funstion Decleration
// function fun(a,b)
// {
//     return a+b;
// }
// let sum=fun(10,20);
// console.log(sum);

//Function Expression
// let sum=function(a,b){return a+b};
// let add=sum(140,20);
// console.log(add);
//anonymous function :a function without a name.


//Arrow Function

// function sayHello()
// {
//     console.log("hello");
// }



// sayHello("sohaib");

// function sayHello(names)
// {
//     console.log("hello",names);
//     console.log(`hello ${names}`);
// }
// sayHello("sohaib");

// function sayHello()
// {
//     return"hello";
// }
// var abc=sayHello();
// console.log(abc);


//Arrow Function
const simple = (a) => (a > 15 ? 15 : a);
let ab=simple(16); // 15
let bc=simple(10); // 10
console.log(ab);
console.log(bc)


function myFunction(x, y = 10) {
    return x + y;
  }
let cd=  myFunction(5);
console.log(cd);


//Rest Parameters
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x);
