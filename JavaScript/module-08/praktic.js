/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
//----------------------------2------------------------------
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const firstMenuItem = document.querySelector("li");
// firstMenuItem.style.color = 'red';
// console.log(firstMenuItem); // ...
// const lastMenuItem = document.querySelector('ul');
// console.log(lastMenuItem.lastElementChild);
// lastMenuItem.lastElementChild.style.color = 'green'
//-------------------------3--------------------------------

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый 
  элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const listItem = document.createElement('li')
console.log(listItem)
listItem.textContent = elements[0]
const listItem1 = document.createElement('li')
listItem1.textContent = elements[1]
console.log(listItem1)

const arr = elements.map(elements => `<ul><li></li></ul>`)
console.log(elements)
// innerBox.innerHTML = arr;


// parentElem.insertBefore('li', 'ul')
// container.classList.add('container')
// const body = document.body;
// body.prepend(container)
