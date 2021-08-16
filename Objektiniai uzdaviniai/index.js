console.log('--------------------1 uzd-------------------------');

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni() {
        this.akmenuKiekis++;
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }
    kiekPririnktaAkmenu() {
        console.log('Akmenu kiekis kibire: ', this.akmenuKiekis);
    }
}

const b1 = new Kibiras1();
b1.prideti1Akmeni();
b1.pridetiDaugAkmenu(17);
b1.pridetiDaugAkmenu(14);
b1.kiekPririnktaAkmenu();



console.log('--------------------2 uzd-------------------------');

class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }
    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        }
        else {
            this.popieriniaiPinigai += kiekis;
        }
    }
    skaiciuoti() {
        console.log('Metaliniai pinigai:', this.metaliniaiPinigai, ' popieriniai pinigai: ', this.popieriniaiPinigai);
    }
}

const c1 = new Pinigine();
c1.ideti(40);
c1.ideti(1);
c1.ideti(2);
c1.ideti(17);
c1.skaiciuoti();



console.log('--------------------3 uzd-------------------------');

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
    }
    islipa(keleiviuSkaicius) {
        this.keleiviuSkaicius -= keleiviuSkaicius;
    }
    vaziuoja() {
        if (this.keleiviuSkaicius > 0) {
            console.log('Vaziuojanciu keleiviu skaicius: ', this.keleiviuSkaicius);
        }
        else {
            console.log('Nera vaziuojanciu keleiviu');
        }
    }
}

const d1 = new Troleibusas();
d1.ilipa(5);
d1.ilipa(10);
d1.islipa(1);
d1.islipa(4);
d1.vaziuoja();


console.log('--------------------4 uzd-------------------------');

class Troleibusas2 {

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log('Keleiviu skaicius visuose troleibusuose:', this.visiKeleiviai);
    }

    constructor() {
        this.keleiviuSkaicius = 0;
    }
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
        console.log('Ilipo keleiviu: ', keleiviuSkaicius);
    }
    islipa(keleiviuSkaicius) {
        if (this.keleiviuSkaicius < keleiviuSkaicius) {
            keleiviuSkaicius = this.keleiviuSkaicius;
        }
        this.keleiviuSkaicius -= keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);

        console.log('Islipo keleiviu: ', keleiviuSkaicius);
    }
    vaziuoja() {
        console.log(`Keleiviu sk troleibuse: ${this.keleiviuSkaicius}`);
    }
}

const e1 = new Troleibusas2();
e1.ilipa(5);
e1.ilipa(10);
e1.islipa(4);
e1.islipa(5);
e1.vaziuoja();

const f1 = new Troleibusas2();
f1.ilipa(8);
f1.ilipa(3);
f1.islipa(4);
f1.islipa(1);
f1.vaziuoja();

Troleibusas2.keleiviuSkaiciusVisuoseTroleibusuose();



console.log('--------------------7 uzd-------------------------');

// Daro Marytė

class Kibiras7 {

    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose() {

        console.log('Visuose kibiruose yra akmenų:', this.visiAkmenys);

    }

    static bendrasAkmenuSkaicius(akmenuSkaicius) {

        this.visiAkmenys += akmenuSkaicius;

    }
    //this === class


    constructor() {

        this.akmenuKiekis = 0;

    }
    //this === object


    prideti1Akmeni() {

        this.akmenuKiekis++; // i objekta, kokretus kibiras

        this.constructor.bendrasAkmenuSkaicius(1); // i bendra statine, t.y. visiems kibirams

        //this.constructor === Kibiras7

    }


    pridetiDaugAkmenu(kiekis) {

        this.akmenuKiekis += kiekis;

        this.constructor.bendrasAkmenuSkaicius(kiekis);

    }

    kiekPririnktaAkmenu() {

        console.log('Kibire akmenų:', this.akmenuKiekis);

    }

}

// Marytės pabaiga


// Marius
const viedras55 = new Kibiras7();
const viedras66 = new Kibiras7();
const viedras77 = new Kibiras7();

viedras55.prideti1Akmeni();
viedras55.pridetiDaugAkmenu(16);
viedras55.kiekPririnktaAkmenu();

viedras66.prideti1Akmeni();
viedras66.pridetiDaugAkmenu(7);
viedras66.kiekPririnktaAkmenu();

viedras77.prideti1Akmeni();
viedras77.pridetiDaugAkmenu(13);
viedras77.kiekPririnktaAkmenu();

Kibiras7.akmenuSkaiciusVisuoseKibiruose()
// Mariaus pabaiga