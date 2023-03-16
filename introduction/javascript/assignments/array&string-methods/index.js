// function printCount(myArr) {
//   let myNewArr = [];
//   for (let i = 0; i < myArr.length; i++) {
//     let count = 0;
//     if (myNewArr.includes(myArr[i])) continue;
//     for (let j = 0; j < myArr.length; j++) {
//       if (myArr[i] === myArr[j]) count++;
//     }
//     console.log(`${myArr[i]} - ${count} eded`);
//     myNewArr.push(myArr[i]);
//   }
// }

// printCount([5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7]);

// let myArr = [3, 9, 2];
// console.log(myArr.sort());
// console.log(myArr);

// function isSame(a, b) {
//   if (a.length !== b.length) return false;
//   a.sort();
//   b.sort();

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }
// console.log(isSame([1, 2, 3, "salam"], [1, 2, 3, "salam"]));

// function printAnything(arr) {
//   console.log("Omer"); // O(1)

//   for (let i = 0; i < arr.length; i++) { // O(n+1)
//     console.log(i); // O(n)
//   }
// }

// // O(n)

// printAnything([1, 2, 3]);

// function printAnything(arr) {
//   console.log("Omer"); // O(1)

//   for (let i = 0; i < 5; i++) {
//     // O(n)
//     console.log("Ferhad"); // O(n)
//     for (let j = 0; j < 5; j++) {
//       // O(n^2)
//       console.log("salam");
//     }
//   }
// }

// //

// printAnything([1, 2, 3]);
