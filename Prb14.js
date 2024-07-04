const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const gradesArray = students.map((student) => student.grade);

console.log("Grades array:", gradesArray);
