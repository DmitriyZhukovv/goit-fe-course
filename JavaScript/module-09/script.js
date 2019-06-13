'use strics'



// // const btn = document.querySelector('.btn')

// // btn.onclick = function(event) {
// //     console.log(event)
// // }
// console.log(event)
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/


// const button = document.querySelector('.button');
// button.addEventListener('click', addOne);

// function addOne(event){
//   const num = parseInt(event.target.textContent);
//   event.target.textContent = num + 1;
// }

const button = document.querySelector('.add');
button.addEventListener('click', summ);
let elem = document.querySelectorAll('.text');

function summ () {}