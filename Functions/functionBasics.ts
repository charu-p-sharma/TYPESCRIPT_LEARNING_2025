// SCENARIO - 1 
// PROBLEM: This shouldnt be allowed in TS ,we need to avoid the situation of any in TS
function sumTwo(num){
    num.toUpperCase()  // this shouldnt be allowed in TS
    return num+2
}

sumTwo("10");   // this shouldnt be allowed in TS


// SOLUTION: TO THE ABOVE PROBLEM
function sumThree(numb:number){
    return numb+3
}
sumThree(10)


// SCENARIO - 2
// PROBLEM: This shouldnt be allowed in TS ,we need to avoid the situation of any in TS
function signUpUser(name,age,isPaid){}
signUpUser(1,2,3)

// SOLUTION 
function signUpForUser(name:string,age:number,isPaid:boolean){}
signUpForUser("charu",23,true)



// SCENARIO - 3
// PROBLEM: If i want to send a default value to the some param while calling the function
let loginUser=(name,email,isPaid)=>{}
loginUser("charu","abc@gmailcom")  // this is not allowed as it expects a value for isPaid

// SOLUTION: u can pass the default value by just passing the value through an assignment operator.
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}
loginUser("charu","charu.s@xyz.com")




export {}