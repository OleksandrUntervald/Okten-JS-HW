// #yHAwJOyiC
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr1 = [1,2,3,4,5,6,7,8,9,10];
for (let a = 0; a < arr1.length; a++){
    console.log(arr1[a]);
}

//     #GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

let arr2 = ['1','2','3','4','5','6','7','8','9','10'];
for (let a = 0; a < arr2.length; a++){
    console.log(arr2[a]);
}

//     #Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr3 = ['1','2','3','4','5',1,2,3,4,5];
for (let a = 0; a < arr3.length; a++){
    console.log(arr3[a]);
}

//     #u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr4 = [1,2,3,4,5,6,7,8,9,10,'1','2','3','4','5','6','7','8','9','10',true, false, true, false, true, false, true, false, true, false];
for (let b = 0; b < arr4.length; b++){
    if (typeof arr4[b] === 'boolean'){
        console.log(arr4[b])
    }
}

// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr5 = [1,2,3,4,5,6,7,8,9,10,'1','2','3','4','5','6','7','8','9','10',true, false, true, false, true, false, true, false, true, false];
for (let b = 0; b < arr5.length; b++){
    if (typeof arr5[b] === 'number'){
        console.log(arr5[b])
    }
}

// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr6 = [1,2,3,4,5,6,7,8,9,10,'1','2','3','4','5','6','7','8','9','10',true, false, true, false, true, false, true, false, true, false];
for (let b = 0; b < arr6.length; b++){
    if (typeof arr6[b] === 'string'){
        console.log(arr6[b])
    }
}


//
// #0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr7 = [];
arr7[0] = 1;
arr7[1] = 2;
arr7[2] = 3;
arr7[3] = 4;
arr7[4] = 5;
arr7[5] = '6';
arr7[6] = '7';
arr7[7] = '8';
arr7[8] = true;
arr7[9] = false;

for (let i = 0; i < arr7.length; i++){
       console.log(arr7[i])
}

//     #mDMWMW5a
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++){
    console.log(i);
    document.write(`<h1>${i + 1}</h1>`)
}

// #4sXhaa5YMM
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++){
    console.log(i);
    document.write(`<h1>${i + 1}</h1>`)
}


// #s24slNyz7
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write


for (let i = 0; i < 100; i +=2){
    console.log(i);
    document.write(`<h1>${i}</h1>`)
}


// #zananT5FR1
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++){
    if (i % 2 ===0){
        console.log(i);
        document.write(`<h1>${i}</h1>`)
    }

}

// #Tfrwls7FM
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++){
    if (i % 2 !==0){
        console.log(i);
        document.write(`<h1>${i}</h1>`)
    }

}