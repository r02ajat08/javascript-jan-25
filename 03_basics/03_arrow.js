// const user ={
//     name: "Rajat",
//     price: 99,
//     welcomeMessage: function(){
//     console.log(`${this.name}, Welcome to the web`);
        
//     }
// }
// user.welcomeMessage()
// user.name ="Agrim"
// user.welcomeMessage()

// console.log(this);
// function coffee(){
//     let name = "Chetan"
//     console.log(this.name);
//     // console.log(this);
    
// }
// coffee()

// ====================================
const tea = ()=> {
    let name = "Chetan"
    // console.log(this.name);
    console.log(this);
    
}
// tea()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }


// implicit
// const addTwo = (num1,num2)=> num1 + num2
// console.log(addTwo(2,3));
// 

const addTwo = () => ({ username: "Sagar", class: "first" });


console.log(addTwo());

