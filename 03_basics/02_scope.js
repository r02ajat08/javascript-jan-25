let a = 20;
const b = 30;
var c = 40 ;
if (true){
    let a =200;
    const b = 300;
    var c =400 
    // console.log("inner: ",a);
    // console.log(`inner: ${b}`);
    // console.log(`inner: ${c}`);

}
// console.log(a);
// console.log(b);
// console.log(c);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
function one(){
    const name = "agrim"
    function two(){
        const website = "google"
        // console.log(name);
        
    }
    // console.log(website);
    two();
}
one();
// ++++++++++++++++++++++++++++++++++++++++++++++++
//  this is scope   "{}"   function and if else, for loop, while loop
if (true){
    const username = "java"
    if (true){
        const website = " github"
        // console.log(username + website);
        
    }
    // console.log(username + website);
}
// console.log(username);

// +++++++++++++++++++interesting+++++++++++++++++++++++
function addOne(num){
    return num + 1
}
// console.log(addOne(5));

const addtwo = function(num){

    return num + 2dscsd
}
console.log(addtwo(5));
// adding comment