import read from 'readline-sync';
// function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
  
//     descriptor.value = function(...args: any[]) {
//       console.log(`Method called: ${propertyKey}(${args.join(', ')})`);
//       const result = originalMethod.apply(this, args);
//       console.log(`Method returned: ${result}`);
//       return result;
//     };
  
//     return descriptor;
//   }
  
//   class MyClass {
//     @log
//     greet(name: string) {
//       return `Hello, ${name}!`;
//     }
//   }
  
//   const myInstance = new MyClass();
//   myInstance.greet("John");
  

let a: readonly [string,number] = ["dsjfg",3534]
// a[0] = "shdfjhds"
console.log(a[0]);


type Employee = [id: number, name: string];

const employee: Employee = [1,"John"];
console.log(employee[0],employee["id"]);



const nameAgeMap: { [index: string]: number } = {};



nameAgeMap.hello = 23423
nameAgeMap[2e3] = 214



function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

divide({dividend: 23432,divisor: 4534})



const usingRecord: Record<string, number> = {
    "dsfds": 21,
    'Bob': 25
  };


  interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob: Omit<Person, 'age'  | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
  };

  interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob2: Pick<Person, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };

  type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
// const value: Include<Primitive, string> = true; 
let b = null

let k = b ?? "hello"