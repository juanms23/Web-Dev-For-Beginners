/**
 * Lists every 3rd number between 1-20 and prints to the console
 */
const numberPatternGenerator = () => {
  const pattern = [];
  // starts at 3 and increments by 3 until it reaches 20
  for (let i = 3; i < 20; i += 3) {
    pattern.push(i);
  }
  console.log(pattern.join(", "));
};

const numbers = [8, 2, 3, 7, 6, 1, 5, 4];

/**
 * Finds the maximum value in an array of numbers
 * @param {numbers[]} numbers - The array of numbers to search through
 * @returns {max} The highest number in the array
 */
const findMaximum = (numbers) => {
  if (numbers.length === 0) return null;

  let max = numbers[0];
  // for each number in array
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }

  return max;
};

/**
 * Finds the minimum value in an array of numbers
 * @param {numbers[]} numbers - The array of numbers to search through
 * @returns {min} The lowest number in the array
 */
const findMinimum = (numbers) => {
  if (numbers.length === 0) return null;

  let min = numbers[0];
  // for each number in array
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
  }

  return min;
};

/**
 * Calculates the total of all numbers in an array
 * @param {numbers[]} numbers - The array of numbers to sum up
 * @returns {sum} The total of all numbers in the array
 */
const calculateSum = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  return sum;
};

/**
 * Finds the second highest number in an array
 * @param {numbers[]} numbers - The array of numbers to search through
 * @returns {secondHighest} The second highest number in the array
 */
const findSecondHighest = (numbers) => {
  if (numbers.length < 2) return null;

  let max = -Infinity;
  let secondHighest = -Infinity;

  for (const number of numbers) {
    // if number is greater than max, save prev max as secondHighest and update max
    if (number > max) {
      secondHighest = max;
      max = number;
      // if number is between secondHighest and max, update secondHighest
    } else if (number > secondHighest && number < max) {
      secondHighest = number;
    }
  }

  return secondHighest === -Infinity ? null : secondHighest;
};

// Test for each function
numberPatternGenerator(); // Output: 3, 6, 9, 12, 15, 18
console.log(findMaximum(numbers)); // Output: 8
console.log(findMinimum(numbers)); // Output: 1
console.log(calculateSum(numbers)); // Output: 36
console.log(findSecondHighest(numbers)); // Output: 7

const favorites = [
  "The Pianist",
  "Parasite",
  "The Myth of Sisyphus",
  "The Republic",
  "Jumpman",
];

/**
 * Displays items in an array of strings in different formats
 * @param {String[]} favorites - An array of favorite movies/books/songs
 */
const stringArrayProcessor = (favorites) => {
  console.log("\nTraditional for loop:");
  for (let i = 0; i < favorites.length; i++) {
    console.log(`${i + 1}. ${favorites[i]}`);
  }

  console.log("\nFor...of loop (uppercase)");
  for (const favorite of favorites) {
    console.log(`${favorite.toUpperCase()}`);
  }

  let charCount = 0;
  console.log("\nCharacter count:");
  favorites.forEach((favorite) => {
    charCount += favorite.length;
  });
  console.log(`Total characters across all titles: ${charCount}`);
};

stringArrayProcessor(favorites);

const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 78 },
  { name: "Charlie", age: 17, grade: 84 },
  { name: "David", age: 18, grade: 72 },
  { name: "Eve", age: 17, grade: 95 },
];

/**
 * Processes an array of student objects using loops
 * @param {Object[]} students - An array of objects representing students with name, age, and grade properties
 */
const studentDataFilter = (students) => {
  const adults = [];
  let total = 0;
  const goodStudents = [];

  for (const student of students) {
    // find students who are 18 or older
    if (student.age >= 18) {
      adults.push(student.name);
    }

    // calculate total grade for average
    total += student.grade;

    // create a new array containing only students with grades above 85
    if (student.grade > 85) {
      goodStudents.push(student);
    }
  }

  const average = total / students.length;
  console.log("\nStudents who are 18 or older:");
  console.log(adults.join(", "));
  console.log(`\nAverage grade: ${average.toFixed(2)}`);
  console.log("\nGood students (grades above 85):");
  goodStudents.forEach((student) => {
    console.log(`${student.name}: ${student.grade}`);
  });
};

studentDataFilter(students);
