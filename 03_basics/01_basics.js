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
// console.log(loginUserName());
// console.log(loginUserName("rajat "));

function cartValue(var1,var2,...num1){  //important concept
    return num1
}
// console.log(cartValue(200,222,333,444,555));
const user={
    username: "Rajat",
    id:2  //if did mistake in id by adding "s" like ids, output will be undefined  
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`)
}
// handleObject(user)
// handleObject({
//     username: "agrim",
//     id:1
// }) // it works with the new declared variables
const newArray = [200,300,400,500]

function returnTheSecondValue(getArray){
    return getArray[1]
}
// console.log(returnTheSecondValue(newArray));
// console.log(returnTheSecondValue([20,30,40,50])); //look the syntax carefully
