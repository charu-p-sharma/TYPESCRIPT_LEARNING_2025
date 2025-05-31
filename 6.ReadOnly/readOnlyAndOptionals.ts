// readonly - In TS readonly will not allow us to change the type of that data once declared
// Optional - In TS "?" means that data could be optional, if the user doesnt enter that data it is still accepted without giving any errors.
type User ={
    readonly _id:string
    name:string
    email:string
    creditCardDetails?:number // optional 
}

let myUser:User={
    _id:"12",
    name:"charu",
    email:"c@gmail.com"
}

myUser.email="p@gmail.com"
// myUser._id="12345"  // this wont be allowed


// ------------------------------------------------------------------
// Mix and Match of Types

type cardNumber={
    cardNumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails=cardNumber & cardDate & {
    cvv:number
}




export {}