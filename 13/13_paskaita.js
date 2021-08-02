function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log('-------------Rusiavimas pagal bubble-------------');

let masyvas = [3, 2, 0, 4, 1];

console.log(masyvas.slice());

function lygintuvas(a, b) {
    console.log('a: ', a, 'b: ', b);
    return a - b;  //nuo min iki max
    // return b - a;  //nuo max iki min
}

masyvas.sort(lygintuvas);
console.log(masyvas.slice());



console.log('-------------------------------------------------');

let raidziuMasyvas = ['aa', 'uufgf', 'ff', 'ddd', 'v'];

console.log('Pradinis masyvas: ', raidziuMasyvas.slice());

function lygintuvasRaidems(a, b) {
    // console.log('a: ', a, 'b: ', b);
    
    if (a.length > b.length) {
        return -1;
    }
    else if (a.length < b.length) {
        return 1;
    }
    else {
        return 0;
    }
}

raidziuMasyvas.sort(lygintuvasRaidems);
console.log('Surusiuotas masyvas: ', raidziuMasyvas.slice());


console.log('-------------------------------------------------');

let ezerai = [

    [2, 'Didelis'],

    [8, 'Ilgas'],

    [11, 'Trumpas'],

    [1, 'Apvalus'],

    [7, 'Gilus']

]

console.log('Pradinis masyvas: ', ezerai.slice());

function lygintuvasEzerams(a, b) {
    
    if (a[1] > b[1]) {
        return 1;
    }
    else if (a[1] < b[1]) {
        return -1;
    }
    else {
        return 0;
    }
}

ezerai.sort(lygintuvasEzerams);
console.log('Surusiuotas masyvas: ', ezerai.slice());



console.log('-------------------------------------------------');

function lygintuvasEzeramsPagalAbc(a, b) {
    return a[0] - b[0];
}


ezerai.sort(lygintuvasEzeramsPagalAbc);
console.log('Surusiuotas masyvas: ', ezerai.slice());



console.log('-------------------------------------------------');

function lygintuvasEzeramsPagalIlgi(a, b) {
    
    if (a[1].length > b[1].length) {
        return -1;
    }
    else if (a[1].length < b[1].length) {
        return 1;
    }
    else {
        return 0;
    }
}

ezerai.sort(lygintuvasEzeramsPagalIlgi);
console.log('Surusiuotas masyvas: ', ezerai.slice());


console.log('------------------------------------------------');

// console.log(document);

let newH1 = document.createElement("h1");    //1. Sukuriame elementa

let labasVakaras = document.createTextNode("Labas vakaras!");   //2. Sukuriame text noda
newH1.appendChild(labasVakaras);   //3. Text node idedame i html elementa

let container = document.querySelector(".container");  //4. Surandame html'e tevini taga, i kuri desime elementa
container.appendChild(newH1);   //5. I teva idedame sukurta elementa

// container.insertBefore(newH1, oldH1);

console.log('--------------10 div----------------------------');


for (let i = 0; i < 10; i++) {
    let newDiv = document.createElement("div");
    let hello = document.createTextNode('Hello');
    newDiv.appendChild(hello);
    let container = document.querySelector(".container"); 
    container.appendChild(newDiv);
    
    if (i % 3 == 0 ) {
        newDiv.style.color = 'green';
    }
}

container.style.backgroundColor = "pink";
container.style.border = "3px solid red";
newH1.style.color = "yellow";

let h1 = document.querySelector(".old");
h1.classList.add('bla');   //class rasoma be tasko
// h1.classList.remove('old');   //class rasoma be tasko


let lis = document.querySelectorAll("li");

for (let k = 0; k < lis.length; k++) {
    if (k % 3 === 0 ) {
        lis[k].style.color = "yellow";
    }
}