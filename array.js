//collection of collection of items
// const arr=['abc','def']
// or
// const car=[];
// car[1]="civic";
// car[2]="city";
// or
// console.log(arr);
// const array=new Array("abc","def");
// console.log(array[0]);

// Accessing Array Element
// console.log(arr[1]);
// arr[1]="xyz";
// console.log(arr[1]);
// console.log(car);
// console.log(car.length)
// console.log(car[car.length-1])

// Array Method
// console.log(arr.toString())
// console.log(arr.join("#"));
// console.log(arr.pop());
// console.log(car.push("fgh"));//give the lenght of array
// console.log(car);
// console.log(arr.shift());
// console.log(arr);
// console.log(car.unshift("Sohaib"));
// console.log(car);
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");//2 define how add and 0 define how delete
// console.log(fruits.splice(0, 1));
// console.log(fruits.slice(1, 3));
// console.log(fruits.slice(1));//starting point
// console.log(fruits.toString());
// sort
// console.log(fruits.sort());
// console.log(fruits.reverse());
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());
// console.log(points.sort(function(a, b){return b - a}));//Des order
// console.log(points.sort(function(a, b){return a - b}));//Assending order
// console.log(points.sort(function(){return 0.5 - Math.random()}));//random number
// console.log(points[0]);

//delete
//let numb=[1,2,3,4,5,6];
// delete numb[0];
// console.log(numb)//do not change the length of array

// //sort
// let compare=(a,b)=>{return a-b};
// console.log(numb.sort(compare));//change all the array

// //reverse
// console.log(numb.reverse());

//slice and splice
//splice():used to add new items in array(start index,remove elements,add elements)
// numb.splice(2,3,1022,1023);//if use console,log print deleted values
// console.log(numb);


// //foreach
// num=[2,3,4,4,5];
// //a.foreach((value,index,array)=>{function logic})
// num.forEach(element=> {
//     console.log(element*element);
// });

// //array from
// let names="sohaib";
// let arr=Array.from(names);//make an array
// console.log(arr);


// //for of
// for(let i of num)
// {
//     console.log(i);
// }


// //for in:given the keys of array and object
// //array keys are 0,1,2,3,4......
// for(let key in num)
// {
//     console.log(key);
// }


//map filter and reduce
//higher order array method
//map method
//diff between foreach and map
//foreach use for when we change exsiting element or perform any operation on this element
//map used for create new array and we can return the value
// let a=[10,20,30,40];
// a.map((value,index,array)=>//we can same in for reach
// {
//     console.log(value,index,array);
// })


//filter method:used for show some item eg a<10
// let arr=[10,20,1,2,3,10]
// let arr2= arr.filter((value)=>
// {
//     return value<10;
// })
// console.log(arr2);


//reduce method
let arr=[10,20,1,2,3,10]//add the values
let arr3=arr.reduce((a,b)=>{
    return a+b;
})
console.log(arr3);