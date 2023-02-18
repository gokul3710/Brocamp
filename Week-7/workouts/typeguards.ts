// typeof Type Guard
function printNumberOrString(value: number | string) {
    if (typeof value === 'number') {
      console.log('The value is a number:', value);
    } else {
      console.log('The value is a string:', value);
    }
  }
  
  printNumberOrString(42); // Output: 'The value is a number: 42'
  printNumberOrString('hello'); // Output: 'The value is a string: hello'
  
  // instanceof Type Guard
  class Animal {
    move() {
      console.log('I am moving!');
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log('Woof!');
    }
  }
  
  function handleAnimal(animal: Animal) {
    if (animal instanceof Dog) {
      animal.bark();
    } else {
      animal.move();
    }
  }
  
  const animal1 = new Animal();
  const dog1 = new Dog();
  
  handleAnimal(animal1); // Output: 'I am moving!'
  handleAnimal(dog1); // Output: 'Woof!'
  
  // Custom Type Guard
  type Car = {
    make: string;
    model: string;
    year: number;
  };
  
  function isCar(obj: any): obj is Car {
    return (
      typeof obj === 'object' &&
      'make' in obj &&
      'model' in obj &&
      'year' in obj
    );
  }
  
  function printCarInfo(obj: any) {
    if (isCar(obj)) {
      console.log(`Make: ${obj.make}, Model: ${obj.model}, Year: ${obj.year}`);
    } else {
      console.log('Invalid car object!');
    }
  }
  
  const car1 = { make: 'Honda', model: 'Civic', year: 2020 };
  const car2 = { make: 'Ford', model: 'Mustang' };
  
  printCarInfo(car1); // Output: 'Make: Honda, Model: Civic, Year: 2020'
  printCarInfo(car2); // Output: 'Invalid car object!'
  