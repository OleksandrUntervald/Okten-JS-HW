// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.

let digit1 = Number(prompt('press digit1'));
let digit2 = Number(prompt('press digit2'));

if(digit1 > digit2 ){
    console.log(digit1)
} else if (digit1 < digit2 ){
    console.log(digit2)
} else {
    console.log(`${digit1} and ${digit2} equal`)
}

