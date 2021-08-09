const result = {

    pirmas: [],
    antras: [],
    trecias: [],
    ketvirtas: [],
    penktas: []
}

document.querySelector('#b1').addEventListener('click', () => {
    result.pirmas.push(document.querySelector('#i1').value);
    document.querySelector('#i1').value = '';
    console.log(result);
});


document.querySelector('select').addEventListener('change', () => {
    result.antras.push(document.querySelector('#i2').value);
    document.querySelector('#i2').value = '';
    console.log(result);
});

//3

document.querySelectorAll('[name=i3]').forEach(ch => {
    ch.addEventListener('change', () => {
        result.trecias.push(ch.value);
        console.log(result);
    });
});


//4

document.querySelector('#i4').addEventListener('change', () => {
    result.ketvirtas.push(document.querySelector('#i4').checked ? 'Pažymėtas' : 'Nepažymėtas');
    console.log(result);
});


//5

document.querySelectorAll('[name=i5]').forEach(ch => {
    ch.addEventListener('change', () => {
        const a = [];
        document.querySelectorAll('[name=i5]').forEach(ch => {
            if (ch.checked) {
                a.push(ch.value);
            }
        })
        result.penktas.push(a);
        console.log(result);
    });
});

const h3Holder = document.querySelector('#h3-holder');
document.querySelector('#go').addEventListener('click', () => {
    for (const props in result) {
        result[props].forEach(text => {
            const h3 = document.createElement('h3');
            h3.classList.add('badge');
            h3.classList.add('badge-warning');
            h3.classList.add('m-1');
            h3Holder.appendChild(h3);
            h3.innerText = text;
        })
    }
});