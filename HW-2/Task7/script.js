// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число

// (в першу, другу, третю або четверту частину години).

let time = 22;

if (time <= 15){
    console.log('first part')
} else if (time <= 30){
    console.log('second part')
} else if (time <= 45){
    console.log('third part')
} else if (time <= 59){
    console.log('fourth part')
} else {
    console.log('Unknown value')
}
