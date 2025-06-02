// Inheritance of Interface - basically means it inherits or extends all the properties of the parent interface.
// The keyword used is "extends"

interface User {
    readonly dbId: number,
    email:string,
    userId:number,
    googleId?:string,
    startTrail:()=>string, 
    getCoupon(couponname:string,value:number):number,
}

// This is inheritance of interface
interface Admin extends User {
    role: "admin" | "learner",
}

const charu:Admin ={
    dbId:2512,
    email:"c@gmail.com",
    userId:1234,
    startTrail:()=>{
        return " Trail started"
    },
    getCoupon:(couponname:"Free birds",value:1000) =>{
        return 100
    },
    role:"admin",
}

export {}