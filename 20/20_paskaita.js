const obj2 = {

    savybe1: 'zaluma',
    savybe2: 'geltonuma',
    savybe3: 42,
    savybe4: [1, 5, 6],
    metodas1: function () {
        console.log(this.savybe2);
    },

    metodas2: function () {
        console.log(this.savybe3);
    },

    metodas3: function () {
        console.log(this.savybe1);
    }
};


console.log('--------------1 Uzduotis----------------');

// for (const metodas in obj2) {
//     obj2[metodas]();
// }


console.log('--------------2 Uzduotis----------------');
// for (const metodas in obj2) {
//     if (typeof obj2[metodas] == 'function') {
//         obj2[metodas]();
//     }
//     else {
//         console.log(obj2[metodas]);
//     }
// }


console.log('--------------3 Uzduotis----------------');
for (const metodas in obj2) {
    if (typeof obj2[metodas] == 'function') {
        obj2[metodas]();
    }
}



console.log('----------------------------------------');

let o1 = {
    savybe: 'Labas',
    metodas: function() {console.log(this.savybe)}
}

let o2 = o1;
o1 = 1;

o2.metodas();




console.log('--------------4 Uzduotis----------------');
//Sukurti objekta kalkuliatorių. Objektas turi turėti du metodus suma ir skirtumas ir vieną savybę rezultatas, 
//kuriai būtų priskiriama funkcijų sumavimo arba skirtumavimo rezultatas
//pradžioje rezultatas yra null

const calc = {

    suma: function (a, b) {
        this.rezultatas = a + b;
        this.istorija.push(this.rezultatas);
        return this;
        
    },

    skirtumas: function (a, b) {
        this.rezultatas = a - b;
        this.istorija.push(this.rezultatas);
        return this;
    },

    istrintiIstorija: function () {
        this.istorija = [];
    },

    rezultatas: null,

    istorija: [],

    clear1: () => console.log(this),

    clear2: function() { console.log(this) },

    clear3: function() {
        console.log(1, this.rezultatas);
        // const _this = this;
        return () => {
            console.log(2, this.rezultatas)
        }
    },
};

calc.suma(5,6);
console.log(calc.rezultatas, calc.istorija);

calc.skirtumas(5,4);
console.log(calc.rezultatas, calc.istorija);

calc.suma(10, 15).rezultatas;
console.log(calc.rezultatas, calc.istorija);

calc.suma(10, 15).suma(15, 1).rezultatas;

calc.clear3()();


//5 Uzduotis
console.log('--------------------after clear---------');
calc.istrintiIstorija();
console.log(calc.istorija);

console.log(this);
console.log(window);


console.log('-----------------------------------------');

let a = 'blabla';
let b = 'kuku';


String.prototype.labas = function() {
    console.log('labas, ' + this.valueOf());
}


console.log('%c Oh my heavens! ', 'background: #ff0000; color: #ffffff;');

// for (let i = 1; i < 10; i++) {
//     this.alert('valio');
//     this.confirm('valio');
// }

a.labas();

b.labas();