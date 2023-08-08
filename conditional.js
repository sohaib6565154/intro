var tem=20;
if(tem<20)
{
    console.log("it's very cold outside")
}
// if(true)//print the value
// {
//     console.log("it's very cold outside")
// }
// if(false)//do not print the value
// {
//     console.log("it's very cold outside")
// }
// if(tem<30)
// {
//     console.log("it's modreate outside")
// }


// The following values evaluate to false (also known as Falsy values):

// false
// undefined
// null
// 0
// NaN
// the empty string ("")
// All other values—including all objects—evaluate to true when passed to a conditional statement


//ternary operator
// var ttem=(tem>20)?"yes":"No";
// console.log(ttem);

switch(tem)
{
    case 1: 20
    {
        console.log("yes");
        break;
    }
    case 2:30
    {
        console.log("no");
        break;
    }
    default:
    {
        console.log("not a number")
    }
}