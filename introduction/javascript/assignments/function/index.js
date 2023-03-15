// function removeOdds(myArray) {
//   let myNewArray = [];
//   for (let i = 0; i < myArray.length; i++) {
//     let index = myNewArray.indexOf(myArray[i]);
//     if (index === -1) {
//       myNewArray.push(myArray[i]);
//     } else {
//       myNewArray.splice(index, 1);
//     }
//   }
//   return myNewArray;
// }
// console.log(removeOdds([6, 66, 67, 89, 88, 66, 88]));
// let myArray = [1, "salam", true, 4, 5, 6, 7, 7];
// console.log(myArray.join("/"));
// console.log(myArray.indexOf("salam"));
// console.log(myArray.splice(10, 2));
/* Adding two elements to the array at index 10. */
// console.log(myArray);

let newStr = " salaM Necesen mehemmed   ";

// console.log(newStr.includes("  "));
// console.log(newStr.endsWith("gun"));
// console.log(newStr.split(""));
// console.log(newStr.indexOf("45"));
// console.log(newStr.length);
// console.log(newStr[2]);
// console.log(newStr.replaceAll("2salam", "-1"));
// console.log(newStr.toUpperCase());
// console.log(newStr.substring(6, 13));
// console.log(newStr.trim());
newStr = " salaM Necesen meHemmed   ";

/* Trimming the string, making it lowercase and replacing the word "meHemmed" with "vaqif". */
console.log(newStr.trim().toLowerCase().replaceAll("mehemmed", "vaqif"));
