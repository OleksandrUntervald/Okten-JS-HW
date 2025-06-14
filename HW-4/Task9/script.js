// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.

function Creator(arr){

    for (let i = 0; i < arr.length; i++) {
         document.write(`
         <ul>
         <li>${arr[i].id}</li>
         <li>${arr[i].name}</li>
         <li>${arr[i].age}</li>
         </ul>
         `)
    }

}


Creator([{id: 1,name:"saha1", age: 21},{id: 2,name:"saha2", age: 22},{id: 3,name:"saha3", age: 23}])
