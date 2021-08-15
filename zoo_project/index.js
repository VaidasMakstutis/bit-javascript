class Animal {
    constructor(specie, tailLong, color, hasHorn) {

        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
        this.createAnimalRandom();
        this.createAnimalElement();
        this.createAnimalHtml();
    }
    createAnimalElement() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
        
    }
    createAnimalHtml() {
        const horn = this.hasHorn ? 'Has horn' : 'No horn';
        const html = `
        <hr>
        <h2> ${this.specie}</h2>
        <span> Tail long: ${this.tailLong} cm </span>
        <h4> color: ${this.color}  </h4>
        <i> ${horn} </i>
        <br>
        <button data-id="${this.id}"> Delete </button>
        `;
        this.element.innerHTML = html;

    }
    createAnimalRandom() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    }
}

const specie = document.querySelector('#specie');
const taillong = document.querySelector('#taillong');
const color = document.querySelector('#color');
const horn = document.querySelector('#horn');

document.querySelector('#btn1').
    addEventListener('click', () => {
        mas.push(new Animal(specie.value, 
            taillong.value, 
            color.value, 
            horn.checked));
    });

const mas = [];
mas.push(new Animal('Šeškas', 50, 'black-white', false));
mas.push(new Animal('Bebras', 0, 'grey', false));
mas.push(new Animal('Ūdra', 10, 'mixed brown', true));
mas.push(new Animal('Kiaunė', 15, 'dark-wood', true));
console.log(mas);

console.log(Animal);