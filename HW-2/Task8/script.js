// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 22;

if (day > 0 && day <= 10){
    console.log('first part')
} else if (day <= 20){
    console.log('second part')
} else if (day <= 31){
    console.log('third part')
}  else {
    console.log('Unknown value')
}
