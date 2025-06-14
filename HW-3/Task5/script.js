// #vLSZKMlO
//
// – Використовуючи данні з масиву, за   циклу
//
// побудувати структуру за шаблоном

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

let ul = document.createElement('ul');

document.body.appendChild(ul);

for (let i = 0; i < listOfItems.length; i++){
     let li = document.createElement('li');
     ul.appendChild(li);
     li.innerText=`${listOfItems[i]}`
}
