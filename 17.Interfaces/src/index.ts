interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory():void
}

// If we are inheriting from a interface we need to implement those properties in our class
class WeConnect implements TakePhoto{
    // so we are implementing the properties
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,

    ){}
}

class WeYoutube implements TakePhoto,Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string  // adding more properties are allowed considering all the properties from the interface are implemented

    ){}

    createStory(): void {
        console.log("Story interface properties implemented");
        
    }
}
