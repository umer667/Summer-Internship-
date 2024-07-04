const greetPerson = (person) => {
  return `Hello, ${person.first} ${person.last}!`;
};

console.log(greetPerson({ first: "Umar", last: "Akbar" }));
console.log(greetPerson({ first: "John", last: "Cena" }));
