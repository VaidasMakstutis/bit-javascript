function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}


let paspaustoMygtukoNumeris = rand(1, 3);

console.log('Mygtuko numeris: ', paspaustoMygtukoNumeris);

if (paspaustoMygtukoNumeris == 1) {
    console.log('Pomidoras');
}
else if (paspaustoMygtukoNumeris == 2) {
    console.log('Agrastai');
}
else {
    console.log('Kriause');
}


let uzlenktuPirstu = 0;

let kiekPrabegsAsilu = rand(1, 30);

for (i = 0; i < kiekPrabegsAsilu; i++) {
    console.log('Prabego asilas');
    uzlenktuPirstu++;
}
console.log('Viso prabego asilu: ', uzlenktuPirstu);



let kiekIpiltaSriubos = rand(200, 300);
let saukstuSkaitiklis = 0;

do {
    let saukstuPasemta = rand(15, 19); //kiekis ml
    if (saukstuPasemta > kiekIpiltaSriubos) {  //neleidziame pasemti daugiau nei yra like
        saukstuPasemta = kiekIpiltaSriubos;
    }

    kiekIpiltaSriubos = kiekIpiltaSriubos - saukstuPasemta;
    saukstuSkaitiklis++;

} while (kiekIpiltaSriubos > 0)  //inversija

console.log('Viso saukstu buvo: ', saukstuSkaitiklis);
console.log('Sriubos liko: ', kiekIpiltaSriubos);



let steikas = rand(350, 450);  //kiekis g
let sakuciuSkaitiklis = 0;
let kramtymuSkaitiklis = 0;

do {

    let atpjautaSteiko = rand(10, 30);  //kiekis g\
    if (atpjautaSteiko > steikas) {
        atpjautaSteiko = steikas;
    }
    steikas = steikas - atpjautaSteiko;
    sakuciuSkaitiklis++;

    do {
        let kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = rand(1, 7);  //kiekis g
        if (kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko > atpjautaSteiko) {
            kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = atpjautaSteiko;
        }
        atpjautaSteiko = atpjautaSteiko - kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko;
        kramtymuSkaitiklis++;

    } while (atpjautaSteiko > 0);  //inversija

    console.log('Liko atpjauta steiko: ', atpjautaSteiko);

} while (steikas > 0);  //inversija

console.log('Viso dirbta su sakute: ', sakuciuSkaitiklis);
console.log('Viso tiek kramtyta: ', kramtymuSkaitiklis);
console.log('Kiek liko steiko: ', steikas);