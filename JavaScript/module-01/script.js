'use strict'

/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let userInput = prompt('enter login', 'admin');
console.log(userInput);



if(userInput === null) {
    alert('canceled by user');  
};

if(userInput !== adminLogin) {
    alert('access denied, wrong login');
};
if(userInput === adminLogin) {
    prompt('enter password', 'm4ngo1zh4ackz0r');
};
let userPassword = prompt()
if(userPassword === null) {
    alert('canceled by user');
};
if(userPassword === adminPassword) {
    alert('access');
};
if(userPassword === adminPassword) {
    alert('denied');
}; 
