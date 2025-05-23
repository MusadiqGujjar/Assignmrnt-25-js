            // =========== Chapters (38-48) ===========

                    // ===== | FUNCTIONS| SWITCH | WHILE.. DO-WHILE | =====

// 1: function power(a, b) {
//   let result = 1;
//   for(let i = 1; i <= b; i++) {
//     result *= a;
//   }
//   return result;
// }
// console.log(power(2, 3)); 

// 2: function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return true; 
//   } else {
//     return false; 
//   }
// }

// console.log(isLeapYear(2012)); // true
// console.log(isLeapYear(2016)); // true
// console.log(isLeapYear(2020)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(2000)); // true


// 3: function calculateS(a, b, c) {
// let a = 3, b = 4, c = 5;
//   return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//   let S = calculateS(a, b, c);
//   let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }
// console.log(calculateArea(3, 4, 5)); // 6

// 4: function average(marks1, marks2, marks3) {
//   return (marks1 + marks2 + marks3) / 3;
// }

// function percentage(marks1, marks2, marks3) {
//   let total = 80 + 60 + 69;
//   return (total / 300) * 100;  
// }

// function mainFunction(80, 60, 69) {
//   let avg = average(80);
//   let perc = percentage(69%);
//   console.log(`Average: ${avg.toFixed(2)}`);
//   console.log(`Percentage: ${perc.toFixed(2)}%`);
// }

// 5: function customIndexOf(str, char) {
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// 6: function removeVowels(sentence) {
//   let vowels = "aeiouAEIOU";
//   let result = "";
//   for(let i = 0; i < sentence.length; i++) {
//     if(!vowels.includes(sentence[i])) {
//       result += sentence[i];
//     }
//   }
//   return result;
// }
// console.log(removeVowels("Hello how are you?"));

// 7: function countDoubleVowels(text) {
//   let count = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   for(let i = 0; i < text.length - 1; i++) {
//     let first = text[i].toLowerCase();
//     let second = text[i+1].toLowerCase();
//     switch(true) {
//       case (vowels.includes(first) && vowels.includes(second)):
//         count++;
//         break;
//       default:
//     }
//   }
//   return count;
// }
// let sentence = "Pleases read this application and give me gratuity";
// console.log(countDoubleVowels(sentence)); 

// 9: function calculateOvertime(hoursWorked) {
//   let overtimeHours = 0;
//   if(hoursWorked > 40) {
//     overtimeHours = hoursWorked - 40;
//   }
//   return overtimeHours * 12;  
// }

// // Example:
// console.log(calculateOvertime(45)); 
// console.log(calculateOvertime(38)); 

