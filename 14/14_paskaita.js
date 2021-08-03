let lapai = 'Ruduo';

const sniegas = 'baltas';  //galima tik viena karta deklaruoti kintamaji su constanta
//Constantai galima daryti priskyrima tik viena karta

console.log(sniegas);


const ziema = [1, 2, 3, 4];
ziema.push(5);  // galima pushinti i masyva reiksme. Svarbu nenaudoti priskyrimo
console.log(ziema);


for (let i = 0; i < 10; i++) {
    const bla = 'BLA';  //cikle galima naudoti constanta jeigu nebuvo uzdeklaruota pries tai
    console.log(bla);
}


console.log('---------------------------------------------------');

function labas(name) {
    console.log(`Labas, ${name}`);
}

labas('Vaidai');  //funkcijos iskvietimas
labas('Audriau');


//Anonimine funkcija panaudojant const

const hello = function (name) {
    console.log(`Hello, ${name}`);
}

hello('John');  //anonimines funkcijos iskvietimas
hello('Victor');


//Arrow funkcija

const hi = (name) => { console.log(`Hello, ${name}`); }   //Pilnas parasymas

hi('Tomas');
hi('Roberto');



const hi2 = name => console.log(`Hello, ${name}`);   //Sutrumpintas su vienu argumentu

hi2('Antonio');
hi2('Ben');

console.log('-------------------------------------------------');
//Senoviskas sprendimas

const ezerai = [

    [2, 'Didelis'],

    [44, 'Ilgas'],

    [11, 'Trumpas'],

    [9, 'Apvalus'],

    [1, 'Gilus']

];


function ezeretuvas1(a, b) {

    return a[0] - b[0];

}

console.log(ezerai.slice().sort(ezeretuvas1));


console.log('-------------------------------------------------');

//Modernus sprendimas???
console.log(ezerai.slice().sort((a, b) => a[0] - b[0]));


console.log(ezerai.slice().sort((a, b) => {
    if (a[1] > b[1]) {

        return 1;

    } else if (a[1] < b[1]) {

        return -1;

    } else {

        return 0;

    }
}
));


console.log('-----------------Event---------------------------');

const spaustiButton = document.querySelector('button');
console.log(spaustiButton);

spaustiButton.addEventListener('click', e => {
    console.log(e);
})

spaustiButton.addEventListener('dblclick', e => {
    console.log(e);
    spaustiButton.style.display = 'none';
})

spaustiButton.addEventListener('mouseover', e => {
    console.log(e);
    spaustiButton.style.color = 'red';
})

spaustiButton.addEventListener('mouseout', e => {
    console.log(e);
    spaustiButton.style.color = 'black';
})