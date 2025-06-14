// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл) та виводить його через document.write
// використовуючи стрілочну функцію



let arr = (text, value) => {
    document.write('<ul>');
    for (let i = 0; i < value; i++){
        document.write(`
         <li>${text}</li> 
     `);
    }
    document.write('</ul>');
}

arr('asdasd',12)