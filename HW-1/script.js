// #dYQNrBV
//
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let a = ["hello", 'owu', 'com',  'ua' , 1, 10, -999, 123, 3.14, 2.7, 16, true, false];

for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}


//
//
//
// #6Qb97gsv
//
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = 'Oleksandr';
let middleName = ' Oleksandrovich';
let lastName = ' Untervald';
console.log(firstName + middleName + lastName)

//
// #4N0y5tufA
//
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
let aa = 100;
let bb = "100";
let cc = true;
console.log(typeof aa)
console.log(typeof bb)
console.log(typeof cc)
//
//
//
// #ruUtWDUI
//
// Додаткове для тих, хто цікавився prompt`oм
//
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

console.log(prompt("Press name"))
console.log(prompt("Press surname"))
console.log(prompt("Press lastname"))
