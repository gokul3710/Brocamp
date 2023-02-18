// Union Type
type PersonOrPet = {
    name: string;
    age: number;
  } | {
    name: string;
    breed: string;
  };
  
  function printName(obj: PersonOrPet) {
    console.log(obj.name);
  }
  
  const person = { name: 'Alice', age: 30 };
  const pet = { name: 'Max', breed: 'Labrador' };
  
  printName(person); // Output: 'Alice'
  printName(pet); // Output: 'Max'
  
  // Intersection Type
  type Employee = {
    name: string;
    age: number;
    role: string;
  };
  
  type Manager = {
    teamSize: number;
  };
  
  type ManagerEmployee = Employee & Manager;
  
  const manager: ManagerEmployee = {
    name: 'Bob',
    age: 40,
    role: 'Manager',
    teamSize: 10
  };
  
  console.log(manager); // Output: { name: 'Bob', age: 40, role: 'Manager', teamSize: 10 }
  