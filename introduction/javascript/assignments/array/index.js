// A. JS, C#
// 1. Bir integer arrayı yaradın və buna dəyər mənimsədin.
// 2. Arrayin içində olan ən böyük ikinci və ən kiçik ikinci ədədləri ekrana yazdırın.
// Example:
// if array = [ -7, -71, 66, 11 ,3 , 8 , 67]  then print "Ən böyük ikinci: 66, Ən kiçik ikinci -7"
// if array = [ 1, 6, 0, 5 , 3 , 8 , 16]  then print "Ən böyük ikinci: 8, Ən kiçik ikinci 1"

// let myArray = [1, 6, 0, 5, 3, 8, 16];
// let firstBig = myArray[0];
// let firstLittle = myArray[0];
// let secondBig = myArray[0];
// let secondLittle = myArray[0];

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] > firstBig) firstBig = myArray[i];
//   if (myArray[i] < firstLittle) firstLittle = myArray[i];
// }

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] > secondBig && myArray[i] !== firstBig) secondBig = myArray[i];
//   if (myArray[i] < secondLittle && myArray[i] !== firstLittle)
//     secondLittle = myArray[i];
// }
// console.log(`Ən böyük ikinci: ${secondBig}, Ən kiçik ikinci ${secondLittle}`);

// B. JS, C#
// 1. Bir integer arrayı yaradın və buna dəyər mənimsədin.
// 2. Arrayin içində olan sadəcə müsbət ədədləri ayrı, mənfi ədədləri ayrı toplayıb ekrana yazdırın.
// Example:
// if array = [ 1, 2, -5, 8, -3, 9 , -7 ]  then print "Müsbət toplam: 20 , Mənfi toplam: -15"
// if array = [ -7, -3, 2, -8, 5 , -4 ]  then print "Müsbət toplam: 7 , Mənfi toplam: -22"

// let myArray = [-7, -3, 2, -8, 5, -4];
// let plusTotal = 0;
// let minusTotal = 0;

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] > 0) plusTotal += myArray[i];
//   else minusTotal += myArray[i];
// }

// console.log(`Müsbət toplam: ${plusTotal} , Mənfi toplam: ${minusTotal}`);

// C. JS, C#
// 1. Bir integer arrayı, 'limit' adlı bir integer dəyişkən yaradın və bunlara dəyər mənimsədin.
// 2. Arrayin içində olan ədədlərdən limit'dən yüksək olanlarını seçib yeni bir arraya doldurun və yeni arrayi ekrana yazdırın.
// if array = [ 1, 2, -5, 8, -3, 9 , -7 ] and limit = 4  then print [8, 9]
// if array = [ -7, -3, 2, -8, 5 , -4 ]  and limit = -4  then print [-3, 2, 5]

// let myArray = [-7, -3, 2, -8, 5, -4];
// let limit = -4;
// let newValue = "";

// for (let i = 0; i < myArray.length; i++) {
//   if (newValue !== "" && myArray[i] > limit) newValue += ", ";
//   if (myArray[i] > limit) newValue += myArray[i];
// }

// console.log("[" + newValue + "]");

// D. JS
// 1. Bir 'result' dəyişkəniniz olacaq ki başlanğəc dəyəri 1 olmalıdır. Bir arrayiniz olacaq ki içində boolean və integer dəyərlər olacaq. Hər zaman cüt indexlərdə integer'lər, tək indexlərdə boolean dəyərlər olacaq.
// 2. Arrayin içində olan dəyərlərə uyğun olaraq integerdan sonra gələn boolean true'dursa result dəyərinə vurulacaq. Və arraydəki bütün elementlərə bu uygulandıqdan sonra result ekrana yazdırılacaq.
// ÖNƏMLİ!! true, false burada boolean dəyərdir. String Deyil!!

// Example:
// if array = [2, true, 3, false, 7, true, 4 false] then print 14 (2 * 7)
// burada 2 və 7 nin qarşısında true olduğuna görə onlar sadəcə bir birinə vurulur.
// if array = [8, false, 4, false, 11, false, 2 false] then print 1
// if array = [8, false, 3, true, 7, false, 1, true, 8, true] then print 24 (3*1*8)
// if array = [5, false, 2, true, 7, true, 6, true, 9, false] then print 84 (2*7*6)

// let myArray = [5, false, 2, true, 7, true, 6, true, 9, false];
// let result = 1;

// for (let h = 0; h < myArray.length; h += 2) {
//   if (myArray[h + 1]) result *= myArray[h];
// }
// console.log(result);

// E. JS
// 1. Bir array yaradın və buna dəyər mənimsədin.
// 2. Arrayin içində olan dəyərləri təkrar eləməyəcək şəkildə ekrana yazdırın.
// Example:
// if array = [1, "salam", 1, true, true, false, false, false, 5, "5"] then print "1 salam true false 5"
// if array = [2, "class", 1, true, "class", 16, 17, 18,  "17"] then print "2 class 1 true 16 17 18"

// let myArray = [1, "salam", 1, true, true, false, false, false, 5, "5"];
// let myNewArray = [];

// for (let i = 0; i < myArray.length; i++) {
//   let isThere = false;
//   for (let j = 0; j < myNewArray.length; j++) {
//     if (myNewArray[j] == myArray[i]) {
//       isThere = true;
//       break;
//     }
//   }
//   if (!isThere) myNewArray[myNewArray.length] = myArray[i];
// }

// let myResultString = "";
// for (let i = 0; i < myNewArray.length; i++) {
//   myResultString += myNewArray[i] + " ";
// }
// console.log(myResultString);
