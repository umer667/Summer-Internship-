const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const index = students.findIndex((student) => student.grade === 85);

console.log("Index of the first student with a grade of 85:", index);
