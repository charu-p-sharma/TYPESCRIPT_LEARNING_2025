// Parent Class
class User{

    protected _courseCount = 1

    readonly city:string="nasik"
    constructor(
        public email:string,
        public name:string,
        private userId:string
    ){}

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNumber){
        if(courseNumber<=1){
            throw new Error("Couse count should be more than 1")
        }
        this._courseCount=courseNumber
    }
}

// Note: We cannot access the private properties of the parent class in our child class below, as privates are only accessible within the class not outside the class.

// Child Class
class SubUser extends User{
    isFamily:boolean=true
    changeCourseCount(){
        this._courseCount=4
    }
}

// Note: We are able to use this _courseCount because it is marked as protected.

// Protected - is a access modifier that allows us to use that property in the parent class and the class that inherits this parent class, but not outside the classes. 
