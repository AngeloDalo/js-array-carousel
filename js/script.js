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

const items2 = [
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
const containerRight = document.querySelector (".container-right");
for (let i=0; i<items.length; i++) {
    let classElement = "";
    let classElementFilter ="";
    if (i==0) {
        classElement = "active first";
        classElementFilter = "no-filter"
    } else {
        if (i==items.length-1) {
            classElement = "last";
        }
    }

    const content = `
    <div class="container-img ${classElement}">
        <img src="${items[i]}" alt="">
        <div class ="scritte">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    `;

    const contentFilter = `<img class="${classElementFilter}" src="${items[i]}" alt="">`;
    containerLeft.innerHTML += content;
    containerRight.innerHTML += contentFilter;
}

const nextButton = document.querySelector('.botton-down');
const prevButton = document.querySelector('.botton-up');

nextButton.addEventListener('click', function () {
    const imageActive = document.querySelector('.active');
    const filterActive = document.querySelector('.no-filter');
    let classes = imageActive.classList;
    let last=false;
    for (i=0; i<=classes.length; i++) {
        if (classes[i] == 'last') {
            last = true;
        }
    }

    if (last == false) {
        imageActive.classList.remove("active");
        filterActive.classList.remove("no-filter");
        const imgNext = imageActive.nextElementSibling;
        const filterNext = filterActive.nextElementSibling;
        imgNext.classList.add("active");
        filterNext.classList.add("no-filter");
    } 
});

prevButton.addEventListener('click', function () {
    const filterActive = document.querySelector('.no-filter');
    const imageActive = document.querySelector('.active');
    let classes = imageActive.classList;
    let last=false;
    for (i=0; i<=classes.length; i++) {
        if (classes[i] == 'first') {
            last = true;
        }
    }

    if (last == false) {
        imageActive.classList.remove("active");
        filterActive.classList.remove("no-filter");
        const imgPrev = imageActive.previousElementSibling;
        const filterPrev = filterActive.previousElementSibling;
        imgPrev.classList.add("active");
        filterPrev.classList.add("no-filter");
    } 
});

