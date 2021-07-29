function rand(min, max) {

    min = Math.ceil(min);



    max = Math.floor(max);



    return Math.floor(Math.random() * (max - min + 1)) + min;

}


let a1 = ['atsuktuvas', 'pjuklas', 'plaktukas', 'reples'];

console.log(a1);   //atspausdinamas visas masyvas
console.log(a1[1]);  //atspausdinamas elementas nr.1


a1[2] = 'kirvis';  //naujo elemento irasymas i masyva (vietoj elemento nr.2, t.y. plaktuko)
console.log(a1);


a1.push('kaltas');  //irasome nauja reiksme su metodu push i masyvo pabaiga. Nesukuriamos tuscios eilutes
console.log(a1.slice());   //metodas slice padaro masyvo kopija, 
//tai atskira nuoroda, kuri nepriklausoma nuo rezultatu eigoje


a1.unshift('graztas');  //irasome nauja elementa su metodu unshift i masyvo pradzia
console.log(a1);


a1.shift();  //panaikina pirmaji elementa is masyvo
console.log(a1);


a1.pop();  //panaikina paskutiniji elementa is masyvo
console.log(a1);


a1[50] = 'kujis';  //irasome nauja elementa i masyvo pabaiga, bet tame tarp sukuriamos 45 tuscios eilutes
console.log(a1);


console.log('-------------------Uzduotis nr.1--------------');

let a2 = ['atsuktuvas', 'pjūklas', 'plaktukas', 'replės'];

for (let i = 0; i < a2.length; i++) {
    console.log(a2[i]);
}


console.log('-------------------Uzduotis nr.2--------------');

//Sukurti masyvą, kurio ilgis 22 ir kurio reikšmės atsitiktiniai skaičiai nuo 5 iki 15

let a3 = [];

for (j = 0; j < 22; j++) {
    a3.push(rand(5, 15));
}

console.log(a3);



console.log('--------Uzduotis nr.3 su nelyginiais sk-------');

let a4 = [];

while (a4.length < 22) {
    let kint = rand(5, 15);
    if (kint % 2 == 1) {
        a4.push(kint);
    }
}

console.log('Masyvas su nelyginiais skaiciais: ', a4);


let d1 = 5;
let d2 = d1;    //priskyrimas pagal reiksme
console.log(d1, d2);


let m1 = [77, 99];
let m2 = m1;    //priskyrimas pagal nuoroda
let m3 = m2.slice();    //priskyrimas pagal nuoroda

m1.push(11);
m2.push(55);
m2.push('kate');

console.log('m1: ', m1, 'm2: ', m2, 'm3: ', m3);


console.log('---------------1 Uzduotis---------------');

let a5 = [];
let ilgis = rand(10, 30);

for (let k = 0; k < ilgis; k++) {
    a5.push(rand(0, 10));
}
console.log('Pinigine: ', a5.slice());



console.log('---------------2 Uzduotis---------------');

a5 = [];
let amount = 0;

for (let n = 0; n < ilgis; n++) {
    a5.push(rand(0, 10));
    amount += a5[n];
}
console.log('Pinigine: ', a5.slice());
console.log('Pinigines suma: ', amount);



console.log('---------------3 Uzduotis---------------');

a5 = [];
let amountPopieriniu = 0;

for (let h = 0; h < ilgis; h++) {
    a5.push(rand(0, 10));
    if (a5[h] > 2) {
        amountPopieriniu += a5[h];
    }
}
console.log('Pinigine: ', a5.slice());
console.log('Popieriniu pinigu suma: ', amountPopieriniu);


console.log('---------------4 Uzduotis---------------');

a5 = [];

for (let z = 0; z < ilgis; z++) {
    a5.push(rand(0, 10));
    if (a5[z] <= 2) {
        a5[z] = 0;
    }
}
console.log('Pinigine: ', a5.slice());



console.log('---------------5 Uzduotis---------------');

a5 = [];

for (let v = 0; v < ilgis; v++) {
    a5.push(rand(0, 10));
}

let maxReiksme = 0;

for (let v = 0; v < a5.length; v++) {
    
    if (maxReiksme < a5[v]) {
        maxReiksme = a5[v];
    }
}

let counterMax = 0;

for (let v = 0; v < a5.length; v++) {
    if (maxReiksme == a5[v]) {
        counterMax++;
    }
}

console.log('Pinigine: ', a5.slice());
console.log('Max reiksmiu kiekis: ', counterMax, maxReiksme);