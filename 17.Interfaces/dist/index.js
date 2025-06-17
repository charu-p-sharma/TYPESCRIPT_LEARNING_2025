"use strict";
// If we are inheriting from a interface we need to implement those properties in our class
class WeConnect {
    // so we are implementing the properties
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class WeYoutube {
    constructor(cameraMode, filter, burst, short // adding more properties are allowed considering all the properties from the interface are implemented
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story interface properties implemented");
    }
}
