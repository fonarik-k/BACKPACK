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

  
  document.addEventListener("DOMContentLoaded", () => {

    const targetDate = new Date("February 24, 2026 14:45:45");
    const timerEl = document.querySelector(".timer");

    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            timerEl.textContent = "Time is over!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        timerEl.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateTimer(); // сразу показать
    const interval = setInterval(updateTimer, 1000);

});
