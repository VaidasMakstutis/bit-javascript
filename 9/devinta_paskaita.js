let daiktas = {
    name: 'Pjuklas',  //savybe
    tipas: 'Medzio pjuklas',   //savybe
    dantuKiekis: 45,   //savybe
    pjauti: function () { console.log('dziru dziru'); }   //metodas
}

console.log('Objektas su visomis savybemis: ', daiktas);
console.log('Dantu kiekis: ', daiktas.dantuKiekis);
daiktas.pjauti();

let vardas = 'Chiappi';
let str = `Labas, ${vardas}`;
console.log(str);
console.log(typeof str);   //Atspausdinamas tipas i console
console.log(str.length);   //Atspausdinamas string ilgis

let vp = `Jonas\nJonaitis\` \u{1F60D}`;

console.log(vp);

console.log('I\\\'m the Walrus!');
console.log(`I'm the "Walrus"!`);


let zuikis = 'Zuikis puikis Ilgaausis eina namo miegot';

let grazus = 'Labas vakaras';
console.log(grazus.length);
console.log(grazus[9] + grazus[100]);

grazus[9] = 'K';
console.log(zuikis.indexOf('i', 3));
console.log(zuikis.lastIndexOf('i'), 'nuo galo');



// console.log(grazus.charAt(9) + grazus.charAt(100));


let str1 = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
let foundPos;


while ((foundPos = str1.indexOf(target, pos)) !== -1) {
    console.log(`Found at ${foundPos}`);
    pos = foundPos + target.length; // continue the search from the next position
}

console.log(zuikis.includes('puikis'), 'ar yra');
console.log(zuikis.startsWith('puikis'), 'start');
console.log(zuikis.endsWith('miegot'), 'end');

//patobulinimas - neišvedinėtų tarpų
//patobulinimas 2 - su continue


console.log(zuikis.length);

for (let i = 0; i < zuikis.length; i++) {

    if (zuikis[i] !== ' ') {
    console.log(zuikis[i]);
    }
}

console.log('------------------SU CONTINUE-------');

for (let i = 0; i < zuikis.length; i++) {
    
    if (zuikis[i] == ' ') {
    continue;
    }
    console.log(zuikis[i]);
}

console.log('------------------A raides----------');

//Suskaiciuoti visas a raides

let skaitiklisA = 0;

for (let i = 0; i < zuikis.length; i++) {
    
    if (zuikis[i] == 'a') {
    skaitiklisA++
    }
}
console.log(skaitiklisA);

console.log('------------------SLICE------------');


//Žirafa
//irafa
//rafa
//afa
//fa
//a

let zodis ='Žirafa';

for (let g = 1; g < zodis.length; g++) {
    console.log(zodis.slice(g));
}
console.log('-----------------------------------');
for (let g = 1; g < zodis.length+1; g++) {
    console.log(zodis.slice(-g));
}


console.log(zodis, 'pilnas');

console.log(zodis.slice(2), 'slice nuo 2');

console.log(zodis.slice(1, 4), 'slice nuo 1, 4');


console.log(zodis.substring(1, 4), 'substring nuo 1, 4');
console.log(zodis.substring(4, 1), 'substring nuo 4, 1');

console.log(zodis.substr(1, 4), 'substr nuo 1, 4');

console.log(zodis.substr(-5, 4), 'substr nuo -5, 4');


/*
0       0   0   0
1       1   1   1
10      2   2   2
11      3   3   3
100     4   4   4
101     5   5   5
110     6   6   6
111     7   7   7
1000    10  8   8
1001    11  9   9
1010    12  10  A
1011    13  11  B
1100    14  12  C
1101    15  13  D
1110    16  14  E
1111    17  15  F
*/


let b = 255;
console.log('Dvejetaine sistema: ', b.toString(2));
console.log('Sesioliktaine sistema: ', b.toString(16));