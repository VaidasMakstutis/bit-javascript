function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let a = rand(2, 10);

let b = rand(2, 10);

let c = rand(2, 10);


// Surasti ir i console.log išvesti dviejų mažesnių kintamųjų sumą

console.log('a, b, c: ' + a, b, c);

if (a >= b && a >= c) {
    console.log("Suma: ", b + c);
}

else if (b >= c) {
    console.log("Suma: ", a + c);
}

else {
    console.log("Suma: ", a + b);
}




//1 uzduotis

let egzaminoRezultatas = rand(1, 10);

// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4
console.log('Egzamino rezultatas: ' + egzaminoRezultatas);
if (egzaminoRezultatas >= 4) {
    console.log('Egzaminas islaikytas');
}
else {
    console.log('Egzaminas neislaikytas!');
}



//2 uzduotis

let eksperimentoRezultatas = rand(1, 4);

// Isvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
console.log('Eksperimento rezultatas: ' + eksperimentoRezultatas);
if (eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4) {
    console.log('Eksperimentas pavyko');
}
else {
    console.log('Eksperimentas nepavyko!');
}


//3 uzduotis

let automobilioGreitis = rand(40, 125);
let bauda = 0;

// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5
console.log('Automobilio greitis: ' + automobilioGreitis);
if (automobilioGreitis > 60) {
    bauda = automobilioGreitis * 5;
    console.log('Bauda: ' + bauda);
}
else {
    console.log('Greitis nevirsytas! Baudos nera!');
}


//4 uzduotis

let eilesNumeris = rand(1, 30);

//Išvesti eilės numerį ir sprendimą ar tai lygine ar nelygine eilė
console.log('Eiles nr.: ' + eilesNumeris);
if (eilesNumeris % 2 == 0) {
    console.log('Eiles nr. yra lyginis skaicius');
}
else {
    console.log('Eiles nr. yra nelyginis skaicius');
}


//5 uzduotis

let raideABC = rand(1, 3);
console.log(raideABC);
if (raideABC == 1) {
    console.log('A');
}
else if (raideABC == 2) {
    console.log('B');
}
else {
    console.log('C');
}

//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. 
//Kintamąjį išvesti į konsolę


//6 uzduotis

let pirmas = rand(0, 2);
let antras = rand(0, 2);
let sandauga = pirmas * antras;
let suma = pirmas + antras;


// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma
console.log('Sugeneruoti skaiciai: ' + pirmas + ' ' + antras);
if (sandauga > suma) {
    console.log('Skaiciu sandauga: ' + sandauga);
}
else if (sandauga == suma) {
    console.log('Sandauga = sumai');
}
else {
    console.log('Skaiciu suma: ' + suma);
}


//7 uzduotis

let asilai = rand(0, 2);
let karves = rand(0, 2);

// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas 
//arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
console.log('Asilai: ' + asilai, 'Karves: ' + karves);
if (karves >= 1 || asilai >= 1) {
    console.log('Gyvuliu yra: ');
}
else {
    console.log('Gyvuliu nera!');
}


//8 uzduotis

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma 
//didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju
console.log('Dalyvis 1: ' + dalyvis1);
console.log('Dalyvis 2: ' + dalyvis2);
if (dalyvis1 + dalyvis2 > 6 || dalyvis1 == dalyvis2) {
    console.log('Dalyviu skaiciu suma: ' + 'Laimejo');
}
else {
    console.log('Pralaimejo!');
}


//9 uzduotis

let daug = rand(1000000, 9999999);
let daliklis = 0;

// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. 
//Rezultatą išvesti.
console.log('Sugeneruotas skaicius: ' + daug);
if (daug % 5 == 0) {
    daliklis++;
    if (daug % 10 == 0) {
        daliklis++;
        if (daug % 33 == 0) {
            daliklis++;
        }
    }
    console.log('Dalikliai yra: ' + daliklis);
}
else {
    console.log('Dalikliu nera!');
}


//10 uzduotis

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';

let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';

// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu

let s;
s = rand(1, 3);
if (s == 1) {
    as = 'akmuo';
} else if (s == 2) {
    as = 'zirkles'
} else {
    as = 'popierius'
}
s = rand(1, 3);
if (s == 1) {
    tu = 'akmuo';
} else if (s == 2) {
    tu = 'zirkles'
} else {
    tu = 'popierius'
}

console.log('as: ' + as, 'tu: ' + tu);