// /*
//   Напиши функцию checkNumberType(num)
  
//   Функция получает число num как аргумент и возвращает 
//   строку "Even" если число четное и строку "Odd" если не четное.
// */

// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'
// const checkNumberType = function(num) {
//     if (num % 2 === 0) {
//     return 'Even';
//     }
//     return 'Odd'};

// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'
/* M3 T2
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// Вызовы функции для проверки
// const formatString = function(str, maxlength) {
//     if (str.length > maxlength) {
//       return str.slice(0, maxlength) + '...';
//           }
//     return str;
// };

// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.", 40)
//   ); 
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 40)
//   ); 
//   console.log(
//     formatString("Curabitur ligula sapien.", 40)
//   ); 
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.", 40)
  ); 
  //   /* M3 T3
//   Напишите функцию checkForSpam(str)
  
//   Функция принимает 1 параметр str - строку,
//   и проверять ее на содержание слов: spam и sale
  
//   Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false
  
//   PS: слова могут быть в произвольном регистре
// */

// // Вызовы функции для проверки
// const checkForSpam = function (str) {

//     let arrStr = str.split(' ');
//         console.log(arrStr);
//     let includes = false;
      
//     for (let i = 0; i console.log(arrStr[i].toLowerCase());

// arrStr[i].toLowerCase().includes('spam') || arrStr[i].toLowerCase().includes('sale') ? includes       = true : '';
// }) 
//        console.log(arrStr);
//        return includes;
//    };

// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
//'use strict';
/*  M3 T4
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// const getPx = function isNumeric(str) {
    
//     if(typeof str === 'string') {
//         return Number.parseInt(str);
//     } return null;
// };
// // Вызовы функции для проверки
// console.log( getPx('10px') ); // должно быть:  true
// console.log( getPx("10.5") ); // должно быть:  true
// console.log( getPx("0") ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null
