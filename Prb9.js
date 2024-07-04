const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const studentsWithPassingProperty = students.flatMap((student) => {
  return { ...student, passing: student.grade >= 70 };
});

console.log("Students with passing property:", studentsWithPassingProperty);
