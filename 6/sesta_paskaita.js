function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

/*
AAA
B
B
B
AAA
B
B
B
AAA
B
B
B
AAA
B
B
B
*/

let kint1 = 'DIDELIS START';
let kint2 = 'B';
let kint3 = 'DIDELIS END';
let kint4 = 3;

for (let i = 0; i < 4; i++) {
    console.log(kint1);
    for (let j = 0; j < kint4; j++) {
        console.log(kint2, j);
    }
    console.log(kint3);
    kint4++;
}


/*
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
*/

console.log('--------------------------');

for (let i = 0; i < 4; i++) {
    console.log('DIDELIS START');

    for (let j = 0; j < 3; j++) {
        console.log('B', j);
    }
        for (let g = 0; g < 1; g++) {
            console.log('DIDELIS MID', g);
        }

    for (let h = 0; h < 3; h++) {
        console.log('C', h);
    }
    for (let k = 0; k < 1; k++) {
        console.log('DIDELIS END', k);
    }
}

console.log('------------AAAAA--------');

/*

AAAAA
AAAAA
AAAAA
AAAAA
AAAAA

*/
let raide = 'A';

for (let n = 0; n < 5; n++) {
    let eilute = '';
    for (let m = 0; m < 5; m++) {
        eilute += raide; 
    }
    console.log(eilute, n);
}

/*
A AA AAA AAAA AAAAA
*/

let eilute = '';

for (let n = 0; n < 5; n++) {
    let zodis = '';
    for (let m = 0; m < n+1; m++) {
        zodis += raide; 
    }
    eilute = eilute + zodis + ' ';
}
console.log(eilute);


/*
A AA AAA AAAA AAAAA AAAA AAA AA A
*/


eilute = '';
let kiekis = 1;

for (let n = 0; n < 9; n++) {
    let zodis = '';
    for (let m = 0; m < kiekis; m++) {
        zodis += raide; 
    }
    if (n > 3) {
        kiekis--;
    }
    else {
        kiekis++;
    }
    eilute = eilute + zodis + ' ';
}
console.log(eilute);



/*
A
AA
AAA
AAAA
AAAAA
AAAA
AAA
AA
A
*/

eilute = '';
kiekis = 1;

for (let n = 0; n < 9; n++) {
    let zodis = '';
    for (let m = 0; m < kiekis; m++) {
        zodis += raide; 
    }
    if (n > 3) {
        kiekis--;
    }
    else {
        kiekis++;
    }
    console.log(zodis);
}



