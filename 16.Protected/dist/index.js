"use strict";
// Parent Class
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "nasik";
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Couse count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
// Note: We cannot access the private properties of the parent class in our child class below, as privates are only accessible within the class not outside the class.
// Child Class
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
// Note: We are able to use this _courseCount because it is marked as protected.
// Protected - is a access modifier that allows us to use that property in the parent class and the class that inherits this parent class, but not outside the classes. 
