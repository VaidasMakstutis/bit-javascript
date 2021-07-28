let nu = 5.26;

console.log(Math.round(nu));  //Apvalinimas
console.log(Math.floor(nu));  //Apvalinimas i mazesne puse
console.log(Math.ceil(nu));   //Apvalinimas i didesne puse

let nu2 = 5.54369;

console.log(Math.round(nu2 * 100) / 100);  //Apvalinimas, kad butu 2 skaiciai po kablelio

console.log((0.1 + 0.2).toFixed(2));  //Spausdinam i console su 2 skaiciais po kablelio su toFixed

console.log(parseInt('100.55px'));  //si funkcija pavercia stringa i sveikaji skaiciu

console.log(parseFloat('100.55px'));  //si funkcija pavercia stringa i skaiciu su reiksmemis po kablelio


function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log(Math.max(0, 1, 10, -6));    //Isrenka max skaiciu

console.log(Math.min(0, 1, 10, -6));    //Isrenka max skaiciu



console.log('-------------------Funkcijos----------------');

let uoga = 'Braske';

function sayHello(t2) {   //Funkcijos deklaravimas, t2 yra funkcijos parametras
    let hello = 'Hello'   //veikia tik funkcijos viduje (tarp skliaustu), kintamasis nera globalus
    console.log(`${t2}, ${uoga}`);
}

sayHello(uoga);  //Funkcijos iskvietimas su argumentu
sayHello('Bananai');  //Funkcijos iskvietimas su argumentu



//Pavyzdys su funkcija

function zoo(animal = 'neaisku kas gyvena') {
    console.log(`Zoo sode gyvena: ${animal}`);
}

zoo('varle');   //funkcijos iskvietimas
zoo('liutas');  //funkcijos iskvietimas
zoo('papuga');  //funkcijos iskvietimas
zoo();   //paima argumento default reiksme is funkcijos deklaracijos



console.log('--------Uzduotis su funkcija ir ciklu for---');

function labas() {   //Funkcijos deklaravimas
    for (let i = 1; i <= 20; i++) {
        console.log('Labas vakaras!', i);
    }
}

labas();  //Funkcijos iskvietimas

console.log('-------Uzduotis nr. 2 su funkcija-----------');


//Padarykite funkcija skaicius kuri console.logintų skaičių perduodamą į tą funkciją kaip argumentas. 
//Paleiskite ciklą 20 kartų ir tegul funkcija skaičius atspausdina ciklo numerį


function skaiciausFunkcija(number) {
    console.log(`${number}`);
}

for (let j = 1; j <= 20; j++) {
    skaiciausFunkcija(j);
}

// Funkcija su return
function sumuokle(a, b) {
    let suma = a + b;
    return suma;
}

let kiek = sumuokle(5, 7);
console.log('Suma: ', kiek);


function zoologas(animal) {
    if (animal == 'papuga' || animal == 'varna' || animal == 'zyle') {
        return `${animal} yra paukstis`;
    }
    if (animal == 'vilkas' || animal == 'lape' || animal == 'zuikis') {
        return `${animal} yra zinduolis`;
    }
    return `${animal} yra nezinau kas`;
}

console.log(zoologas('vilkas'));
console.log(zoologas('zirafa'));
console.log(zoologas('zuikis'));


console.log('-------Uzduotis nr. 3 su funkcija----------');

//Parašyti funkciją, kuri nuspręstų ar skaičius yra porinis. 
//Pasinaudokite šia funkcija ir iš ciklo sukamo 20 kartų atspausdinkite neporinius (nelyginius) ciklo numerius


function num(sk) {
    if (sk % 2 == 1) {
        return true;
    }
}

for (let k = 1; k <= 20; k++) {
    if (num(k)) {
        console.log(`Skaicius ${k} yra nelyginis: `);
    }
}


console.log('-------Uzduotis nr. 4 su funkcija----------');


function kiekARaidziu(string) {
    let counterA = 0;

    for (let h = 0; h < string.length; h++) {
        if (string[h] == 'a') {
            counterA++;
        }
    }
    return counterA;
}



console.log('Yra a raidžių:', kiekARaidziu('Papūga'));

console.log('Yra a raidžių:', kiekARaidziu('Vilkas'));

console.log('Yra a raidžių:', kiekARaidziu('Zuikis'));



console.log('-------Uzduotis nr. 5 su funkcija----------');


function kiekRaidziu(string, raide) {
    let counter = 0;
    for (let k = 0; k < string.length; k++) {
        if (string[k].toLowerCase() == raide) {
            counter++;
        }
    }
    return counter;
}



console.log('Yra p raidžių:', kiekRaidziu('Papūga', 'p'));

console.log('Yra k raidžių:', kiekRaidziu('Vilkas', 'k'));

console.log('Yra u raidžių:', kiekRaidziu('Zuikis', 'u'));




console.log('-------Uzduotis nr. 6 su funkcija----------');

function reverseWord(word) {
    let out = '';
    for (let i = 0; i < word.length; i++) {
        out = word[i] + out;
    }
    return out;
}

console.log(reverseWord('sula')); // alus
console.log(reverseWord('sidras')); // sardis


console.log('Uzduotis nr. 7 su funkcija panaikinti balses');

//Panaikinti is zodzio Papūga balses
//Pvz: Papūga ====> P*p*g*


function beBalsiu(string) {
    let zvaigzdute = "";
    for (let j = 0; j < string.length; j++) {
        if (string[j].toLowerCase() === 'a' || string[j].toLowerCase() === 'ū' || string[j].toLowerCase() === 'e'
            || string[j].toLowerCase() === 'i' || string[j].toLowerCase() === 'u' || string[j].toLowerCase() === 'o'
            || string[j].toLowerCase() === 'y' || string[j].toLowerCase() === 'ė') {
            zvaigzdute += '*';
        }
        else {
             zvaigzdute += string[j];
         }  
    }
    return string + '---be balsiu--->' + zvaigzdute;
}

console.log(beBalsiu('Papūga'));
console.log(beBalsiu('Vilkas'));
console.log(beBalsiu('Zuikis'));
console.log(beBalsiu('Lapė'));