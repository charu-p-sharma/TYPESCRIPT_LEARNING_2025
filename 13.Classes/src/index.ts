class User {
    email:string // As per TS documentation the syntax for decalring classes is like this
    name:string
    city:string = ""
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}

// const charu = new User(email:"charu.c@gmail.com",name:"charu") // not needed to do like this as we are already declaring it as the constructor 
const charu = new User("c@gmail.com","charu")
charu.city = "mumbai"