/*  
 * Расставь отсутствующие this в методах объекта account
*/

// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       orders.push(order);
//     }
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   const orders = account.getOrders();
//   console.log(orders); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
//   //----------------------------------------2----------------------------------
//* Расставь отсутствующие this в конструкторе Account
//

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;

  changePassword = function(newPassword) {
    this.password = newPassword;
  };

  getInfo = function() {
    console.log(`
      Login: ${login}, 
      Pass: ${password}, 
      Type: ${type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc");
console.log(account.password); // 'asdzxc'

account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//  changePassword(newPassword) {
//    this.password = newPassword;
   
//    return this.password;
//      };
  
//   getInfo() {
//     console.log(`
//     Login: ${login}, 
//     Pass: ${password}, 
//     Type: ${type}
//     `);
//   };
// }
// const account = new Account("Mango", "qwe123", "premium");

// console.log(changePassword('asdzxc'));
// changePassword(account.password); // 'asdzxc'

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.getInfo =  getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
// getInfo()

//----------------------------------------3--------------------------
/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переnданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
// */
// const User = function ({name = '',age = '', friends = ''}) {
//   this.name = name;
//   this.age = age;
//   this.friends = friends;
//   console.log (`User ${name} is ${age} years old and has ${friends} friends`)
//   getInfo = function () {
//     // return ;
// }
// }
// const mango = new User({name:'Mango',age:'2',friends: '20' });
// // console.log(mango)
// mango.getInfo = getInfo()
 
// const poly = new User({ name: "Poly", age: 3, friends: 17 });
// poly.getInfo = getInfo() // User Poly is 3 years old and has 17 friends
//==========---------4------------=============
/*  
 * Напиши конструктор Storage(items), который будет создавать объекты 
 для управления складом товаров
 * При вызове будет получать один аргумент - начальный массив товаров,
 и записываеть его в свойство items
 *
 * Добавь метод getItems, который возвращает массив текущих товаров
 * Добавь метод addItem(item), который получает новый товар и добавляет 
 * его к текущим
 * Добавь метод removeItem(item), который получет товар и, если он есть, 
 * удаляет его из текущих
*/
// const Storage = function Storage(items) {
//   this.items = items;
//   getItems = function getItems() {
//     console.log(storage.items)
//   }
//   addItem = function addItem() {
// console.log(storage.items)
//   }
//   removeItem = function removeItem() {
// console.log(storage.items)
//   }
// // console.log(items)
// // return items;
// }
// const storage = new Storage(["Нанитоиды","Пролонгер","Железные жупи","Антигравитатор"])
  
  
  


// console.log(storage.items)

// const items = storage.getItems();
// console.log(new Storage); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
// // 
// // storage.addItem("Дроид");
// // console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// // storage.removeItem("Пролонгер");
// console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
