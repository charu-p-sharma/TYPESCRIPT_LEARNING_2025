"use strict";
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseContent = 1;
        this.city = "nasik";
    }
    // Private Method (Can only be accessed within the class not outside the class)
    delteUserId() {
        console.log("UserId deleted");
    }
    // Getter 
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseContent;
    }
    // TS doesnt allow us to have any data type of what the setter will return
    // set courseCount(courseNumber):void{}
    // set courseCount(courseNumber):number{}
    // Setter
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Couse count should be more than 1");
        }
        this._courseContent = courseNumber;
    }
}
// Note Recap:  
// - Get is used to get any property either private or public 
// - Most cases these getters and setters are designed so that the private methods can be exposed outside but with some additional logics
// - Not necessary that if getters are there we need setters too. 
// - Setters dont have a return type in TS, that is how setters are designed in TS.
