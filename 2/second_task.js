function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let check1 = rand(0, 25);
let check2 = rand(0, 25);
let check3 = rand(0, 25);

if (check1 > check2 && check1 < check3) {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2, check3);
    console.log('Vidurine reiksme: ' + check1);
}

else if (check1 < check2 && check1 > check3) {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2, check3);
    console.log('Vidurine reiksme: ' + check1);
}

else if (check2 > check1 && check2 < check3) {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2, check3);
    console.log('Vidurine reiksme: ' + check2);
}

else if (check2 < check1 && check2 > check3) {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2, check3);
    console.log('Vidurine reiksme: ' + check2);
}

else if (check3 > check1 && check3 < check2) {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2, check3);
    console.log('Vidurine reiksme: ' + check3);
}

else if (check3 < check1 && check3 > check2) {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2, check3);
    console.log('Vidurine reiksme: ' + check3);
}

else {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2, check3);
    console.log('Sekoje yra vienodu skaiciu, todel vidurine reiksme negalima');
}