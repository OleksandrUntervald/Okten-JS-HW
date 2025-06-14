// #qLQLJSeN7i
//
// – є масив
 arr = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while

let a = 0;
while (a < arr.length){
    console.log(arr[a]);
    a++;
}

//     2. перебрати його циклом for
for (let b = 0; b < arr.length; b++){
    console.log(arr[b]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let c = 0;
while (c < arr.length  ){
    if (c % 2 !== 0){
        console.log(arr[c]);
    }
    c++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


for (let d = 0; d < arr.length; d++){
    if (d % 2 !== 0){
        console.log(arr[d]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення

let e = 0;
while (e < arr.length  ){

    if (arr[e] % 2 === 0){
        console.log(arr[e]);
    }
    e++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let f = 0; f < arr.length; f++){
    if (arr[f] % 2 === 0){
        console.log(arr[f]);
    }
}

// 7. замінити кожне число, кратне 3, на слово “okten”
let arr2 = JSON.parse(JSON.stringify(arr));

for (let h = 0; h < arr2.length; h++){
    if (arr2[h] % 3 === 0){
        arr2[h] = 'okten';
    }
}
// 8. вивести масив у зворотньому порядку.
console.log(arr2.reverse())
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

//////////////////////////

let a1 = arr.length -1;
while (a1 >= 0 ){
    console.log(arr[a1]);
    a1--;
}

for (let b1 = arr.length -1; b1 >= 0 ; b1--){
    console.log(arr[b1]);
}

let c1 = arr.length - 1;
while (c1 >= 0   ){
    if (c1 % 2 !== 0){
        console.log(arr[c1]);
    }
    c1--;
}



for (let d1 =arr.length - 1;  d1 >= 0 ; d1--){
    if (d1 % 2 !== 0){
        console.log(arr[d1]);
    }
}

let e1 = arr.length - 1;
while (e1 >= 0   ){

    if (arr[e1] % 2 === 0){
        console.log(arr[e1]);
    }
    e1--;
}

for (let f1 = arr.length -1; f1 >= 0; f1--){
    if (arr[f1] % 2 === 0){
        console.log(arr[f1]);
    }
}

let arr3 = JSON.parse(JSON.stringify(arr));

for (let h1 = arr3.length -1; h1 >= 0 ; h1--){
    if (arr3[h1] % 3 === 0){
        arr3[h1] = 'okten';
    }
}