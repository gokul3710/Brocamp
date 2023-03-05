interface Car {
  name: string;
  mileage: number;
  max_speed: number;
}

function Car(this: Car, name: string, mileage: number, max_speed: number) {
  this.name = name;
  this.mileage = mileage;
  this.max_speed = max_speed;
}

// let gtr = new Car(name: "GTR", mileage: 10, max_speed: 300);
// let fordGT = new Car(name: "Ford GT", mileage: 12, max_speed: 250);

// console.log(gtr);
// console.log(fordGT);
