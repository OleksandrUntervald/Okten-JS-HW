// – створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// використовуючи стрілочну функцію


let swap = (arr,index1,index2) => {
    let g = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = g;
    return arr
}


swap([11,22,33,44],0,1)