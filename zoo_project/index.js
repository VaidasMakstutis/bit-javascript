class Animal {

    static animals = [];

    static createAnimal(specie, tailLong, color, hasHorn){
        this.animals.push(new Animal (specie, tailLong, color, hasHorn));
    }

    static renderZoo() {
        this.animals.forEach(e =>{
            e.render();
            // console.log(e);
        });
    }

    static clearZoo() {
        document.querySelectorAll("div").forEach(e => e.remove());
    }

    constructor(specie, tailLong, color, hasHorn) {

        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        this.createAnimalRandom();
    }

    render() {
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
        <button class="btn btn-secondary" data-id="${this.id}"> Delete </button>
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
        Animal.clearZoo();
        Animal.createAnimal(specie.value, taillong.value, color.value, horn.checked);
        Animal.renderZoo();
    });

Animal.createAnimal('Šeškas', 50, 'black-white', false);
Animal.createAnimal('Bebras', 0, 'grey', false);
Animal.createAnimal('Ūdra', 10, 'mixed brown', true);
Animal.createAnimal('Kiaunė', 15, 'dark-wood', true);

Animal.renderZoo();