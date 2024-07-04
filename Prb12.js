const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const includesEve = students.some((student) => student.name === "Eve");

console.log("Does the students array include Eve?", includesEve);
