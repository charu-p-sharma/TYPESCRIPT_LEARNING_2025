class User {
    email:string // As per TS documentation the syntax for decalring classes is like this
    name:string
    readonly city:string = "mumbai"
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}

// const charu = new User(email:"charu.c@gmail.com",name:"charu") // not needed to do like this as we are already declaring it as the constructor 
const charu = new User("c@gmail.com","charu")
// charu.city = "mumbai" // we are not allowed to do this as it is made as readonly

// Note - readonly doesnt allows us to modify or set the value but i am allowed to access it.

// So if now i dont want to allow accessing these readonly values i can set it as private


class User1 {
    public email1:string // SET PUBLIC
    name1:string
    private readonly city:string = "panaji" // SET PRIVATE
    constructor(email1:string,name1:string){
        this.email1=email1;
        this.name1=name1;
    }
}

// Note: - By default every thing is set as "PUBLIC" in TS until it is explicitly mentioned as private.

// NOTE:
// - in JS we already have # which refers as private so we could use " # city " . 
// - in TS we have the keyword private.
// - so there is a debate going on among the developers which is the best one to go for , but again depends on individual's choice.
// - i personally prefer private because it makes it more clear. 


// NOTE : if u see above it is not a production grade code, so developers generally prefer this;

class User2{
    readonly city:string="nasik"
    constructor(
        public email2:string,
        private name2:string
    ){}
}

const sharma = new User2("c@charu.com","cs")