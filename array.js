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
let numb=[1,2,3,4,5,6];
delete numb[0];
console.log(numb)//do not change the length of array