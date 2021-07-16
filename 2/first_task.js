function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let check1 = rand(0, 4);
let check2 = rand(0, 4);

if (check1 * check2 == 0){
    console.log('dalyba is nulio')
}

else if (check1 < check2) {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2)
    result = check2 / check1;
    console.log('Dalybos rezultatas: ' + result);
}

else {
    console.log('Atsitiktiniai skaiciai: ' + check1, check2)
    result2 = check1 / check2;
    console.log('Dalybos rezultatas: ' + result2);
}