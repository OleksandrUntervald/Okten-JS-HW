// 1. Створити пустий масив та :

//     a. заповнити його 50 парними числами за допомоги циклу.
let arr1 = [];
for (let i = 0; i < 50; i++){
    if (i % 2 === 0){
        arr1.push(i)
    }
}
console.log(arr1);
//     b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 0; i < 50; i++){
    if (i % 2!== 0){
        arr1.push(i)
    }
}
console.log(arr1);
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

for (let i = 0; i < 20; i++){
     arr1.push(Math.random() * 100)
}
console.log(arr1);
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++){
    arr1.push(Math.floor(Math.random() * 725 ) +8)
}
console.log(arr1);


// 2. Вивести за допомогою console.log кожен третій елемент

for (let i = 0; i < arr1.length; i++){
    if (i % 3 === 0){
        console.log(arr1[i])
    }
}
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 0; i < arr1.length; i++){
    if (i % 3 === 0  && arr1[i] % 2 === 0){
        console.log(arr1[i])
    }
}
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

let arr2 = [];
for (let i = 0; i < arr1.length; i++){
    if (i % 3 === 0  && arr1[i] % 2 === 0){
        console.log(arr1[i])
        arr2.push(arr1[i])
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//

for ( let i =0 ; i < arr1.length - 1; i++){
    if (arr1[i + 1] % 2 === 0){
        console.log(arr1[i])
    }
}



// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let averageArr = [100,250,50,168,120,345,188];
let f = 0;

for (let i = 0; i < averageArr.length; i++){
    f += averageArr[i]
}
let averageValue = f / averageArr.length;
console.log(averageValue)




// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrTop = [100,250,50,168,120,345,188];

 let gg = arrTop.map( a  => a * 5);



// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

let arrLast = ['фівфів100',250,50,168,120,345,true, false,188];
let ast = [];
for (let i  = 0; i < arrLast.length; i++) {
    if (typeof arrLast[i] === "number"){
        ast.push(arrLast[i]);
    }
}
