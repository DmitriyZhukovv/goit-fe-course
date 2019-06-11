    //function-------------------------------------------





    
    //console.log(arrNum [][])
    // for(let key[] === '' || key[] ) {}
/* 
    function name = () {
        return 
    }
    console.log(add())



    function name () {
        const arr = Array.from (arguments)
        let count = 0
        for(let key of arr) {
            count += key
        }
        return count
    } */
    //=============================== task 01 =======================

    // Заполните массив 10-ю иксами с помощью цикла.

    //=============================== task 02 =======================

    // Заполните массив числами от 1 до 10 с помощью цикла.

    //=============================== task 03 =======================

    // Дана строка, например, '123456'. Сделайте из нее '214365'.

    //=============================== task 04 =======================

    //Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

    //=============================== task 05 =======================

    // Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

    //=============================== task 06 =======================

    // Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи

    //=============================== task 07 =======================

    // Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой

    // var str ='abcde abcde abcde';
    // var newArr = [];

    //=============================== task 08 =======================

    // Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false

    // var str = 'яблоко';
    // var arr = ['банан', 'яблоко', 'персик'];
    // console.log(inArray(str, arr));

    //=============================== task 09 =======================

    // Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)

    //=============================== task 10 =======================


    /*
    Напиши функцию checkNumberType(num)
    
    Функция получает число num как аргумент и возвращает 
    строку "Even" если число четное и строку "Odd" если не четное.
    */

    // Вызовы функции для проверки
    console.log( checkNumberType(2) ); // 'Even'

    console.log( checkNumberType(46) ); // 'Even'

    console.log( checkNumberType(3) ); // 'Odd'

    console.log( checkNumberType(17) ); // 'Odd'


    //=============================== task 11 =======================

    /*
    Напиши функцию formatString(str)
    
    - Функия принимает на вход строку str
    - Если длина строки не превышает 40 символов, функция возвращает ее. 
    - Если длина больше 40 символов, то функция обрезает строку до 40-ка
        символов и добавляет в конец строки троеточие '...', после чего 
        возвращает укороченную версию.
    */

    // Вызовы функции для проверки
    console.log(
        formatString("Curabitur ligula sapien, tincidunt non.")
    ); // вернется оригинальная строка
    
    console.log(
        formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
    ); // вернется форматированная строка
    
    console.log(
        formatString("Curabitur ligula sapien.")
    ); // вернется оригинальная строка
    
    console.log(
        formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
    ); // вернется форматированная строка
    

    //=============================== task 12 =======================


    /*
    Напиши функцию checkForSpam(str)
    
    Функция принимает 1 параметр str - строку,
    и проверять ее на содержание слов: spam и sale
    
    Если нашли зарещенное слово то функция возвращает true,
    если запрещенных слов нет функция возвращает false
    
    PS: слова могут быть в произвольном регистре
    */

    // Вызовы функции для проверки
    console.log( checkForSpam('Latest technology news') ); // false

    console.log( checkForSpam('JavaScript weekly newsletter') ); // false

    console.log( checkForSpam('Get best sale offers now!') ); // true

    console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true



    //=============================== task 13 =======================

    /*  
    Написать функцию, getPx(str) 
    Функция getPx должна получать строку вида '10px',
    проверять была ли передана строка, если да, 
    возвращать только числовую составляющую, к примеру 10.
        
    Если была передана не строка, функция возвращает null.
    */

    // Вызовы функции для проверки
    console.log( getPx("10px") === 10 ); // true
    console.log( getPx("10.5") === 10.5 ); // true
    console.log( getPx("0") === 0 ); // true
    console.log( getPx(-1) ); // null
    console.log( getPx(10) ); // null


    //=============================== task 14 =======================

    /*  
    Напиши фукнцию findLongestWord(str), которая принимает 
    параметром произвольную строку и возвращает самое длинное слово в этой строке.   
    
    Важное условие - в строке могут быть только пробелы, символы букв и цифр!
    */


    // Вызовы функции для проверки
    console.log(
        findLongestWord("The quick brown fox jumped over the lazy dog")
    ); // 'jumped'
    
    console.log(
        findLongestWord("Google do a roll")
    ); // 'Google'
    
    console.log(
        findLongestWord("May the force be with you")
    ); // 'force'
        

    //=============================== task 15 =======================


    /*  
    Напиши функцию findLargestNumber(numbers), 
    которая получает массив чисел numbers, и возвращает 
    самое большое число в массиве.
    */

    // Вызовы функции для проверки
    console.log(
        findLargestNumber([1, 2, 3])
    ); // 3
    
    console.log(
        findLargestNumber([27, 12, 18, 5])
    ); // 27
    
    console.log(
        findLargestNumber([31, 128, 14, 74])
    ); // 128
    

    //=============================== task 16 =======================

    /*  
    Есть массив уникальных чисел uniqueNumbers.
    
    Написать функцию, addUniqueNumbers(...), 
    которая получает произвольное кол-во чисел как аргументы, 
    и добавляет в массив uniqueNumbers только уникальные,
    а те которые в массиве уже есть игнорирует.
    */

    const uniqueNumbers  = [2, 1, 4, 9];

    // Вызовы функции для проверки
    addUniqueNumbers(1, 2, 3);
    console.log(
    uniqueNumbers
    ); // [2, 1, 4, 9, 3]

    addUniqueNumbers(12, 2, 3, 19);
    console.log(
    uniqueNumbers
    ); // [2, 1, 4, 9, 3, 12, 19]

    addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
    console.log(
    uniqueNumbers
    ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

    //=============================== task 17 =======================

    /*
    Напиши функцию filterFromArray(arr), которая 
    объявляет 1 параметр, исходный массив arr.
    
    При вызове функции, первым аргументом всегда будет массив чисел,
    за которым следуют один или несколько аргументов, тоже чисел. 
    
    Функция возвращает новый массив, который содержит только 
    те элементы исходного массива, которые не совпадают 
    ни с одним из числовых аргументов.
    */

    const filterFromArray = function(arr) {
    
    }; 

    // Вызовы функции для проверки
    console.log(
    filterFromArray([1, 2, 3, 4, 5], 2, 4)
    ); // [1, 3, 5]

    console.log(
    filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
    ); // [12, 8, 17]



    //=============================== ***** task **** 18  =======================


    /*
    Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
    
    Добавляемый логин должен:
        - проходить проверку на длину от 4 до 16-ти символов включительно
        - быть уникален, то есть отсутствовать в массиве logins
    
    🔔 Разбейте задачу на подзадачи с помощью функций.
    
    Напишите функцию isLoginValid(login), в которой проверьте количество символов 
    параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
    в заданный диапазон от 4-х до 16-ти символов включительно.
    
    Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
    всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
    если такого логина еще нет и false если логин уже используется.
    Далее напишите функцию addLogin(allLogins, login) которая:
        - Принимает новый логин и массив всех логинов как параметры
        - Проверяет валидность логина используя вспомогательную функцию isLoginValid
        - Если логин не валиден, прекратить исполнение функции addLogin 
        и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
        - Если логин валиден, функция addLogin проверяеть уникальность логина 
        с помощью функции isLoginUnique
        - Если isLoginUnique вернет true, addLogin добавляет новый логин 
        в logins и возвращает строку 'Логин успешно добавлен!'
        - Если isLoginUnique вернет false, тогда addLogin не добавляет 
        логин в массив и возвращает строку 'Такой логин уже используется!'
        
    🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
        позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
        не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
        false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
        - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
        - isLoginValid только проверяет валидный ли логин и возвращает true или false.
        - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
            используются результаты вызовов других функций - isLoginUnique и isLoginValid.
    */

    const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

    const isLoginValid = function(login) {
    // код
    };

    const isLoginUnique = function(allLogins, login) {
    // код
    };

    const addLogin = function(allLogins, login) {
    // код
    };

    // Вызовы функции для проверки
    addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
    addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
    addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
    addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
    // function add() {
    //     let count = 0;
    //     const plus = Array.from( arguments);
    //     console.log(plus)
    //     for(let key of plus) {
    //         count += key;
    //     }
    //     return count
    // }
    // console.log(add(1,2,3,4))
    // const filterFromArray = function(mass,...arr) {
    //     const box = []
    // //     console.log(mass)
    // //   console.log(arr)
    // if(!arr.includes(mass)) {
    //     box.push()
    // }
    // for(let key of mass) {
    //     // console.log(key)
    //     if(!arr.includes(key)){
    //         box.push(key)
    //     }
    // }
    //     return box;
    // }; 
    // // Вызовы функции для проверки
    // console.log(
    //   filterFromArray([1, 2, 3, 4, 5], 2, 4)
    // ); // [1, 3, 5]
    // console.log(
    //   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
    // ); // [12, 8, 17]
    // const arr = [2, 5, 9, 15, 0, 4]
    // let result = 0;
    // for (let value of arr) {
    //     if (value % 2 === 0){
    //         result += value
    //     }
    // }
    // console.log(result)
    // const uniqueNumbers  = [2, 1, 4, 9];
    // function addUniqueNumbers(...rest) {
    //     for(let key of rest) {
    //         if(!uniqueNumbers.includes(key)) {
    //             uniqueNumbers.push(key)
    //         }
    //     }
    //     return uniqueNumbers;
    // }
    // // Вызовы функции для проверки
    // addUniqueNumbers(1, 2, 3);
    // console.log(
    //   uniqueNumbers
    // ); // [2, 1, 4, 9, 3]
    // addUniqueNumbers(12, 2, 3, 19);
    // console.log(
    //   uniqueNumbers
    // ); // [2, 1, 4, 9, 3, 12, 19]
    // addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
    // console.log(
    //   uniqueNumbers
    // ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
    // (function(a){
    //     console.log(a)
    // }(1))
    // function show(one, two) {
    //     // console.log(one)
    //     // console.log(two)
    //     const res = two(2,3,4,5)
    //     console.log(res)
    //     const result = one(10, res)
    //         console.log(result)
    // }
    // show(
    //     function(a, b){
    //     return a + b;
    // },
    // function(...rest){
    //     const res = rest.reduce((acc, el) => acc + el, 0)
    //     return res;
    // })
    // const add = function(a, b) {
    //     return a + b + globalValue;
    //   };
    //   const globalValue = 10;
    //   console.dir(add);
    //   console.log(add(5, 15));
    //   let perem = 1;
    //   const arrNum = ['27', '39', '404545', '50808']
    //   console.log(arrNum[0])
    // console.log(arrNum[0][0])
    // for(let key of arrNum) {
    //     // console.log(key[0], key)
    //     if(key[0] === '4' || key[0] === '3') {
    //         console.log(key)
    //     } else {
    //         console.log('else',key)
    //     }
    // }
    //   const rand = Math.floor(Math.random()*arrNum.length)
    //   delete arrNum[rand]
    //   console.log(arrNum)
    //Задание 8 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num
    // let count = 0
    // for(let n = 1000; n > 50; n /=2) {
    //     // console.log()
    //     count++;
    //     console.log(n, count)
    // }
    //   console.log('---->',arrNum[arrNum.length -1])
    //   for(let key of arrNum) {
    //     //   console.log(key)
    //       if(key[0] === '2' || key[0] === '5') {
    //           console.log(key)
    //       }
    //   }
    // const showArr = arrNum.split('')
    // console.log(showArr)
    // // for(let key of showArr) {
    // //     console.log(key)
    // // }
    //   function filter(array, test) {
    //       console.log(array)
    //     for(let key of array) {
    //         console.log(key)
    //         const passed = test(key)
    //         console.log(passed)
    //     }
    //   }
    // const fruits = [
    //     { name: 'apples', quantity: 200, isFresh: true },
    //     { name: 'grapes', quantity: 150, isFresh: false },
    //     { name: 'bananas', quantity: 100, isFresh: true },
    //   ]
    // console.log(filter(fruits, i => i.isFresh ))
    //------------- function ----------- 
    // const summ = add(23, 23, 65, 68, 89, 09, 34)
    // console.log(summ)
    // function add() {
    //     const arr = Array.from(arguments)
    //     // console.log(arguments)
    //     // console.log(arr)
    //     let count = 0;
    //     for (let key of arr) {
    //         count += key;
    //     }
    //     return count
    // }
    // function minus(...arg) {
    //     console.log(arg)
    // }
    // const result = minus(6, 7, 3, 2, 5, 'sdsd', 'sfdgfdf')
    // console.log(Number.isNaN(Number('dsds')))
    // const res = (...arg) => console.log(arg);
    // res(34, 34, 6767, 432, 32)
    // let x = 10;
    // function restX (a, b) {
    //     // let x = 60;
    //     return a - b - x
    // }
    // console.log(restX(78,8))
    // // console.log(x)
    // function fnB() {
    //     console.log('Выполняется [fnB]');
    // }
    // function fnA() {
    //     console.log('Начала выполняться [fnA]');
    //     fnB();
    //     console.log('Продолжила выполняться [fnA] после выхода из [fnB]'); 
    // }
    // console.log('Начал выполнение [global]'); 
    // fnA();
    // console.log('Продолжил выполняться [global] после выхода из [fnA]'); 
    // const num = 121;
    // function summ(max, min) {
    //     const result =  max(44, 34, 34, 23)
    //     console.log(result)
    //    const showResult =  min(result, num)
    //     console.log(showResult)
    // }
    // summ(
    //     function (...arg) {
    //         let count = 0;
    //         for (let key of arg) {
    //             count += key;
    //         }
    //         return count;
    //     },
    //     function (a,b) {
    //         return a + b;
    //     })
    //     function cry() {
    //         console.log('cry')
    //     }
        // function smile() {
        //     cry()
        // }
        // smile()
        // function fn (callback) {
        //     callback
        // }
        // fn(cry())
        // (function(a, b){
        //      console.log(a+ b);
        // })(12,3)
    //     function add(a, ...arg) {
    //         const arr = []
    //         for(let key of a) {
    //          if(!arg.includes(key)){
    //              arr.push(key)
    //          }
    //         }
    //         return arr;
    //     }
    //   const result = add([2,3,7,8], 4,7,2)
    // console.log(result)
    // const arr = [2,3,4,5]
    // console.log(arr.includes(3))
    /*
    Напиши функцию filterFromArray(arr), которая 
    объявляет 1 параметр, исходный массив arr.
    
    При вызове функции, первым аргументом всегда будет массив чисел,
    за которым следуют один или несколько аргументов, тоже чисел. 
    
    Функция возвращает новый массив, который содержит только 
    те элементы исходного массива, которые не совпадают 
    ни с одним из числовых аргументов.
    */
    // const filterFromArray = function(mass, ...arr) {
    //   for(let key of mass) {
    //       if(!arr.includes(key)) {
    //           console.log(key)
    //       }
    //   }
    // }; 
    // // Вызовы функции для проверки
    // console.log(
    //   filterFromArray([1, 2, 3, 4, 5], 2, 4)
    // ); // [1, 3, 5]
    // console.log(
    //   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
    // ); // [12, 8, 17]
    /*  
    Есть массив уникальных чисел uniqueNumbers.
    
    Написать функцию, addUniqueNumbers(...), 
    которая получает произвольное кол-во чисел как аргументы, 
    и добавляет в массив uniqueNumbers только уникальные,
    а те которые в массиве уже есть игнорирует.
    */
    const uniqueNumbers  = [2, 1, 4, 9];
    function addUniqueNumbers(...arg) {
        console.log(arg)
        for(let key of arg) {
            if(!uniqueNumbers.includes(key)) {
                uniqueNumbers.push(key)
            }
        }
        return uniqueNumbers;
    }
    // Вызовы функции для проверки
    addUniqueNumbers(1, 2, 3);
    console.log(
    uniqueNumbers
    ); // [2, 1, 4, 9, 3]
    // addUniqueNumbers(12, 2, 3, 19);
    // console.log(
    //   uniqueNumbers
    // ); // [2, 1, 4, 9, 3, 12, 19]
    // addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
    // console.log(
    //   uniqueNumbers
    // ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
    const uniq = [2, 1, 4, 9, 3, 12, 19, 5, 8]
    console.log(uniq.includes(19))
