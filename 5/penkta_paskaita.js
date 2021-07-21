function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let i;

while (i != 55) {
    i = rand = (0, 100);
    console.log('WHILE', i);
}

do {
    i = rand = (0, 100);
    console.log('DO WHILE', i);
} while (i != 55);

let j = 0;

while (j < 5) {
    console.log('J', j);
    j++;
}

for (let t = 0; t < 5; t++) {
    console.log('T', t);
}