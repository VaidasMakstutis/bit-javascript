class Animal {

    static animals = [];
    static filterSet;

    static start() {
        this.buttonCreate();
        this.buttonHideModal();
        this.buttonEdit();
        this.buttonConfirmDelete();
        this.buttonSort();

        // Animal.createAnimal('Šeškas', 50, 'black-white', false);
        // Animal.createAnimal('Bebras', 0, 'grey', false);
        // Animal.createAnimal('Ūdra', 10, 'mixed brown', true);
        // Animal.createAnimal('Kiaunė', 15, 'dark-wood', true);
        this.load();
    }

    static editAnimal(id, specie, tailLong, color, hasHorn) {
        this.animals.forEach(animal => {
            if (id == animal.id) {
                this.clearZoo();
                animal.specie = specie;
                animal.tailLong = tailLong;
                animal.color = color;
                animal.hasHorn = hasHorn;  
            }
        });
        this.save();
        this.renderZoo();
        this.hideModal('edit');
    }

    static createAnimal(specie, tailLong, color, hasHorn) {
        this.clearZoo();
        this.animals.push(new Animal(specie, tailLong, color, hasHorn));
        this.makeFilterSet();
        this.save();
        this.renderZoo();
    }

    static renderZoo() {
        this.animals.forEach(e => {
            e.render();
            // console.log(e);
        });
        // console.log(this.animals);
        this.filterSelect();
    }

    static clearZoo() {
        this.animals.forEach(animal => document.querySelector('.card').removeChild(animal.element));
        this.clearFilterSelect();
    }

    static showEditModal(animal) {
        const modal = document.querySelector('#edit');
        modal.style.display = 'block';
        modal.style.opacity = 1;
        modal.querySelector('.btn-primary').dataset.id = animal.id;

        const specie = document.querySelector('#edit [name=specie]');
        const taillong = document.querySelector('#edit [name=taillong]');
        const color = document.querySelector('#edit [name=color]');
        const horn = document.querySelector('#edit [name=horn]');

        specie.value = animal.specie;
        taillong.value = animal.tailLong;
        color.value = animal.color;
        horn.checked = animal.hasHorn;
    }

    static showDeleteConfirmModal(id) {
        const modal = document.querySelector('#confirm-delete');
        modal.style.display = 'block';
        modal.style.opacity = 1;
        modal.querySelector('.btn-primary').dataset.id = id;
    }

    static buttonConfirmDelete() {
        document.querySelector('#confirm-delete .btn-primary')
            .addEventListener('click', (e) => {
                this.deleteAnimal(e.target.dataset.id);
                this.hideModal('confirm-delete');
            });
    }

    static makeFilterSet(){
        this.filterSet = new Set();
        this.animals.forEach(animal => this.filterSet.add(animal.specie));
        this.filterSet = new Set([...this.filterSet].sort());
        // console.log(this.filterSet);
    }

    static filterSelect() {
        
        if (undefined === this.filterSet) {
            return;
        }

        const select = document.querySelector('#animals-list')
        this.filterSet.forEach(a => {
            const element = document.createElement('option');
            element.innerText = a;
            element.value = a;
            select.appendChild(element);
        });
    }

    static clearFilterSelect() {
        document.querySelector('#animals-list').innerHTML = '';
    }


    static hideModal(id) {
        const modal = document.querySelector('#' + id);
        modal.style.display = 'none';
        modal.style.opacity = 0;
        delete modal.querySelector('.btn-primary').dataset.id;
    }

    static buttonCreate() {
        const specie = document.querySelector('#create [name=specie]');
        const taillong = document.querySelector('#create [name=taillong]');
        const color = document.querySelector('#create [name=color]');
        const horn = document.querySelector('#create [name=horn]');
        document.querySelector('#btn1').
            addEventListener('click', () => {
                this.createAnimal(specie.value, taillong.value, color.value, horn.checked);
            });
    }

    static buttonEdit() {

        const specie = document.querySelector('#edit [name=specie]');
        const taillong = document.querySelector('#edit [name=taillong]');
        const color = document.querySelector('#edit [name=color]');
        const horn = document.querySelector('#edit [name=horn]');
        document.querySelector('.modal .btn-primary').
            addEventListener('click', (e) => {
                this.editAnimal(e.target.dataset.id, specie.value, taillong.value, color.value, horn.checked);
            });
    }


    static buttonHideModal() {
        document.querySelectorAll('[data-dismiss=modal]')
            .forEach(b => {
                b.addEventListener('click', (e) => this.hideModal(e.target.closest('.modal').id))
            });
    }

    static buttonSort() {
        document.querySelectorAll('#sort-specie, #sort-tail-long')
            .forEach(btn => {
                btn.addEventListener('click', (e) => this.showSorted(e.target.id))
            });
    }

    static showSorted(id) {
        // console.log(id);
        const dir = document.querySelector('#sort-asc').checked ? 1: -1;
        if ('sort-tail-long' == id) {
            this.animals.sort(function (a, b) {
                return dir * (a.tailLong - b.tailLong);
            });
        }

        if ('sort-specie' == id) {
            this.animals.sort(function (a, b) {
                const nameA = a.specie.toUpperCase();
                const nameB = b.specie.toUpperCase();
                if (nameA < nameB) {
                    return -dir;
                }
                if (nameA > nameB) {
                    return dir;
                }

                // names must be equal
                return 0;
            });
        }

        this.clearZoo();
        this.renderZoo();
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
        this.makeFilterSet();
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
        this.editButton();  //Button event
    }

    createAnimalElement() {
        this.element = document.createElement('div');
        document.querySelector('.container .card').appendChild(this.element);

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
            addEventListener('click', () => this.constructor.showDeleteConfirmModal(this.id));
    }

    editButton() {
        this.element.querySelector('.btn-secondary').
            addEventListener('click', () => this.constructor.showEditModal(this));
    }
}

Animal.start();