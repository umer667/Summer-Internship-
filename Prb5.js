const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const topStudents = students.filter((student) => student.grade > 90);

console.log("Students with grades above 90:", topStudents);
