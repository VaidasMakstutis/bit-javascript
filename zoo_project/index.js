class Animal {

    static animals = [];
    static filterSet;
    element;

    static start() {
        this.buttonCreate();
        this.buttonHideModal();
        this.buttonEdit();
        this.buttonConfirmDelete();
        this.buttonSort();
        this.buttonFilter();
        this.showAllButton();

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
        // this.animals.forEach(animal => document.querySelector('.container').removeChild(animal.element));
        document.querySelector('.container').innerHTML = '';
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
        this.animals.sort(function (a, b) {
            const nameA = a.specie.toUpperCase(); // ignore upper and lowercase
            const nameB = b.specie.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          });
      
        this.animals.forEach(animal => {
            this.filterSet.add(animal.specie);
          });
    }

    static filterSelect() {

        const select = document.querySelector("#animals-list");
        this.filterSet.forEach(animal => {
            const option = document.createElement("option");
            option.appendChild(document.createTextNode(animal));
            option.setAttribute("value", animal);
            select.appendChild(option);
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
        document.querySelector('#sort-specie').addEventListener('click', e => {
                this.showSorted(e.target.id);
            });
        document.querySelector('#sort-tail-long').addEventListener('click', e => {
                this.showSorted(e.target.id);
            });
    }

    static buttonFilter() {
        document.querySelector('#filtering').addEventListener('click', () => {
            this.showFiltered()
        });
    }

    static showAllButton() {
        document.querySelector('#show-all-animals').
        addEventListener('click', () => {
            this.animals = [];
            this.load();
        });
    }


    static showSorted(id) {
        // console.log(id);
        const dir = document.querySelector('#sort-asc').checked ? 1: -1;
        if (id == 'sort-tail-long') {
            this.animals.sort(function (a, b) {
                return dir * (a.tailLong - b.tailLong);
            });
        }

        if (id == 'sort-specie') {
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
                // return 0;
            });
        }

        this.clearZoo();
        this.renderZoo();
    }


    static showFiltered() {
        const filterValue = document.querySelector('#animals-list').value;
        const an = [];
        this.animals.forEach(animal => {
            if (animal.specie == filterValue) {
                an.push(animal);
            }
        });
        this.animals = an;
        console.log(this.animals, an);
        this.clearZoo();
        this.renderZoo();
        // document.querySelectorAll('.card button').forEach(b => {
        //     b.setAttribute('disabled', true);
        // })
    }

    // static rerender = () => {
    //     this.clearZoo(); // iš html'o ištrinam visus gyvulius
    //     this.renderZoo(); // iš naujo sudedame visus gyvulius į html'ą
    // }

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
        this.makeFilterSet();
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
        this.element.classList.add('card');
        document.querySelector('.container').appendChild(this.element);
        // console.log(this.element);
    }

    createAnimalHtml() {
        const horn = this.hasHorn ? 'Has horn' : 'No horn';
        const html = `
        <h2> ${this.specie}</h2>
        <span> Tail long: ${this.tailLong} cm </span>
        <h4> color: ${this.color}  </h4>
        <i> ${horn} </i>
            <div>
                <button class="btn btn-secondary" data-id="${this.id}"> Edit </button>
            </div>
            <div>
                <button class="btn btn-primary" data-id="${this.id}"> Delete </button>
            </div>
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