// interface Animal {
//     name: string;
//   }
  
//   interface Cat extends Animal {
//     meow: () => void;
//   }
  
//   function getAnimalName(animal: Animal): string {
//     return animal.name;
//   }
  
//   function getCatName(cat: Cat): string {
//     return cat.name;
//   }
  
//   let cat: Cat = {
//       name: "Fluffy", 
//       meow: () => console.log("Meow"),
//       move: function (): void {
//           throw new Error("Function not implemented.");
//       }
//   };
  
//   // This is okay, because Cat extends Animal
//   getAnimalName(<Cat>cat);
  
//   // This is not okay, because Animal does not extend Cat
//   getCatName(<Animal>cat);

function identity<T>(arg: T): T {
    return arg;
  }
  
  let result = identity<string>("hello");
  
  