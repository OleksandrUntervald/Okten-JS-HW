// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

let arr1 = [ 'a', 'b', 'c'];
let g = '';

for (let i = 0; i < arr1.length; i++){
   g +=  arr1[i];
}
console.log(g)

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

let c = ''
let n = 0;
while (n < arr1.length) {

    c += arr1[n];
    n++;
}

//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

let b = '';
for (const arr of arr1) {
      b += arr;
}