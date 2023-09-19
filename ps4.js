//Q1
let str="soh\"";
console.log(str.length);

//Q2
let stri="ali is a bad boy";
console.log(stri.includes("bad"));
console.log(`the word ${stri.includes("bad")?"is":"is not"} in the string`)
console.log(`this string start with a? ${stri.startsWith("a")}`);
console.log(`this string is end with z? ${stri.endsWith("z")}`);

//Q3
console.log(stri.toLowerCase());
console.log(stri.toUpperCase());


//Q4
let str2="plz give RS 1000";
let amount=Number.parseInt(str2.slice("plz give RS ".length));
console.log(amount);

str2[2]='r';
console.log(str2);//we do not change string because it is immuteable