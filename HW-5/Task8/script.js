// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
// використовуючи стрілочну функцію



let arr = (value) => {
    document.write('<ul>');
    for (let i = 0; i < value.length; i++){
        document.write(`
         <li>${value[i]}</li> 
     `);
    }
    document.write('</ul>');
}

arr(['asdasd',12,2,1,'asd', true, false])