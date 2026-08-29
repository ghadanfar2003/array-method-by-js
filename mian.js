import {
  largestNumber,
  longestName,
  biggerNum,
  numberOfPeople,
  specificNum,
  averageNum,
  comper,
  sortCites,
  duplicated,
  split,
  reverseValue,
  fullNames,
  sortPepole,
  product,
  namesOf,
  sumPositive,
  findWord,
} from "./lib.js";
const arr1 = [
  "Aleepo",
  "Homs",
  "Al Suwada",
  "Lattakia",
  "Zahla",
  "Idlib",
  "Deirez Zor",
];

const arr2 = [1, -1.5, 3, -20, -1.5, 3, 6, 9];
const numbig = sumPositive(arr2);
// console.log(numbig);
// const avg = averageNum(arr2);
// console.log(avg);

 const names = ["John", "Alice", "Bob", "Eve", "Charlie", "Ghadanfar"];
 const longest = findWord(names);
 console.log(longest);

const employees = [
  { name: "Ghadanfar", salary: 5000, status: "pass", currency: "USD", age: 23 },
  { name: "Ghalib", salary: 4000, status: "pass", currency: "USD", age: 25 },
  { name: "Ziad", salary: 3000, status: "filad", currency: "USD", age: 17 },
];
// console.log(namesOf(employees));
