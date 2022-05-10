/*
 * author: Shimao Zhou Cole Keeton
 * created: May 2nd
 * license:
 *
 */

//Anon funciton and CallBacks

myArray=[20,40,52,61,139,933]
function square(x) {
    return (x*x);
}
//test fucntion
console.log(square(2));
console.log(sqaure(8));
myArray=[20,40,52,61,139,933]
var result = myArray.map(square);
console.log(result);
var result1= myArray.map(function(x){
    return Math.sqrt(x);
})
console.log(result1);
