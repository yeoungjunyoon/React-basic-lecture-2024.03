  // Destructuring
  let person = {name: 'james', age: 25, job:'Programer'};
  const {name, age} = person;
  console.log(name, age);

  person = {name, age, job: 'Traveller'};   //  {name:name, age:age, job:'Treaveller'}
  console.log(person);

  let fruits = [ 'apple', 'banana', 'cherry'];
  const [a, b, c] = fruits;
  console.log(a, b, c);   // apple banana cherry
  const [x, y] = fruits;
  console.log(x, y);      // apple banana

  // Rest Operator
  const [l, ...m] = fruits;
  console.log(l, m);        // apple [ ' banana' , 'cherry']

let newFruits = [...fruits, 'melon'];
console.log(newFruits);            // ['apple', 'banana', 'cherry', 'melon']
console.log(fruits, 'melon');      // [ ['apple', 'banana', 'cherry'], 'melon']

let str = 'java';
console.log(...str);    // J a v a 

let newPerson = {...person, gender: 'male'};
console.log(newPerson);
