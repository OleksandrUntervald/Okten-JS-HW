// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву
//


function TheLess(arr){
    let g = arr.sort((a,b) => a - b);
    return g[0]
}



console.log(TheLess([1,2,3,4,5,6,7,8]))