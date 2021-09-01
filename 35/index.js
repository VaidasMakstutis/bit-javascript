console.log('------------------------1 uzd---------------');

//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];

console.log(mas1.length);


console.log('------------------------2 uzd---------------');

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;

const mas2 = [13, '785', 92, 'labas', 522, 6984];

for (let j = 0; j < mas2.length; j++) {
    console.log(mas2[j], j);
}


console.log('------------------------3 uzd---------------');

//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)

const mas3 = [889, 52, 698, 752, 9333, 7];

for (let k = 0; k < mas3.length; k++) {
    if (mas3[k] % 2 == 0) {
        console.log(mas3[k], k);
    }
}


console.log('------------------------4 uzd---------------');

//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a

const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];

    mas4.forEach((i, index) => {
        if (i[0] === 'A' || i[0] === 'a') {
            console.log(i, index);
        }
    });




console.log('------------------------5 uzd---------------');

//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z

const str1 = 'Storas zebras, bėga nuo zuulu genties medžiotojų.';

console.log(str1.length);


console.log('------------------------6 uzd---------------');

//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį

const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);

    set1.add('Labas');
    set1.add('Ate');

console.log(set1.size, set1);



console.log('------------------------7 uzd---------------');

//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = 'Ku ku';
// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti

String.prototype.lastCharIs = function () {
    return this.valueOf() [(this.valueOf().length - 1)];
}
console.log(str2.lastCharIs());




console.log('------------------------8 uzd---------------');

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };

for (const s in obj1) {
    console.log(s, obj1[s]);
}



console.log('------------------------9 uzd---------------');

//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

class Grybas {
    type;

    constructor (type) {
        this.type = type;
    }
}

const g1 = new Grybas("Baravykas");
const g2 = new Grybas("Ūmedė");
const g3 = new Grybas("Lepšis");

console.log(g1, g2, g3);