// ========================Example- 1(1. Single Inheritance + Polymorphism)==================
class Vehicle {
    start() {
        console.log("Vehicle starts");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car starts with key");
    }
}

let c = new Car();
c.start();


// ==============================example-2(2. Multilevel Inheritance + Polymorphism)==========================
class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Puppy extends Dog {
    sound() {
        console.log("Puppy makes small bark");
    }
}

let p = new Puppy();
p.sound();


// ====================Example-3(3. Hierarchical Inheritance + Polymorphism)=============
class Vehicle {
    move() {
        console.log("Vehicle is moving");
    }
}

class Bus extends Vehicle {
    move() {
        console.log("Bus moves on road");
    }
}

class Train extends Vehicle {
    move() {
        console.log("Train moves on railway");
    }
}

class Flight extends Vehicle {
    move() {
        console.log("Flight moves in air");
    }
}

let b = new Bus();
let t = new Train();
let f = new Flight();

b.move();
t.move();
f.move();