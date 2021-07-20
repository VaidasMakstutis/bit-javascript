function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let salyga = rand(1, 3);
let k = 'krokodilas';
let z = 'zebras';
let d = 'dramblys';
let kazkasPriskirtaIf;

let kazkasPriskirta = (salyga == 1) ? k : ((salyga == 2) ? z : d);
console.log(kazkasPriskirta);

if (salyga == 1) {
    kazkasPriskirtaIf = k;
}
else if (salyga == 2) {
    kazkasPriskirtaIf = z;
}
else {
    kazkasPriskirtaIf = d;
}

console.log(kazkasPriskirtaIf);


let salyga2 = rand(1, 5);

let k1 = 'krokodilas';
let z1 = 'zebras';
let d1 = 'dramblys';
let r1 = 'raganosis';
let b1 = 'babuinas';

let kazkasPriskirtaIf2;
let kazkasPriskirta2 = (salyga2 == 1 || salyga2 == 4 || salyga2 == 5) ?
    ((salyga2 == 1) ? k1 : ((salyga2 == 4) ? r1 : b1)) : ((salyga2 == 2) ? z1 : d1);

if (salyga2 == 1) {
    kazkasPriskirtaIf2 = k1;
} else if (salyga2 == 2) {
    kazkasPriskirtaIf2 = z1;
} else if (salyga2 == 4) {
    kazkasPriskirtaIf2 = r1;
} else if (salyga2 == 5) {
    kazkasPriskirtaIf2 = b1;
} else {
    kazkasPriskirtaIf2 = d1;
}


console.log(kazkasPriskirta2, kazkasPriskirtaIf2);

let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);

console.log(a1, a2, a3, a4);

let _0 = 0;
let _1 = 0;
let _2 = 0;

(a1 == 2) ? _2++ : ((a1 == 1) ? _1++ : _0++);
(a2 == 2) ? _2++ : ((a2 == 1) ? _1++ : _0++);
(a3 == 2) ? _2++ : ((a3 == 1) ? _1++ : _0++);
(a4 == 2) ? _2++ : ((a4 == 1) ? _1++ : _0++);

console.log(_0, _1, _2);


//1 uzduotis us ?

let egzoRez = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

console.log(egzoRez);
(egzoRez >= 4) ? console.log('Egzaminas islaikytas') : console.log('Egzaminas neislaikytas!');

let rezultatas = (egzoRez >= 4) ? 'Egzaminas islaikytas' :  'Egzaminas neislaikytas!';
console.log(rezultatas);



//8 uzduotis su ?

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma 
//didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
let suma = dalyvis1 + dalyvis2;

console.log('Dalyvis1: ' + dalyvis1, 'Dalyvis2: ' + dalyvis2);
let result = (suma > 6 || dalyvis1 == dalyvis2) ? 'Laimėjo' : 'Pralaimejo';
console.log(result);

console.log('------------------------------------------');

//Grieztos lygybes ir nelygybes

console.log(1 == 1); // Galima naudoti kai salygoje yra to pacio tipo lyginamieji
console.log(1 =='1');

console.log(1 === 1);
console.log(1 ==='1');  //Tikrinama ar skaicius lygu stringui, atsizvelgiama i tipa

console.log(1 == true); // boolean konvertuojamas i skaiciu 1
console.log(1 === true); // skaicius nelygu boolean'ui pagal griezta lygybe


//Let ir var skirtumai:

//Let matomas tik tam local bloke arba jis turi buti uzdeklaruotas globaliai pries visus blokus. 
//Negalima deklaruoti let du kartus
//Var matomas globaliai visuose blokuose. Jeigu padeklaruojame keliose vietose, 
//tai imama paskutine reiksme


let box1 = 'A';

let box4;

// let box1 = 'A';

if (2 > 1) {

    let box1 = 'B';
    var box3 = 'ZZ';
    var box3 = 'XX';
    if (2 > 1) {


        box4 = 88;
        let box2 = 'C';
        let box1 = 'A';
        console.log('if', box1);
        console.log('if box2', box2);
        console.log('if box2', box2);

    }

    // console.log('box2', box2);

}

console.log(box3);
