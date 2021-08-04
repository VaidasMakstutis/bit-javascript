const array1 = ['a', 'b', 'c'];

array1.forEach((blabla, i, trecias) => {   //parametras nr.3 ('trecias') paima masyva
    console.log(blabla, i, trecias);
});

console.log('----------------------------------------------');

const array2 = [3, 6, 10];
let suma = 0;
let iteracijuKiekis = 0;

array2.forEach(k => {
    iteracijuKiekis++;
    suma += k;
});

console.log('Suma: ', suma, 'iteraciju kiekis: ', iteracijuKiekis);

console.log('----------------------------------------------');

const array3 = [3, 6, 10];
let sumaSuIndeksais = 0;

array3.forEach((j, x) => {
    
    sumaSuIndeksais += j*x;
});

console.log('Reiksmiu suma * indeksų: ', sumaSuIndeksais);



console.log('----------------------------------------------');

let suma55 = 0;

[3, 6, 10].forEach((bi, i, trecias) => {
    
    if (i < trecias.length - 1) {
        suma55 += bi + trecias[i+1];
    }
});

console.log(suma55);

//0 
//3 + 6 = 9 + 0 = 9
//6 + 10 = 16 + 9 = 25
// 10 + <=> 25


console.log('----------------------------------------------');
//Objekto sukurimas
const obj = {nulis: 3, vienas: 6, du: 10};

obj.trys = 22;
obj.suma = function(a, b) {return a + b};

console.log(obj);
console.log('Vienas: ', obj.vienas);
console.log(obj.suma(5,9));


console.log('----------------------------------------------');
//Nr.1 Uzduotis
//Sukurti tuščią objektą ir jam priskirti dvi savybes savybeA ir savybeB. Abi savybės lygios skaičiui 25

const objektas1 = {};
objektas1.savybeA = 25;
objektas1.savybeB = 25;

console.log(objektas1);
console.log(objektas1.savybeA);
console.log(objektas1.savybeB);



console.log('----------------------------------------------');
//Nr.2 Uzduotis
//Objektui pridėti savybę sumaAB, kuri yra lygi savybių sumai

objektas1.sumaAB = objektas1.savybeA + objektas1.savybeB;
console.log('SumaAB: ', objektas1.sumaAB);


console.log('----------------------------------------------');
//Nr.3 Uzduotis
//Objektui pridėti savybę objektasC, kuri yra lygi tuščiam objektui

objektas1.objektasC = {};
console.log(objektas1);



console.log('----------------------------------------------');
//Nr.4 Uzduotis
//Objekto savybei objektasC priskirti dvi savybes savybeA ir savybeB. Abi savybės lygios skaičiui 42

objektas1.objektasC.savybeA = 42;
objektas1.objektasC.savybeB = 42;

console.log(objektas1);


console.log('----------------------------------------------');
//Nr.5 Uzduotis
//Objekto savybei objektasC pridėti savybę sumaAB, kuri yra lygi objekto objektasC savybių savybeA ir savybeB sumai

objektas1.objektasC.sumaAB = objektas1.objektasC.savybeA + objektas1.objektasC.savybeB;
// console.log(objektas1);
console.log(objektas1.objektasC.sumaAB);



console.log('----------------------------------------------');
let suo = 'bobikas';
obj[suo] = 55;
console.log(suo);



console.log('----------------------------------------------');
//Nr.6 Uzduotis
//Objektui pridėti savybes iš masyvo: const objektoSavybes = ['bobikas', 'sarikas', 'margis']; kurios lygios 0

const objektoSavybes = ['bobikas', 'sarikas', 'margis'];
objektas6 = {};

objektoSavybes.forEach((k) => {
    objektas6[k] = 0;
});

console.log(objektas6);


//Bubble

const dukra = document.querySelector('#d');
const tevas = document.querySelector('#t');
const senelis = document.querySelector('#s');

dukra.addEventListener('click', e => {
    e.preventDefault();
    console.log('Dukrele');
});

tevas.addEventListener('click', e => {
    console.log('Tevelis');
});

senelis.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Senelis saltis');
});