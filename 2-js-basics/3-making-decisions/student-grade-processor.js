let allStudents = [
  "A", // Letter grade - passing
  "B-", // Letter grade - passing
  1, // Numeric grade - failing
  4, // Numeric grade - passing
  5, // Numeric grade - passing
  2, // Numeric grade - failing
];

const studentGradeProcessor = (grades) => {
  let studentsWhoPass = [];
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] === "string") {
      if (
        grades[i] === "A" ||
        grades[i] === "A-" ||
        grades[i] === "B+" ||
        grades[i] === "B" ||
        grades[i] === "B-" ||
        grades[i] === "C+" ||
        grades[i] === "C" ||
        grades[i] === "C-"
      ) {
        studentsWhoPass.push(grades[i]);
      }
    } else if (typeof grades[i] === "number") {
      if (grades[i] >= 3) {
        studentsWhoPass.push(grades[i]);
      }
    } else {
      console.log("Invalid Grade!");
    }
  }
  return studentsWhoPass;
};

console.log(studentGradeProcessor(allStudents));

// Test with different grade combinations
let testGrades1 = ["A-", 3, "C", 1, "B"];
let testGrades2 = [5, "A", 2, "C-", 4];

console.log(studentGradeProcessor(testGrades1));
console.log(studentGradeProcessor(testGrades2));
