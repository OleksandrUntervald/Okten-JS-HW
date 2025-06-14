// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
// використовуючи стрілочну функцію


let arr = (text) => {
    document.write('<ul>');
    document.write(`
         <li>${text}</li>
          <li>${text}</li>
           <li>${text}</li>
     `);
    document.write('</ul>');
}

arr('asdasd')