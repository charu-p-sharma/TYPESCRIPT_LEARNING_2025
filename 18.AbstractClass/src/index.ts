abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getCode(): void;

  getReelTime(): number {
    // some code
    return 10;
  }
}

// creating an object from the abstract class TakePhoto -- not allowed
// const cs = new TakePhoto("test","test1")

class WeChat extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getCode(): void {
    console.log("Get Code");
  }
}

// creating an object from the child class that extends from abstract class TakePhoto --  allowed
const cs = new WeChat("test", "test1", 3);
cs.getReelTime(); // we can do this in abstract classes, accessing a method from parent class directly
