//1 Uzduotis

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
        console.log('Akmenu kibire: ', this.akmenuKiekis);
    }

}

const a1 = new Kibiras1();
a1.prideti1Akmeni();
a1.pridetiDaugAkmenu(154);
a1.pridetiDaugAkmenu(100);
a1.kiekPririnktaAkmenu();
console.log('%c=====>>>>>-----Pinigine-----<<<<<=====', 'background: #222; color: #bada55');

class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }
    ideti(kiekis) {
        if (kiekis > 2) {
            this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis
        } else { this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis }
    }
    skaiciuoti() {
        console.log(this.popieriniaiPinigai, 'Banknotai', this.metaliniaiPinigai, 'Monetos')
    }
}
const a2 = new Pinigine();
a2.ideti(2);
a2.ideti(1);
a2.ideti(12);
a2.ideti(0.5);
a2.skaiciuoti();



console.log('------------------------------TV------------------');

class TV {

    static programa = ['BTV', 'TV6', 'Discovery', 'Eurosport']; //statine savybe

    static naujaPrograma (pr) {
        this.programa = pr;  //this rodo i klase
    }

    constructor() {
        this.savininkas = 'Parduotuve';  //this rodo i objekta
        this.kanalas = null;
    }
    pirkimas(vardas) {
        this.savininkas = vardas;
    }

    perjungtiKanala(nr) {
        this.kanalas = nr;
    }

    infoApieTv() {
        console.log(
            `
            Savininkas: ${this.savininkas} 
            Kanalas: ${this.kanalas}
            Programa: ${TV.programa[this.kanalas]}
            `
        );
    }
}

const tv1 = new TV();
const tv2 = new TV();
const tv3 = new TV();

tv2.pirkimas('Antanas');

TV.naujaPrograma = (['BTV', 'TV6', 'MTV', 'Eurosport']);


tv3.pirkimas('Birute');
tv3.perjungtiKanala(3);
tv2.perjungtiKanala(2);

tv1.infoApieTv();
tv2.infoApieTv();
tv3.infoApieTv();