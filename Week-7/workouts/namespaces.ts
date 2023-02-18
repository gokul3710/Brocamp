namespace MyNamespace {
    export interface Person {
      name: string;
      age: number;
    }
  
    export function sayHello(person: Person) {
      console.log(`Hello, ${person.name}!`);
    }
  }
  
  const alice: MyNamespace.Person = { name: 'Alice', age: 30 };
  MyNamespace.sayHello(alice);
  