const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const allPassing = students.every((student) => student.grade >= 70);

console.log("All students have a passing grade:", allPassing);
