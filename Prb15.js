const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const newStudent = { name: "Grace", grade: 87 };

students.push(newStudent);

console.log("Students array after adding Grace:", students);
