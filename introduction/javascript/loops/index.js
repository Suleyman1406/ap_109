// console.log("baslangic");
// for (let i = 0, j = 30; i <= 40 || j > 0; i++, j--) {
//   if (j == 0) {
//     continue;
//     // break;
//   }
//   console.log("bir defe", j);
//   // console.log("Suseniber, Kenan, Emin ve salam idegeri: ", i, "j: ", j);
// }
// console.log("son");

// let second = 0;
// while (second != 60) {
//   console.log("Davam edin", second++);
// }

let second = 0;
let bool = 2 > 5;
while (bool) {
  console.log("Davam edin 1.", second++);
}

second = 0;
do {
  console.log("Davam edin 2.", second++);
} while (bool);
