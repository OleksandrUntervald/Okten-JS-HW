// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

 let arr = (text) => {
     document.write(`
         <p>${text}</p>
     `)
 }

arr('asdasd')