/**
 * MILESTONE 1: markup statico: immagine e thumbnails
 * MILESTONE 2: rimuovere markup statico e inserire elementi dinamicamente
 * MILESTONE 3: uso click freccie
 * BONUS: ciclo infinito
 */

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const containerLeft = document.querySelector (".container-left");
const containerImg = document.querySelectorAll (".container-img");
containerImg[0].classList.add ("active");
containerImg[title.length-1].classList.add ("last");

for (i=0 ; i<=title.length-1; i++) {
    let image = `<img src="${items[i]}" alt="">`;
    containerImg[i].innerHTML += image;
}
