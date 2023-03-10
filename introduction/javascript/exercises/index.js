// if (2 >= 4) console.log("salam");
// console.log("salam2");

// else console.log("salam2");

// for (let i = 0; i < 8; i++) console.log(i);

/*
A.
1. 'value' və 'pow' adlı iki integer dəyişən tanımlayın. Bu dəyişkənlərə dəyər mənimsədin.
2. Döngüləri istifadə edərək verilən value dəyərinin pow dəyişkənin verilən qədər qüvvətini hesablayın.
Example:
  value = 4;
  pow = 3;
  print => 64
*/

// let value = 5,
//   pow = 0;

// let result = 1;

// for (let i = 1; i <= pow; i++) {
//   result *= value;
// }

// console.log(result);

/*
B.
1. Bir 'value' adlı integer dəyişən tanımlayın. Bu dəyişkənə dəyər mənimsədin.
2. Döngüləri istifadə edərək 1'dən verilən value dəyərinə qədər example'da veriləni ekrana yazdıran algoritma hazırlayın.
Example:
  value = 4;
  print => 
  1 
  1 2
  1 2 3
  1 2 3 4 

*/

// let value = 4;

// for (let i = 1; i <= value; i++) {
//   let result = "";
//   for (let j = 1; j <= i; j++) {
//     result += j + " ";
//   }
//   console.log(result);
// }

/*
C.
1. Bir 'value' adlı integer dəyişən tanımlayın. Bu dəyişkənə dəyər mənimsədin.
2. Döngüləri istifadə edərək girilən ədədin mərtəbə vahidlərini toplayıb ekrana yazdıran algoritma hazırlayın.
Example;
  value = 4528 => print 19 (4+5+2+8)
  value = 579023 => print 26 (5+7+9+0+2+3)
*/

// let value = 777;
// let result = 0;

// while (value > 0) {
//   result += value % 10;
//   value = (value - (value % 10)) / 10;
// }
// console.log(result);

/* 
D.
1. Bir 'value' adlı integer dəyişən tanımlayın. Bu dəyişkənə dəyər mənimsədin.
2. Döngüləri istifadə edərək girilən ədədin faktorialını hesabladan algoritma hazırlayın.
Example;
  value = 4 => print 24 (1*2*3*4)
  value = 6 => print 720 (1*2*3*4*5*6)
*/

// let value = 3;
// let result = 1;

// for (let i = 1; i <= value; i++) {
//   result *= i;
// }
// console.log(result);
