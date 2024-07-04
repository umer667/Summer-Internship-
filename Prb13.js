const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const index = students.findIndex((student) => student.name === "Bob");

console.log("Index of the first student with a name of 'Bob':", index);
