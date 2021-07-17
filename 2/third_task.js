function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

if (a > b + c || b > a + c || c > a + b ) {
    console.log(a, b, c);
    console.log('Trikampio sudaryti negalima');
}
else {
    console.log(a, b, c);
    console.log('Trikampi sudaryti galima');
}