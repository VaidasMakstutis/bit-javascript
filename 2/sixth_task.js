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
let finalAmount = 0;  //Galutine suma pritaikius/nepritaikius discount

console.log('Sugeneruotas pradinis kiekis: ' + candleQty);
console.log('Pradine vieneto kaina: ' + candlePrice);
subtotal = candleQty * candlePrice;
console.log('Tarpine suma: ' + subtotal);

if (subtotal > 1000 && subtotal < 2000) {
finalAmount = subtotal - (subtotal * additionalDiscount1);
candlePrice = finalAmount / candleQty;
console.log('Suma pritaikius nuolaida 3%: ' + finalAmount);
console.log('Perkamas zvakiu kiekis: ' + candleQty);
console.log('Vieneto kaina pritaikius nuolaida 3%: ' + candlePrice.toFixed(2));
}

else if (subtotal > 2000) {
finalAmount = subtotal - (subtotal * additionalDiscount2);
candlePrice = finalAmount / candleQty;
console.log('Suma pritaikius nuolaida 4%: ' + finalAmount);
console.log('Perkamas zvakiu kiekis: ' + candleQty);
console.log('Vieneto kaina pritaikius nuolaida 4%: ' + candlePrice.toFixed(2));
}

else {
finalAmount = subtotal;
candlePrice = finalAmount / candleQty;
console.log('Suma be nuolaidos: ' + finalAmount);
console.log('Perkamas zvakiu kiekis: ' + candleQty);
console.log('Vieneto kaina be nuolaidos: ' + candlePrice);
}