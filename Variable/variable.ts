// STRING
let greet:string="charu";
console.log(greet);

// the below code will give an error in TS, as i have defined greet as string
// greet = true
console.log(greet);

// Note: If you do variablename and dot it will give lists of all the methods that can be used with this variable
// Example: greet.




// NUMBER
let userId=2341  // It is same as 2341.3 ,it is still a number only 
console.log(userId);
// Note: If you do variablename and dot it will give lists of all the methods that can be used with this variable of type number
// Example: userId.




// BOOLEAN 
let isAdult:boolean=true
console.log(isAdult);
// Note: If you do variablename and dot it will give lists of all the methods that can be used with this variable of type boolean
// Example: userId.



// Note: The below is not a good practice as it is overuse of TS
let age:number
age = 23;
console.log("age",age);





// To get rid of the squiggly lines in your .ts file use the below code
export {}