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

const click2 = document.querySelector('#h1-font');
click2.addEventListener("click", () => heading1.style.fontSize = "10px");



//3g uzuotis
const click3 = document.querySelector('#h1-color-back');
click3.addEventListener("click", () => heading1.style.color = "green");

const click4 = document.querySelector('#h1-font-back');
click4.addEventListener("click", () => heading1.style.fontSize = null);