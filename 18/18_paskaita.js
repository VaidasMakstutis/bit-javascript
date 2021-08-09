//1 Uzduotis

const input1 = document.querySelector('#input1');
const button1 = document.querySelector('#button1');

button1.addEventListener('click', () => {
    console.log(input1.value);
});

const input2 = document.querySelector('#input2');
const button2 = document.querySelector('#button2');

button2.addEventListener('click', () => {
    console.log(input2.value);
});


//2 Uzduotis
//a dalis
const button3 = document.querySelector('#button3');

button3.addEventListener('click', () => {

    console.log('Input raidziu ilgis: ', input1.value.length + input2.value.length);

});


//b dalis
const button4 = document.querySelector('#button4');
button4.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
});



//3 Uzduotis
const button5 = document.querySelector('#button5');
let array1 = [];
let array2 = [];

button5.addEventListener('click', () => {
    array1.push(input1.value);
    array2.push(input2.value);
    console.log('Masyvas 1: ', array1);
    console.log('Masyvas 2: ', array2);
});



//4 Uzduotis

fetch('https://in3.dev/knygos/')

    .then(response => response.json())

    .then(data => {

        let price;
        let title;
        let type;
        type = data[0].type;
        title = data[0].title;
        price = data[0].price;
        data.forEach(k => {
            if (k.price < price) {
                price = k.price;
                title = k.title;
                type = k.type;
            }
        });

        fetch('https://in3.dev/knygos/types/')

            .then(response => response.json())

            .then(data => {
                data.forEach(t => {
                    if (t.id == type) {
                        type = t.title;
                    }
                })
                console.log(title, price, type);
            })

    });



//for..in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
