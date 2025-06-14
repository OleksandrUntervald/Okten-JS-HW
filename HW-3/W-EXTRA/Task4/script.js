// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
let arr = [
    {
        name: "book1",
        pages: 11,
        authors: ['name1','name2','name3'],
        category: ['lure','comedy']
    },
    {
        name: "book2",
        pages: 21,
        authors:['name1','name3'],
        category:['lure','comedy','asdsa']
    },
    {
        name: "book3",
        pages: 33,
        authors:['name1'],
        category: ['lure','comedy','adasdas','sadada','dasdasd']
    }
]
// – знайти найбільшу книжку.

let arr2 = JSON.parse(JSON.stringify(arr))
let g = arr2.sort((a,b) => b.pages - a.pages );
let bigegstPage = g[0];
console.log(bigegstPage);

// – знайти книжку/ки з найбільшою кількістю жанрів
let arr3 = JSON.parse(JSON.stringify(arr))

let b = arr3.sort((a,b) => a.category.length - b.category.length );
let bigegstCategory = b[0];
// – знайти книжку/ки з найдовшою назвою
let a = arr.sort((a,b) => b.name.length - a.name.length );
let bigegstName = a[0];

// – знайти книжку/ки, які писали 2 автори

for (let i =0; i < arr.length; i++) {
    if (arr[i].authors.length === 2){
        console.log(arr[i]);
    }
}

// – знайти книжку/ки, які писав 1 автор


for (let i =0; i < arr.length; i++) {
    if (arr[i].authors.length === 1){
        console.log(arr[i]);
    }
}