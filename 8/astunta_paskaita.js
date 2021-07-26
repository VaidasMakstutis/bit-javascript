//Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3?

let skaiciuKiekis = 0;

for (let i = 5; i <= 100; i++) {
    if (i % 3 === 0) {
        skaiciuKiekis++;
    }
}
console.log('Skaiciu kiekis, kurie dalijasi is 3: ' + skaiciuKiekis);



//Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3 arba iš 5?


let skaiciuKiekis2 = 0;

for (let i = 5; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        skaiciuKiekis2++;
    }
}

console.log('Skaiciu kiekis, kurie dalijasi is 3 arba 5: ' + skaiciuKiekis2);




//Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3 ir iš 5?

let skaiciuKiekis3 = 0;

for (let i = 5; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        skaiciuKiekis3++;
    }
}

console.log('Skaiciu kiekis, kurie dalijasi is 3 ir 5: ' + skaiciuKiekis3);


console.log('----------------------IF-ELSE----------------');


let darzove = 'kopustas';
// let darzove = 'bulve';
// let darzove = 'pomidoras';

if (darzove == 'kopustas') {
    console.log('Verdam kopustiene');
}
else if (darzove == 'bulve') {
    console.log('Kepam bulvinius blynus');
}
else if (darzove == 'pomidoras') {
    console.log('Darom kecupa');
}
else {
    console.log('Nieko nedarom');
}


console.log('----------------SWITCH SU BREAK-----------');  //vykdo visa koda nuo 
//pirmos surastos reiksmes jeigu neirasyta break


switch (darzove) {
    case 'kopustas':
        console.log('Verdam kopustiene');
        break;
    case 'bulve':
        console.log('Kepam bulvinius blynus');
        break;
    case 'pomidoras':
        console.log('Darom kecupa');
        break;
    default:
        console.log('Nieko nedarom');
}

function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log('-----------------SWITCH-REAL-SAMPLE--------');

//S, M, L, XL pastomatu skyreliu dydziai

let siuntinioDydis = 'S';
switch (siuntinioDydis) {
    case 'S':
        console.log('Ar yra laisvų S');
        if (rand(0, 3)) {
            console.log('Vietų nėra');
        } else {
            break;
        }
    case 'M':
        console.log('Ar yra laisvų  M');
        if (rand(0, 3)) {
            console.log('Vietų nėra');
        } else {
            break;
        }

    case 'L':
        console.log('Ar yra laisvų  L');
        if (rand(0, 3)) {
            console.log('Vietų nėra');
        } else {
            break;
        }

    default:
        console.log('Ar yra laisvų  XL');
        if (rand(0, 3)) {
            console.log('Visai visai vietų nėra');
        }
}


console.log('---------------SWITCH su BREAK-------------');


//Skaiciai nuo 77 iki 777. Reikia rasti pirmaji skaiciu, kuris dalinasi is 23 be liekanos

for (let i = 77; i <= 777; i++) {
    if (i % 23 === 0) {
        console.log('Pirmasis skaicius, kuris dalinasi is 23 be liekanos: ', i);
        break;
    }
}

console.log('----------FOR su BRAKE ir LABEL------------');

// Nuo 77 iki 777 reikia surasti pirmą skaičių kuris dalinasi iš 23 be liekanos

bigCycle: for (let i = 1; i <= 3; i++) {

    for (let i = 77; i <= 777; i++) {
        if (i % 23 === 0) {
            console.log(i);
            break bigCycle;
        }
    }
}


console.log('----------------BREAK IN WHILE-------------');

//Nevartotinas pavyzdys, bet aiskus

let counter = 0;
while (true) {
    console.log(counter);
    counter++;
    if (counter >= 10) {
        break;
    }
}

console.log('----------------------DO WHILE------------');
//Dauguma break galima pakeisti i while

let skaicius = 77;
do {

} while (++skaicius % 23 !== 0);

console.log(skaicius);


console.log('-------------------------------------------');


//Rasti trečią skaičių pradedant 5 iki 100 kuris be liekanos dalijasi iš 3?


let skaitiklis3 = 0;

for (let j = 5; j <= 100; j++) {

    if (j % 3 == 0) {
        skaitiklis3++;
    }
    if (skaitiklis3 == 3) {
        console.log(j);
        break;
    }
}


//su DO-WHILE


let sk = 4;
let c = 3;

do {

} while (++sk % 3 || --c);
console.log(sk);