let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const removedStudent = students.shift();

console.log("Removed student:", removedStudent);
console.log("Students array after removing the first student:", students);
