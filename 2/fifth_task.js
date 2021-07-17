function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let x = rand(-10, 10);
let y = rand(-10, 10);
let z = rand(-10, 10);

let xNumberLowerThanZero;   //simbolis "+" is abieju pusiu jeigu maziau uz nuli
let xNumberMoreThanZero;  //simbolis "-" is abieju pusiu jeigu daugiau uz nuli
let xNumberEqualZero;   //simbolis "*" is abieju pusiu jeigu lygu nuliui

let yNumberLowerThanZero;
let yNumberMoreThanZero;
let yNumberEqualZero;

let zNumberLowerThanZero;
let zNumberMoreThanZero;
let zNumberEqualZero;

console.log('Atsitiktiniai skaiciai: ' + x, y, z);

console.log('Pirmo skaiciaus modifikacija: ');
if (x < 0) {
    xNumberLowerThanZero = '+' + x + '+';
    console.log(xNumberLowerThanZero);
}
else if (x > 0) {
    xNumberMoreThanZero = '-' + x + '-';
    console.log(xNumberMoreThanZero);
}
else if (x == 0) {
    xNumberEqualZero = '*' + x + '*';
    console.log(xNumberEqualZero);
}
else {
    console.log('Nerastas skaicius mazesnis uz nuli!');
}


console.log('Antro skaiciaus modifikacija: ');
if (y < 0) {
    yNumberLowerThanZero = '+' + y + '+';
    console.log(yNumberLowerThanZero);
}
else if (y > 0) {
    yNumberMoreThanZero = '-' + y + '-';
    console.log(yNumberMoreThanZero);
}
else if (y == 0) {
    yNumberEqualZero = '*' + y + '*';
    console.log(yNumberEqualZero);
}
else {
    console.log('Nerastas skaicius mazesnis uz nuli!');
}


console.log('Trecio skaiciaus modifikacija: ');
if (z < 0) {
    zNumberLowerThanZero = '+' + z + '+';
    console.log(zNumberLowerThanZero);
}
else if (z > 0) {
    zNumberMoreThanZero = '-' + z + '-';
    console.log(zNumberMoreThanZero);
}
else if (z == 0) {
    zNumberEqualZero = '*' + z + '*';
    console.log(zNumberEqualZero);
}
else {
    console.log('Nerastas skaicius mazesnis uz nuli!');
}