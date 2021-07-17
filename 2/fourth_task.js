function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(0, 2);
let b = rand(0, 2);
let c = rand(0, 2);
let d = rand(0, 2);
let numberOfZeros = 0;
let numberOfOne = 0;
let numberOfTwo = 0;

console.log('Atsitiktiniai skaiciai: ' + a, b, c, d);
    if (a == 0) {
        numberOfZeros++;
    }
    else if (a == 1) {
        numberOfOne++;
    }
    else {
        numberOfTwo++;
    }

    if (b == 0) {
        numberOfZeros++;
    }
    else if (b == 1) {
        numberOfOne++;
    }
    else {
        numberOfTwo++;
    }

    if (c == 0) {
        numberOfZeros++;
    }
    else if (c == 1) {
        numberOfOne++;
    }
    else {
        numberOfTwo++;
    }

    if (d == 0) {
        numberOfZeros++;
    }
    else if (d == 1) {
        numberOfOne++;
    }
    else {
        numberOfTwo++;
    }

        console.log('Nuliu kiekis: ' + numberOfZeros);
        console.log('Vienetu kiekis: ' + numberOfOne);
        console.log('Dvejetu kiekis: ' + numberOfTwo);

   