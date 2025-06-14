// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву
//
// використовуючи стрілочну функцію


let arrow = (arr) => {
    let c = JSON.parse(JSON.stringify(arr))
    let g = c.sort((a,b) => a - b)
    console.log(g[0])
}

arrow([1,2,3,4,5]);