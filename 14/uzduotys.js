//1a Uzduotis
const heading1 = document.querySelector("h1");
heading1.style.color = "green";



//1b Uzduotis
document.querySelector("i").className = "small";



//1c Uzduotis
heading1.classList.remove("main");



//1d Uzduotis
const headingFirstMain = document.querySelector("h1 + h2");
headingFirstMain.classList.add('first');
headingFirstMain.classList.remove('main');



//1e Uzduotis
const span = document.querySelector("h2 > span");
span.style.color = "grey";
span.style.fontSize = "10px";


//2a Uzduotis
const allH2 = document.querySelectorAll("h2");
console.log('Viso h2 tagu yra: ', allH2.length);



//2b Uzduotis
let counter = 0;
for (let i = 0; i < allH2.length; i++) {
    if (!allH2[i].classList.contains("first")) {
        counter++;
    }
}
console.log('h2 tagai, kurie neturi klases first: ', counter);



//2c Uzduotis
const skyblue = document.querySelectorAll("h2");
for (k = 0; k < skyblue.length; k++) {
    skyblue[k].style.color = 'skyblue';
}


//2d Uzduotis
const divai = document.querySelectorAll("div.prices > h2");
divai.forEach(i => i.classList.add("price-tag"));


//2e Uzduotis
const underline = document.querySelectorAll(".new");
underline.forEach(i => i.style.textDecoration = "underline");


//2f Uzduotis
const animals = document.querySelectorAll("ul");
console.log('Gyvunu + zirafu: ', animals.length);


//2g Uzduotis
animals.forEach(i => {
    i.style.border = "4px dotted pink";
    i.style.padding = "15px 50px";
});


//2h Uzduotis
const gyvunaiNew = document.querySelectorAll("ul .new");
console.log('Gyvunai su klase new: ', gyvunaiNew.length);



//2i Uzduotis
const ats = {};   //Sukuriame objekta
document.querySelectorAll('ul').forEach(ul => {
    ats[ul.id] = ul.querySelectorAll(".new").length;
});

console.log(ats);



//3a Uzduotis
const click = document.querySelector("#h1-color");
click.addEventListener("click", () => heading1.style.color = "blue");

const click2 = document.querySelector("#h1-font");
click2.addEventListener("click", () => heading1.style.fontSize = "10px");



//3b Uzduotis

const ibold = document.querySelector("i");
// console.log(ibold);
ibold.addEventListener("click", () => ibold.style.fontWeight = "bold");



//3c Uzduotis
const prices = document.querySelector(".prices");
prices.addEventListener("click", () => {

    if (prices.style.background == "white") {
        prices.style.background = "grey"
    }
    else {
        prices.style.background = "white"
    }
});


//3d Uzduotis
const tagId = document.querySelector("#contacts");
tagId.addEventListener("click", () => tagId.style.color = "yellow");



//3e Uzduotis
const tagPadidinti = document.querySelector("#contacts u");
tagPadidinti.addEventListener("click", () => tagId.style.fontSize = "20px");



//3f Uzduotis
const tagX = document.querySelector("#contacts b");
tagX.addEventListener("click", (event) => {
    event.stopPropagation();
    tagId.style.color = null
    tagId.style.fontSize = null
});



//3g uzuotis
const click3 = document.querySelector('#h1-color-back');
click3.addEventListener("click", () => heading1.style.color = "green");

const click4 = document.querySelector('#h1-font-back');
click4.addEventListener("click", () => heading1.style.fontSize = null);



//4a Uzduotis
const newAnimals = document.querySelectorAll('.new');
newAnimals.forEach(el => {
    el.addEventListener('dblclick', (e) => {
        el.style.color = 'red';
    });
});



//4b Uzduotis
const animalsLi = document.querySelectorAll('li:not(.like-button');
animalsLi.forEach(k => {
    k.addEventListener('click', () => {
        k.style.fontSize = "130%";
    });
});


//4c Uzduotis
const animalsLike = document.querySelectorAll('.like-button').forEach(a => {
    a.addEventListener('click', () => {
        a.closest('ul').classList.add('like');
    });
});


//5a Uzduotis
let h2Senjorams = document.createElement("h2");
let h2Tekstas = document.createTextNode('Senjorai tik: 1.99 eur');
h2Senjorams.appendChild(h2Tekstas);
let tevinisElementas = document.querySelector("div.prices");
tevinisElementas.appendChild(h2Senjorams);
// console.log(h2Senjorams);
h2Senjorams.style.color = 'blue';
h2Senjorams.style.textDecoration = 'underline';



//5b Uzduotis
let h2SenjoruGrupe = document.createElement('h2');
let h2Tekstas2 = document.createTextNode('Senjorų grupė iki 10: tik 5.99 eur');
h2SenjoruGrupe.appendChild(h2Tekstas2);
let tevinisElementas2 = document.querySelector("div.prices");
tevinisElementas2.appendChild(h2SenjoruGrupe);
h2SenjoruGrupe.style.color = 'blue';
h2SenjoruGrupe.style.textDecoration = 'underline';
h2SenjoruGrupe.classList.add('new');
h2SenjoruGrupe.addEventListener('click', (e) => {
    e.stopPropagation();
    h2SenjoruGrupe.style.color = 'green';
});



//5c Uzduotis
document.querySelectorAll('ul').forEach((ul) => {
    let newLi = document.createElement("li");
    let nepatinka = document.createTextNode("NEPATINKA");
    newLi.appendChild(nepatinka);
    ul.appendChild(newLi);
    ul.insertBefore(newLi, ul.querySelector('.like-button').nextSibling);
    newLi.addEventListener('click', () => {
        ul.classList.remove('like');
    })

});



//5d Uzduotis
const html = `<legend>HEADER 3</legend>
<button id="h1-line">Pabraukti H1 tagą</button>
<button id="h1-line-off">Nepabraukti H1 tagą</button>`;

let fieldSet3 = document.createElement("fieldset");
let cont = document.querySelector("#contacts");
let body = document.querySelector("body");

body.insertBefore(fieldSet3, cont);
fieldSet3.innerHTML = html;

const pabrauktiH1 = document.querySelector('#h1-line');
pabrauktiH1.addEventListener('click', () => {
    heading1.style.textDecoration = 'underline';
});

const nepabrauktiH1 = document.querySelector('#h1-line-off');
nepabrauktiH1.addEventListener('click', () => {
    heading1.style.textDecoration = 'none';
});