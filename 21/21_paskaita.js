//1 Uzduotis

const obj1 = {
    name: null,
    setName: function (name) {
        this.name = name;
    },

    koksVardas: function () {
       console.log(this.name)
    }
}
obj1.setName('Ainis');

const duok = obj1.koksVardas.bind(obj1);

document.querySelector('button');
addEventListener('click', duok);


//2 Uzduotis

const z2 = {
    vardas: null,
    setName: function(vardas) {
        this.vardas = vardas;
    },
    getName: function() {
        console.log(this.vardas);
    }
};
class Zmogus {
    constructor() {
        this.vardas = null;
        this.getName = this.getName.bind(this);
    }
    setName(vardas) {
        this.vardas = vardas;
    }
    getName = () => {
        console.log(this.vardas);
    }
}
const z1 = new Zmogus();
z1.setName('Anatolija');
z2.setName('Anatolija');
console.log(z1, z2);
const duok2 = z2.getName.bind(z2);
const c = 'La la ';
document.querySelector('button').
addEventListener('click', z1.getName);
document.querySelector('button').
addEventListener('click', duok2);