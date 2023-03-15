// A. JS, C#
// 1. Bir string return edən funksiya yaradın. Funksiya parametr olaraq integer dəyər alsın.
// 2. Funksiya girilən parametri çevirərək (reverse) return eləsin.
// Example:
// func(778896) => "698877"
// func(12345) => "54321"

// static string reverseInt(int param)
// {
//     int step = 1;
//     int divide = 10;
//     while (param / divide > 1)
//     {
//         step++;
//         divide *= 10;
//     }
//     int[] myNewArray = new int[step];
//     int idx = 0;

//     while (param > 0)
//     {
//         myNewArray[idx] = param % 10;
//         idx++;
//         param = (param - param % 10) / 10;
//     }

//     var result = "";

//     for(int i = 0; i < myNewArray.Length; i++)
//     {
//         result += myNewArray[i];
//     }

//     return result;
// }

// Console.WriteLine(reverseInt(76214));

// B. JS, C#
// 1. Bir integer return edən funskiya yaradın. Funksiya parametr olaraq bir integer array və bir integer dəyər alır.
// 2. Funksiya girilən integer dəyərdən arrayin içində neçə ədəd olduğunu return eləsin.
// Example:
// func([1, 5, 8, 5, 3, 9], 5) => 2
// func([7, 7, 9, 8, 5, 4, 7], 7) => 3

// static int FindCount(int[] myArr,int value) {
//     int count = 0;

//     for(int i = 0; i < myArr.Length; i++)
//     {
//         if (myArr[i] == value) count++;
//     }
//     return count;
// }
// Console.WriteLine(FindCount(new int[]{ 1,2,3,4,4,4},4));