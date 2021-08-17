class Animal {

    static animals = [];

    static createAnimal(specie, tailLong, color, hasHorn) {
        this.clearZoo();
        this.animals.push(new Animal(specie, tailLong, color, hasHorn));
        this.renderZoo();
        this.save();
    }

    static renderZoo() {
        this.animals.forEach(e => {
            e.render();
            // console.log(e);
        });
        console.log(this.animals);
    }

    static clearZoo() {
        document.querySelectorAll("div").forEach(e => e.remove());
    }

    static buttonCreate() {
        const specie = document.querySelector('#specie');
        const taillong = document.querySelector('#taillong');
        const color = document.querySelector('#color');
        const horn = document.querySelector('#horn');
        document.querySelector('#btn1').
            addEventListener('click', () => {
                this.createAnimal(specie.value, taillong.value, color.value, horn.checked);
            });
    }

    static start() {
        this.buttonCreate();

        // Animal.createAnimal('Šeškas', 50, 'black-white', false);
        // Animal.createAnimal('Bebras', 0, 'grey', false);
        // Animal.createAnimal('Ūdra', 10, 'mixed brown', true);
        // Animal.createAnimal('Kiaunė', 15, 'dark-wood', true);
        this.load();
    }

    static deleteAnimal(id) {
        this.animals.forEach((e, index) => {
            if (id == e.id) {
                // console.log(index);
                this.clearZoo();
                this.animals.splice(index, 1);
                this.renderZoo();
            }
        });
        this.save();
    }

    static save() {
        const data = [];
        this.animals.forEach(j => {
            data.push({
                specie: j.specie,
                tailLong: j.tailLong,
                color: j.color,
                hasHorn: j.hasHorn
            });
        });
        // console.log(data);

        //Local storage
        localStorage.setItem('zooApp', JSON.stringify(data));
    }

    static load() {
        if (null === localStorage.getItem('zooApp')) {
            localStorage.setItem('zooApp', JSON.stringify([])); 
        }
        JSON.parse(localStorage.getItem('zooApp'))
        .forEach(j => this.createAnimal(j.specie, j.tailLong, j.color, j.hasHorn));
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
        this.deleteButton();  //Button event
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
        <button class="btn btn-secondary" data-id="${this.id}"> Edit </button>
        <br>
        <button class="btn btn-primary" data-id="${this.id}"> Delete </button>
        `;
        this.element.innerHTML = html;

    }

    createAnimalRandom() {
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
    }

    deleteButton() {
        this.element.querySelector('.btn-primary').
            addEventListener('click', () => this.constructor.deleteAnimal(this.id));
    }
}

Animal.start();