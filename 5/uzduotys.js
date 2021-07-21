function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//1 Uzduotis

//A dalis

let X = rand(5, 25);
let Y = rand(5, 25);
let Z = rand(5, 25);
let amount = X + Y + Z;

console.log('X:', X, 'Y:', Y, 'Z:', Z);
console.log('Suma:' + amount);

//B dalis
let str = String(X) + String(Y) + String(Z);
//let str = '' + X + Y + Z;
console.log('Skaiciu string:', str);


//C dalis
let strSuTarp = String(X) + ' ' + String(Y) + ' ' + String(Z);
console.log('Skaiciu string su tarpais:', strSuTarp);

//D dalis
let strSuTarpPlusAmount = String(X) + ' ' + String(Y) + ' ' + String(Z) + ' ' + amount;
console.log('Skaiciu string su tarpais ir suma:', strSuTarpPlusAmount);



//2 Uzduotis

let D = rand(5, 10);
console.log('D:', D);


//3 Uzduotis
let pasveikinimas = 'labas';
for (let ciklas = 0; ciklas < 5; ciklas++){
    console.log('Ciklas:', pasveikinimas);
}

//4 Uzduotis
let pasveikinimas2 = D;
for (let ciklas2 = 0; ciklas2 < 7; ciklas2++){
    console.log('Ciklas:', pasveikinimas2);
}

//5 Uzduotis
let pasveikinimas3 = D;
for (let ciklas3 = 0; ciklas3 < D; ciklas3++){
    console.log('Ciklas tiek kartu kiek lygu D:', pasveikinimas3);
}

//6 Uzduotis
let pasveikinimas4 = D;

    if (pasveikinimas4 > 7) {
        for (let ciklas4 = 0; ciklas4 < D; ciklas4++) {
        console.log('Ciklas tiek kartu kiek lygu D jeigu didesnis uz 7:', pasveikinimas4);
        }
    }
    else {
        console.log('Rezultatas mazesnis uz 7');
    }


//7A Uzduotis
let kintUzCikloRibu;

for (let A = 0; A < 5; A++) {
    console.log('Kintamasis uz ciklo ribu:', kintUzCikloRibu = rand(10, 20));
}

//7B Uzduotis
let generuojamuReiksmiuSuma = 0;

for (let B = 0; B < 5; B++) {
    generuojamuReiksmiuSuma += rand(10, 20);
    console.log('Generuojamu reiksmiu suma cikle:', generuojamuReiksmiuSuma);
}

//7C Uzduotis
let suma7C ='';

for (let C = 0; C < 5; C++) {
    suma7C += rand(10, 20) + ' ';
}
console.log('Generuojamu reiksmiu suma stringe su tarpais:', suma7C);


//7D Uzduotis

let kint7D ='';
let suma7D = 0;

for (let D = 0; D < 5; D++) {
    let randomas = rand(10, 20);
    kint7D += randomas + ' ';
    suma7D += randomas;
}
kint7D += suma7D;
console.log('Generuojamu reiksmiu suma stringe su tarpais ir suma:', kint7D);


//8A Uzduotis

let kint8A = 0;

do {
(i = rand(10, 25));
} while (i < 12);

kint8A = i;
console.log('--Kint8A--', kint8A);


//8B Uzduotis