function sayMyName(){
    console.log("q");
    console.log("w");
    console.log("e");
    console.log("r");
    console.log("t");
    console.log("y");
    console.log("u");
    console.log("i");
}
// sayMyName();

// "+"= concatenate "-" = sorting  
function subThreeNumber(num1,num2,num3){
    let result = (num1 + num2) + num3;
    console.log(result);
    return result
}
// subThreeNumber()
// subThreeNumber(1,2,"3")
// const sum3 = subThreeNumber(1,"2",3)
// console.log("thisIsSum3 : " + sum3);
function loginUserName(username = "agrim "){
    // if(!username){
    //     console.log("Please enter the username");
    //     return
    // }
    return `${username}just logged in`
}
console.log(loginUserName());
console.log(loginUserName("rajat "));