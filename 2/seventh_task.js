function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(0, 100);
let b = rand(0, 100);
let c = rand(0, 100);
let initialAverage;  //Pradine vidurkio reiksme
let average1;   //Rezultatas atemus reiksmes mazesnes uz 10
let average2;   //Rezultatas atemus reiksmes didesnes uz 90

console.log('Sugeneruoti atsitiktiniai skaiciai: ' + a, b, c);
initialAverage = (a + b + c) / 3;
console.log('Pradine vidurkio reiksme: ' + initialAverage.toFixed(2));

if (a < 10 && b < 10 && c < 10) {
    average1 = initialAverage - a - b - c;
    console.log('Vidurkis atemus reiksmes mazesnes uz 10: ' + average1.toFixed(2));
}
else if (a < 10 && b < 10 && c > 10) {
    average1 = initialAverage - a - b;
    console.log('Vidurkis atemus reiksmes mazesnes uz 10: ' + average1.toFixed(2));
}

else if (a < 10 && b > 10 && c < 10) {
    average1 = initialAverage - a - c;
    console.log('Vidurkis atemus reiksmes mazesnes uz 10: ' + average1.toFixed(2));
}

else if (a > 10 && b < 10 && c < 10) {
    average1 = initialAverage - b - c;
    console.log('Vidurkis atemus reiksmes mazesnes uz 10: ' + average1.toFixed(2));
}

else if (a < 10 && b > 10 && c > 10) {
    average1 = initialAverage - a;
    console.log('Vidurkis atemus reiksmes mazesnes uz 10: ' + average1.toFixed(2));
}

else if (a > 10 && b < 10 && c > 10) {
    average1 = initialAverage - b;
    console.log('Vidurkis atemus reiksmes mazesnes uz 10: ' + average1.toFixed(2));
}

else if (a > 10 && b > 10 && c < 10) {
    average1 = initialAverage - c;
    console.log('Vidurkis atemus reiksmes mazesnes uz 10: ' + average1.toFixed(2));
}

else {
    console.log('Nerasta reiksmiu mazesniu uz 10!');
}




if (a > 90 && b > 90 && c > 90) {
    average2 = initialAverage - a - b - c;
    console.log('Vidurkis atemus reiksmes didesnes uz 90: ' + average2.toFixed(2));
}
else if (a > 90 && b > 90 && c < 90) {
    average2 = initialAverage - a - b;
    console.log('Vidurkis atemus reiksmes didesnes uz 90: ' + average2.toFixed(2));
}

else if (a > 90 && b < 90 && c > 90) {
    average2 = initialAverage - a - c;
    console.log('Vidurkis atemus reiksmes didesnes uz 90: ' + average2.toFixed(2));
}

else if (a < 90 && b > 90 && c > 90) {
    average2 = initialAverage - b - c;
    console.log('Vidurkis atemus reiksmes didesnes uz 90: ' + average2.toFixed(2));
}

else if (a > 90 && b < 90 && c < 90) {
    average2 = initialAverage - a;
    console.log('Vidurkis atemus reiksmes didesnes uz 90: ' + average2.toFixed(2));
}

else if (a < 90 && b > 90 && c < 90) {
    average2 = initialAverage - b;
    console.log('Vidurkis atemus reiksmes didesnes uz 90: ' + average2.toFixed(2));
}

else if (a < 90 && b < 90 && c > 90) {
    average2 = initialAverage - c;
    console.log('Vidurkis atemus reiksmes didesnes uz 90: ' + average2.toFixed(2));
}

else {
    console.log('Nerasta reiksmiu didesniu uz 90!');
}
