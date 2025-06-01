// Tuples 
// In TS tuple comes with a special purpose and usecase
// Not just the data type values but the order of which they are written also matters in tuples in TS
// Example: The api calls generally follows a specific order in which the response is sent.

// TYPE - 1
let user:(string | number)[]=[1,"helllo"]  // this is the issue that tuple solves 
let tUser:[string,number,boolean]
tUser=["hi",12,true]
// tUser=[123,false,"hiii"]  // this is not allowed in tuples as the order also matters 


// TYPE -2 
let rgb:[number,number,number]=[255,255,113]
