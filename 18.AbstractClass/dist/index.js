"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some code
        return 10;
    }
}
// creating an object from the abstract class TakePhoto -- not allowed
// const cs = new TakePhoto("test","test1")
class WeChat extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getCode() {
        console.log("Get Code");
    }
}
// creating an object from the child class that extends from abstract class TakePhoto --  allowed
const cs = new WeChat("test", "test1", 3);
cs.getReelTime(); // we can do this in abstract classes, accessing a method from parent class directly
