// Syntax 
type User={
    name:string;
    email:string;
    isActive:boolean
}

function createUser(user:User):User{
    return {name:"",email:"",isActive:true}
}

createUser({name:"sam",email:"s@gmail.com",isActive:true})




export {}