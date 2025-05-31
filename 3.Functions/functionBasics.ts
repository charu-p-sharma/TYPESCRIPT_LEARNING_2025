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
let loginUser=(name,email,isPaid)=>{
    return ""
}
loginUser("charu","abc@gmailcom")  // this is not allowed as it expects a value for isPaid

// SOLUTION: u can pass the default value by just passing the value through an assignment operator.
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}
loginUser("charu","charu.s@xyz.com")




// SCENARIO - 4
// PROBLEM: This shouldnt be allowed in TS ,we need to avoid the situation of any in TS
function sumFour(num:number){
    // return num+4
     return "hello"  // this shouldnt be allowed in TS
}
sumFour(10);

// SOLUTION: Add the TS check at the return value of the function
function sumFour(num:number):number{
    return num+4
    //return "hello"  // this will now give error
}
sumFour(10);

// Or in Arrow Function it is written as,

let sumFive=(num:number):number=>{
    return ""
}


// NOTE: 
// TS is smart enough to understand the type of the value in our array so we need not explicitly define the type if it is a string or a number or anything and even if u change the datatype the TS will stil be able to identify the type of the data.
// Hover over heros and check in both the scenarios.
// - So the context switching in TS is really smart and we can rely on that
const heros=["spiderman","loki","hulk"]
heros.map(hero=>{
    return `My hero is ${hero}`
})


const heros=[1,2,3]
heros.map(hero=>{
    return `My hero is ${hero}`
})

// BETTER SYNTAX
// But always remember to check what the function is returning, if required mention the type explicitly.

const superHeros=["ironman","natasha","hawki"]
superHeros.map((hero):string=>{
    return "My hero"
    // return 1 // this will give us an error because it i s expecting a string as the return value only.
})


// If u dont want to return anything from a function we specify the return type in the function.Example see below (void).
// void - means returning nothing 
// never - means not returning a value ever

// Not a good practice in TS to use void
function consoleError(errormsg:string):void{
    console.log(errormsg);
}

//  Good practice to use never in TS
function consoleErrors(errmsg:string):never{
    throw new Error(errmsg);
}
export {}