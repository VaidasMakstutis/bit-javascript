function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log('-----------------------1 uzd-------------------');

let masyvas = [];

for (let i = 0; i < 11; i++) {
masyvas[i] = rand(3, 7);
}
console.log(masyvas.slice());



console.log('-----------------------2 uzd-------------------');

function sortdesc (a, b) {
    return b - a;
}

masyvas.sort(sortdesc);
console.log(masyvas.slice());


console.log('-----------------------3 uzd-------------------');

const mySet = new Set();
while (mySet.size < 11) {
    mySet.add(rand(3, 17));
}
console.log(mySet);


console.log('-----------------------4 uzd-------------------');

while (mySet.size < 15) {
    mySet.add(rand(3, 17));
}
console.log(mySet);


console.log('-----------------------5 uzd-------------------');

for (let item of mySet) {
    if (!(item % 3 == 0)) mySet.delete(item);
}
console.log(mySet);


console.log('-----------------------6 uzd-------------------');

const sorting = [...mySet];
sorting.sort(function (a, b) {
    return a - b;
});
mySet.clear();
sorting.map(item => mySet.add(item));
console.log(mySet);


console.log('-----------------------7 uzd-------------------');

masyvas.sort(function (a) {
    if (!(a % 2)) return -1;
    else return 1;
  });
console.log(masyvas.slice());


console.log('-----------------------8 uzd-------------------');

const animals = new Map();
animals.set("Briedis", rand(5, 30));
animals.set("Vilkas", rand(5, 30));
animals.set("Zuikis", rand(5, 30));
animals.set("Lokys", rand(5, 30));
console.log(animals);


console.log('-----------------------9 uzd-------------------');

const animalsMas = [...animals];
animalsMas.sort((a, b) => {
    return a[1] - b[1];
});
animals.clear();
animalsMas.map(item => animals.set(item[0], item[1]));
console.log(animals);


console.log('----------------------10 uzd-------------------');

const animalsMas2 = [...animals];
animalsMas2.sort((a, b) => {
  if (a[0][0] > b[0][0]) return 1;
  else return -1;
});
console.log(animalsMas2);
animals.clear();
animalsMas2.map(item => animals.set(item[0], item[1]))
console.log(animals);