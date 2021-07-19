function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(0, 100);
let b = rand(0, 100);
let c = rand(0, 100);
let initialAverage;  //Pradine vidurkio reiksme

console.log('Sugeneruoti atsitiktiniai skaiciai: ' + a, b, c);
initialAverage = (a + b + c) / 3;
console.log('Pradine vidurkio reiksme: ' + initialAverage.toFixed(2));

let kaDalinam = initialAverage;
let daliklis = 3;

if (a <= 10 || a >= 90) {
    kaDalinam -= a;
    daliklis--;
}

if (b <= 10 || b >= 90) {
    kaDalinam -= b;
    daliklis--;
}

if (c <= 10 || c >= 90) {
    kaDalinam -= c;
    daliklis--;
}
// else {
//     console.log('Galutine vidurkio reiksme: ' + kaDalinam / daliklis);
// }
console.log('Likutine vidurkio reiksme: ' + kaDalinam.toFixed(2), 'daliklis: ' + daliklis);
console.log('Galutine vidurkio reiksme: ' + kaDalinam.toFixed(2) / daliklis);