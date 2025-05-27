let greet:string="charu";
console.log(greet);

// the below code will give an error in TS, as i have defined greet as string
greet = true
console.log(greet);

// Note: If you do variablename and dot it will give lists of all the methods that can be used with this varible
// greet.




// To get rid of the squiggly lines in your .ts file use the below code
export {}