var abc="Double cotation";
let ab='single cotation';
console.log(abc.length);

//Extacting String part
let slice=names.slice(1,4);
console.log(slice);

let substring=names.substring(1,4);
console.log(substring);

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

let str=names.substr(2,4);//substr(start,value);

//splice
console.log(names.split(" "))//convert to an array

//Extracting String character
console.log(names.charAt(1));
console.log(names.charCodeAt(1));
console.log(names[1]);

Replace
let Replace=names.replace("Sohaib","Ali")
let repl=names.replace(/Sohaib/i,"ali")
console.log(repl);
console.log(Replace);

let abc="abcaaaabbbbccccaaa";
let replaceall=abc.replace(/a/g,"d")
console.log(replaceall);

//upper case lower case
let upper=names.toUpperCase();
let lower=names.toLowerCase();
console.log(upper);
console.log(lower);

//concat
console.log("hello "+names);

//trim
let abcd="      fbvjfiid   jjspokjaj    "
console.log(abcd.trim());
console.log(abcd.trimStart());
console.log(abcd.trimEnd());

//string padding
console.log(names.padStart(4,'.'));//output ....abc
console.log(names.padEnd(4,'.'));//output abc....

//search
console.log(abcd.search('b'));

//match
let text = "The rain in SPAIN stays mainly in the plain";//give ans in array
console.log(text.match("ain"));
console.log(text.match(/ain/));
console.log(text.match(/ain/g));
console.log(text.match(/ain/gi));
console.log(text.matchAll(/ain/g));


//includes(return true or false)
let namess="sohaib hassan";
namess.includes("hassan");
namess.startsWith("sohaib");
namess.startsWith("hass");
namess.startsWith("hassan",6);
namess.endsWith("hassan");