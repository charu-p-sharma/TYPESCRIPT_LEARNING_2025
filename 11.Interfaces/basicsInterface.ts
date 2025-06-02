// syntax - it starts with the word interface 
// It is in a brad way a type of class.

interface User {
    readonly dbId: number,
    email:string,
    userId:number,
    googleId?:string,
    startTrail:()=>string, // or, startTrail():string   // its a function that returns a string
    getCoupon(couponname:string,value:number):number,
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
    }
}

export {}