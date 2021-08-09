//1 Uzduotis

const input1 = document.querySelector('#input1');
const button1 = document.querySelector('#button1');

button1.addEventListener('click', () => {
        console.log(input1.value);
});



//2 Uzduotis
const parosMetas = document.querySelector('#paros_metas');
parosMetas.addEventListener('change', (e) => {
    console.log(`Paros metas: ${e.target.value}`);
});



//3 Uzduotis
const parosMetasRadio = document.querySelectorAll('[name=paros_metas]');
// console.log(parosMetasRadio);

parosMetasRadio.forEach(k =>{
    k.addEventListener('change', () => {
        console.log(k.value);
    });
});


//4 Uzduotis
const check4 = document.querySelector('#checkbox4');
check4.addEventListener('change', () => {
    if (check4.checked === true) {
        console.log('Pažymėta');
    }
    if (check4.checked === false) {
        console.log('Nepažymėta');
    }
});



//5 Uzduotis
const check5 = document.querySelectorAll('.check5');
// console.log(check5);

check5.forEach(j =>{
    j.addEventListener('change', () => {
        check5.forEach(h =>{
            if (h.checked) {
                console.log(h.value);
            }
        });
       console.log('---------------');
    });
});



//6 Uzduotis
const h1 = document.querySelector('.h1');
button1.addEventListener('click', () => {
    h1.innerText = input1.value;
});



//7 Uzduotis
parosMetasRadio.forEach(k => {
    k.addEventListener('change', () => {
        let h3 = document.createElement("h3");
        document.body.appendChild(h3);
        h3.innerText = k.value;
    });
});



//8 Uzduotis
