//+-*/% and comparisons

let box1 = 3;
let box2 = 2;

result = box1 + box2;
console.log(result);

result += box1;  //sutrumpinimas reiskia: result = result + box1
console.log(result);

result++; //sutrumpinimas reiskia: result + 1;  //didinimas vienetu
result--; //sutrumpinimas reiskia: result - 1;  //mazinimas vienetu

result2 = box1 * (box1 + box2);
console.log(result2);

result3 = box1 / 0;  //begalybe
console.log(result3);

let box3 = 'labas';
let box4 = 'vakaras';

result4 = box3 + ' ' + box4;
console.log(result4);

let box5 = 8;
let box6 = 3;

result5 = box5 % box6  //dalybos liekana
console.log(result5);

rezultatas = 10;

let rezultatas1 = rezultatas++ + ++rezultatas;
console.log(rezultatas1);


let box7 = 'labas';  //string
box7++;
console.log(box7); //NaN (not a number)

//Undefined, NaN, Infinity

let box8 = "6"; //is stringu konvertuojama i skaicius. Dalyba tarp stringu yra negalima.
let box9 = "2";
result = box8 / box9;
console.log(result);

//Comparisons (atsakymas grazinamas boolean reiksme)

console.log('3 > 5', 3 > 5);  //false
console.log('3 < 5', 3 < 5);  //true
console.log('3 != 5', 3 != 5);  //true

console.log('Z > z', 'Z' > 'z');
console.log('Z > A', 'Z' > 'A');
console.log('Z > 123', 'Z' > 123);


//If statement

if (33 < 5) {
    console.log ('TAIP'); //nevykdo, jeigu salyga netenkinama
}

console.log ('NE')


//Function

function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(rand(5, 10));

let check = rand(1, 9);

if (check < 5) {
    console.log('TAIP');
    console.log(check)
}

else if (check == 5) {
    console.log('LYGU');
    console.log(check)
}

else {
    console.log('NE')
    console.log(check)
}
