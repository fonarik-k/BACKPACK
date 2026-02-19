let products=[
    {
        img: './images/first.png' ,
        position: 'Featured',
        name:'Nairo Series®'
    },
    {
        img: './images/second.png' ,
        position: 'New',
        name:'Kensho Series®'
    },
    {
        img: './images/third.png' ,
        position: 'Handmade',
        name:'Atarashi Series®'
    }
]
let container = document.querySelector('.cards')
products.forEach((product) => {
    container.insertAdjacentHTML('beforeend', `
      <div class="card">
        <img src="${product.img}" alt="photo">
        <p class="position">${product.position}</p>
        <p class="nam">${product.name}</p>
      </div>
    `)
  })