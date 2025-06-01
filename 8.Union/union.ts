// Union - It is used when we are not sure about what datatype the variable could have or we want it to have multiple data types.

// TYPE - 1
let score :number | string = 33
score = 44
score = "55"


// TYPE - 2
type User={
    name:string;
    id:number
}
type Admin={
    username:string;
    id:number
}
let charu: User | Admin ={ name:"charu", id:23 }
charu={username:"sharma",id:21}


// TYPE - 3
function getDbId(id: number | string){
    console.log(`DB id is ${id}`);
}
getDbId(3)
getDbId("3")

// Here i wanted to perform some operation on the id but was not sure about the type; 
// so added a check to perform operation of that specific datatype only 
function getJobId(id: number | string){
    if (typeof id ==="string") {
        id.toLowerCase()        
    }
}


// TYPE - 4
// Arrays 
// const data1: number[]=[1,2,3,"4"]                 // string is not allowed as u declared it as array of numbers
// const data2: string[]=["1","2","3"]               // string is not allowed as u declared it as array of numbers
// const data3: string[] | number[] =[1,2,3,"4"]     // classic mistake done by all, however it is not allowed
// const data4: (string | number | boolean)[] =[1,2,3,"4"] 


// Use Cases
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment="aisle"
// seatAllotment="crew" // this is not going to be allowed

export {}