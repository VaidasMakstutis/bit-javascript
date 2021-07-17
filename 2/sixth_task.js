function rand(min, max) {  //funkcija generuoja atsitiktinius skaicius uzduotame intervale

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let candlePrice = 1;  //Zvakes kaina
let candleQty = rand(5, 3000);   //Generuojamas zvakes kiekis
let subtotal = 0;  //Tarpine suma
let additionalDiscount1 = 0.03;  //Discount 3%
let additionalDiscount2 = 0.04;  //Discount 4%
let amountWithDiscount1 = 0;  //Suma pritaikius discount 3%
let amountWithDiscount2 = 0;  //Suma pritaikius discount 4%
let amountWithoutDiscount = 0;  //Suma nepritaikius discount

console.log('Sugeneruotas pradinis kiekis: ' + candleQty);
console.log('Pradine vieneto kaina: ' + candlePrice);
subtotal = candleQty * candlePrice;
console.log('Tarpine suma: ' + subtotal);

if (subtotal > 1000 && subtotal < 2000) {
amountWithDiscount1 = subtotal - (subtotal * additionalDiscount1);
candlePrice = amountWithDiscount1 / candleQty;
console.log('Suma pritaikius nuolaida 3%: ' + amountWithDiscount1);
console.log('Perkamas zvakiu kiekis: ' + candleQty);
console.log('Vieneto kaina pritaikius nuolaida 3%: ' + candlePrice.toFixed(2));
}

else if (subtotal > 2000) {
amountWithDiscount2 = subtotal - (subtotal * additionalDiscount2);
candlePrice = amountWithDiscount2 / candleQty;
console.log('Suma pritaikius nuolaida 4%: ' + amountWithDiscount2);
console.log('Perkamas zvakiu kiekis: ' + candleQty);
console.log('Vieneto kaina pritaikius nuolaida 4%: ' + candlePrice.toFixed(2));
}

else {
amountWithoutDiscount = subtotal;
candlePrice = amountWithoutDiscount / candleQty;
console.log('Suma be nuolaidos: ' + amountWithoutDiscount);
console.log('Perkamas zvakiu kiekis: ' + candleQty);
console.log('Vieneto kaina be nuolaidos: ' + candlePrice);
}