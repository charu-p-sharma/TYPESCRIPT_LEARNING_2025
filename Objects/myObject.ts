const User ={
    name:"charu",
    email:"c@gmail.com",
    isActive:true
}

function createUser({name:string,isActive:boolean}){
}

// createUser()  // this will not be allowed in TS because this function requires the object in params
createUser({name:"sharma",isActive:true})

// Better Syntax to write for functions in TS
// function <function-name>():{TS datatypes declaration}{returning of function}

function createCourse():{fullName:string,price:number}{
    return {fullName:"React js",price:4999}
}











export {}