

//This creates the Train class
class Train {
  //constructor will be used to build properties on the future object instance of the Train class.
  constructor(color, lightsOn, maxSpeed) {
    //these are the properties that each object instance of the Train class should have at the time it gets instantiated: color, lightsOn, maxSpeed
    this.color = color;
    this.lightsOn = lightsOn;
    this.maxSpeed = maxSpeed;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
//we are creating a Train object and passing in the values
var myFirstTrain = new Train("yellow", false, 400);

//You can continue building instances of the Train class. Even if you give them exactly the same properties, they are still separate objects.
var mySecondTrain = new Train("blue", false, 200);
var myThirdTrain = new Train("blue", false, 200);

// console.log(myFirstTrain)
// myFirstTrain.getSelf()

// var train4 = new Train('red', false, 300)

// train4.toggleLights()
// train4.lightStatus()
// train4.getSelf()
// train4.getPrototype()

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn, maxSpeed) {
    //super is used to specify what property gets inherited from the super-class in the sub-class
    super(color, lightsOn, maxSpeed);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightStatus();
    console.log("Lights are 100% operational.");
  }
}

var bullet = new HighSpeedTrain(200, true, "green", false);

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(250, false, "green", false, 700);

// train5.toggleLights()
// train5.lightStatus()
// train5.getPrototype()
// highSpeed1.getPrototype()

// bullet.getPrototype()
//########################################################


class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }

  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at: ", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log("Energy is increasing, currently at: ", this.energy);
  }
  getColor() {
    console.log("color: ", this.color);
  }
}

class Cat extends Animal {
  constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(tigerSound = 'Roar!', sound, canJumpHigh, canClimbTrees, color, energy) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option){
    if(option){
      super.makeSound()
    }
    console.log(this.tigerSound)
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if(option){
      super.makeSound()
    }
    if(this.canTalk){
      console.log("I'm a talking parrot!")
    }
  }
}

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound()
fiji.makeSound()

console.log(polly.color) 
console.log(fiji.color)

polly.isActive()

var penguin = new Bird("shriek", false, "black and white", 200) // setting all the custom properties

console.log(penguin) // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!



//iterate over an array within an array
let outerArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// for (let i = 0; i < outerArray.length; i++) {
//   let innerArray = outerArray[i];
//   for (let j = 0; j < innerArray.length; j++) {
//     let element = innerArray[j];
//     console.log(element);
//   }
// }


let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
/*

Here's a detailed explanation of the code to iterate over an array within an array:

Copy code
let outerArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

This line declares a variable outerArray and initializes it with an array containing three elements, each of which is an array of numbers. The outer array has a length of 3, and each inner array has a length of 3.

Copy code
for (let i = 0; i < outerArray.length; i++) {
  let innerArray = outerArray[i];
This line starts the outer loop, which will iterate over the elements in the outerArray. The loop uses a variable i as the loop counter, and it is initialized to 0. The loop will continue as long as i is less than the length of the outerArray, and it will increment i by 1 on each iteration.

On each iteration of the outer loop, the code assigns the current element of the outerArray to a variable innerArray.

Copy code
  for (let j = 0; j < innerArray.length; j++) {
    let element = innerArray[j];

This line starts the inner loop, which will iterate over the elements in the innerArray. The loop uses a variable j as the loop counter, and it is initialized to 0. The loop will continue as long as j is less than the length of the innerArray, and it will increment j by 1 on each iteration.

On each iteration of the inner loop, the code assigns the current element of the innerArray to a variable element.

Copy code
    console.log(element);

This line prints the value of the element variable to the console.

Copy code
  }
}

These lines close the inner and outer loops, respectively.

The full picture of this code is that it iterates over the outer array and for each element in the outer array, it iterates over the inner array and prints out each element in the inner array. The output will be:

Copy code
1
2
3
4
5
6
7
8
9
I hope this helps! Let me know if you have any more questions.

*/