function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log('-----------------------Nr.1--------------------');

let kint1 = 'labas';

for (let i = 0; i < 5; i++) {
    console.log(kint1, i);
}

console.log('-----------------------Nr.2--------------------');

for (let j = 0; j < 5; j++) {
    console.log(j);
}

console.log('-----------------------Nr.3--------------------');

for (let g = 0; g < 5; g++) {
    console.log(g * 10);
}

console.log('-----------------------Nr.4--------------------');

for (let k = 49; k < 54; k++) {
    console.log(k);
}

console.log('-----------------------Nr.5--------------------');

for (let h = 4; h >= 0; h--) {
    console.log(h);
}

console.log('-----------------------Nr.6--------------------');

for (let v = 0; v <= 8; v += 2) {
    console.log(v);
}

console.log('-----------------------Nr.7--------------------');
//console.log’e, naudojant ciklą penkiose eilutėse atspausdinti atsitiktinius skaičius nuo 0 iki 10 (
//vienas skaičius vienoje eilutėje);

for (let k = 0; k < 5; k++) {
    console.log(rand(0, 10));
}

console.log('-----------------------Nr.8--------------------');
//console.log’e, naudojant ciklą atspausdinti atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Paskutinis atspausdintas skaičius turi būti 5;

let kint8;

do {
    kint8 = rand(0, 10);
    console.log(kint8);

} while (kint8 != 5);


console.log('-----------------------Nr.9--------------------');

//console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 
//(vienas skaičius vienoje eilutėje). 
//Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

let kint9;
let suma9 = 0;

do {
    kint9 = rand(0, 10);
    suma9 += kint9;
} while (suma9 < 100);

console.log(suma9);

console.log('-----------------------Nr.10--------------------');

//console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
//(vienas skaičius vienoje eilutėje). 
//Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.

let kint10;
let counter = 0;

do {
    kint10 = rand(0, 10);
    console.log(kint10);
    counter++;
} while (kint10 != 5 && kint10 != 7);

console.log('Paskutinis skaicius: ', kint10, 'ciklu skaicius: ', counter);


console.log('-----------------------Nr.11--------------------');
//console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 
//(vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, 
//bet ne anksčiau nei po 11 ciklų;

let kint11;
let suma11 = 0;
let counter11 = 0;

do {
    kint11 = rand(0, 10);
    console.log(kint11);
    counter11++;
    suma11 += kint11;
} while (suma11 <= 20 || counter11 < 11);

console.log('Paskutinis skaicius: ', kint11, 'skaiciu suma: ', suma11, 'ciklu skaicius: ', counter11);



console.log('-----------------------Nr.12--------------------');
//console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
//(vienas skaičius vienoje eilutėje). 
//Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai

let kint12;
let counter12 = 0;

do {
    kint12 = rand(0, 10);
    console.log(kint12);
    if (kint12 % 2 == 1) {
        counter12++;
    }
} while (counter12 != 3);

console.log('Skaitiklis: ', counter12);


console.log('-----------------------Nr.13--------------------');
//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
//(abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

let kint13A;
let kint13B;

do {
    kint13A = rand(0, 10);
    kint13B = rand(0, 10);
    console.log('Pirmas sk: ', kint13A, 'Antras sk: ', kint13B);
} while (kint13A != kint13B);

console.log('-----------------------Nr.14--------------------');
//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
//(abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. 
//Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;


let kint14A;
let kint14B;
let suma14A = 0;
let suma14B = 0;

do {
    kint14A = rand(0, 10);
    kint14B = rand(0, 10);
    console.log('Pirmas sk: ', kint14A, 'Antras sk: ', kint14B);
    suma14A += kint14A;
    suma14B += kint14B;
} while (suma14A <= 100 || suma14B <= 100);

console.log('Pirma suma: ', suma14A, 'Antra suma: ', suma14B);


console.log('-----------------------Nr.15--------------------');
//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
//(abu skaičiai vienoje eilutėje). 
//Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.

let kint15A;
let kint15B;
let counter15A = 0;
let counter15B = 0;

do {
    kint15A = rand(0, 10);
    kint15B = rand(0, 10);
    console.log('Pirmas sk: ', kint15A, 'Antras sk: ', kint15B);

    if (kint15A % 2 == 1) {
        counter15A++;
    }
    if (kint15B % 2 == 1) {
        counter15B++;
    }
} while (counter15A < 3 || counter15B < 3);

console.log('Pirmas skaitiklis:', counter15A, 'Antras skaitiklis: ', counter15B);




console.log('-----------------Funkcijos nr.1-----------------');

let animal = 'Žvirblis';
let animal2 = 'Gyvate';

function raidePenkta(string) {   //Funkcijos deklaracija
    return string[5-1];  //Grazina raide nr.5
}

console.log(raidePenkta('Vilkas'));
console.log(raidePenkta(animal));
console.log(raidePenkta(animal2));



console.log('-----------------Funkcijos nr.2-----------------');

function raideKazkelinta(string, number) {  //Funkcijos deklaracija
    return string[number - 1];   //Grazina raide pagal parametra 'number', kuris nurodytas funkcijos iskvietime
}

console.log(raideKazkelinta('Vilkas', 1));
console.log(raideKazkelinta(animal, 1));
console.log(raideKazkelinta(animal2, 1));



console.log('-----------------Funkcijos nr.3-----------------');

function raidePaskutine(string) {  //Funkcijos deklaracija
    return string[string.length - 1];   //Grazina paskutine raide
}

console.log(raidePaskutine('Vilkas'));
console.log(raidePaskutine(animal));
console.log(raidePaskutine(animal2));