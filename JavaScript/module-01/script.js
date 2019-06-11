'use strict'
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const userLogin = prompt('enter login', 'admin');
console.log(userLogin);



if(userLogin === null) {
    alert('canceled by user');
};
if(userLogin !== adminLogin) {
    alert('access denied, wrong login');
};
if(userLogin === adminLogin) {
    alert('enter password', 'm4ngo1zh4ackz0r');
};  
const userPassword = prompt('enter password', 'm4ngo1zh4ackz0r')  
if(userPassword === null) {
    alert('canceled by user');
};
if(userPassword !== adminPassword) {
    alert('access denied, wrong password');
};
if(userPassword === adminPassword) {
    alert('wellcome');
}; 
