// #Hdjws7E
// Використовуючи данні з масиву,
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class=”product-card”>
// <h3 class=”product-title”>TITLE. Price – PRICE</h3>
// <img src=”IMAGE” alt=”” class=”product-image”>
// </div>

// Замість TITLE PRICE IMAGE – підставити відповідні поля з об’єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    }
];


for (let i = 0; i < products.length; i++){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let img = document.createElement('img');

    document.body.appendChild(div);
    div.className='product-card';
    h3.className='product-title';
    img.className='product-image';
    img.src=`${products[i].image}`;
    div.appendChild(h3);
    div.appendChild(img);
    h3.innerText=`${products[i].title}. Price – ${products[i].price}`
    img.style.maxWidth='150px';
    img.style.height='150px'

}

