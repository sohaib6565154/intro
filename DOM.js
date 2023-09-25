// HTML DOM methods are actions you can perform (on HTML Elements).
// HTML DOM properties are values (of HTML Elements) that you can set or change.

document.getElementById("demo").innerHTML = "Hello World!";
//getElementById is a method, while innerHTML is a property.
console.log(document);//show all the function



//BOM:browser object model(alert,prompt,confirm,go to facebook etc)


//console.log(document.body.firstchild);
//console.log(document.body.firstelementchild);


//matches,closest and contains

let id=document.getElementById("abc");
console.log(abc);//show the abc selector with id name
console.log(abc.matches(".box")) // return true if class exist
console.log(abc.matches(".class")) // return true if class do not exist
console.log(abc.closet(".class"))



//console.log shows elements of DOM tree
//console.dir shows the element as an object with its proerties