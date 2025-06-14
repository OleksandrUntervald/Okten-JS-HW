// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.
// використовуючи стрілочну функцію

let arrow = (arr) => {
  for (let i = 0; i < arr.length; i++){
      document.write(`<div>
                <p>${arr[i].id}</p>
                <p>${arr[i].name}</p>
                <p>${arr[i].age}</p>
                </div>`)
  }
}


arrow([{id:1, name: 'saha1', age: 21}, {id:2, name: 'saha2', age: 22}, {id:3, name: 'saha3', age: 23}])
