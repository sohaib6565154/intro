//Q1
// let arr=[];
// let a=prompt("enter a number");
// a=parseInt(a);
// arr.push(a);
// console.log(arr);

//Q2
// let arr=[];
// let a;
// do
// {
// a=prompt("enter a number");
// a=parseInt(a);
// arr.push(a);
// console.log(arr);
// }while(a!=0)
// console.log(arr);


//Q3
// let arr=[10,203,4,5,4,2,32,4,534,634];
// let a= arr.filter((value)=>{
//     return value%10==0;
// })
// console.log(a);


//Q4
// let arr=[10,203,4,5,4,2,32,4,534,634];
// let a=arr.map((value)=>{
//     return value*value;
// })
// console.log(a);


//Q5
let arr=[1,2,3,4,5]
let a=arr.reduce((c,d)=>{
    return c*d;
})
console.log(a);
