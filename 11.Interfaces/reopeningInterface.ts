// Reopening of Interface - basically means we are updating the existing interface code with our required  code

interface User {
    readonly dbId: number,
    email:string,
    userId:number,
    googleId?:string,
    startTrail:()=>string, 
    getCoupon(couponname:string,value:number):number,
}

// This is reopening of interface
interface User {
    githubToken:string
}

const charu:User={
    dbId:2512,
    email:"c@gmail.com",
    userId:1234,
    startTrail:()=>{
        return " Trail started"
    },
    getCoupon:(couponname:"Free birds",value:1000) =>{
        return 100
    },
    githubToken: "abc"
}

export {}