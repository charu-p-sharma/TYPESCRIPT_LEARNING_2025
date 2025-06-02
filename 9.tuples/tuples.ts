// Tuples 
// In TS tuple comes with a special purpose and usecase
// Not just the data type values but the order of which they are written also matters in tuples in TS
// Example: The api calls generally follows a specific order in which the response is sent.

// TYPE - 1
let user:(string | number)[]=[1,"helllo"]  // this is the issue that tuple solves 
let tUser:[string,number,boolean]
tUser=["hi",12,true]
// tUser=[123,false,"hiii"]  // this is not allowed in tuples as the order also matters 


// TYPE - 2 
let rgb:[number,number,number]=[255,255,113]

// TYPE - 3
type User =[number,string] // Its just an array with some restrictions like 1st value should be number and 2nd value should be string
const newUser:User=[112,"c@gmail.com"]  // declaring a variable that should be same as the tuple type 
newUser[1]="d@gmail.com"  // In TS we have the ability to change the position and value in tuples as this is allowed and there is no  such restriction. However this is very controversial.
// newUser.push(true)   // So here comes the controversial topic as this should not be allowed but as we have declared it as an array so we can use the methods of the array.

// Note: Current version of TS this issue has been solved and now we cannot use array methods like this 

export {}


