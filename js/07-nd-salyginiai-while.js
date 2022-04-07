// 1 //

let n = 0;
let suma = 0;

while (suma < 100) {
    n = Math.floor(Math.random() * 10) + 1;
    //console.log(n);                              skaiciai
    suma += n;  

    console.log(suma);
}



console.log('-----------------------------');

// 2 //

let n2 = 0;
let suma2 = 0;

while (suma2 % 7 !== 0  || suma2 === 0) {
    n2 = Math.floor(Math.random() * 10) + 1;
    suma2 += n2;

    console.log(suma2);
}


console.log('-----------------------------');

// 3 //

let m = 17;     // knygoje yra m skyriu // skaitys iki kol knygoj bus skyriu
let d = 0;      // dienos / visa knyga per 4 dienas jei skyriu 8
let s = 0;      // skyriu perskaito per diena vidutiniskai

let skyriuPerDiena = m / d;

while (s <= m) {
    d++;
    s += d;                     // d + s   (kasdien vienu skyriumi daugiau)
    //console.log(s);
    skyriuPerDiena = m / d
}
console.log(`Tadas visa knyga perskaitys per ${d} dienas`);
console.log(`Tadas vidutiniskai perskaite po ${skyriuPerDiena.toFixed(2)} skyrius per diena`);



console.log('-----------------------------');

// 4 //

let skaicius = 0;

while (skaicius !== 5) {
    skaicius = Math.floor(Math.random() * 10);

    console.log(skaicius);
}

console.log('-----------------------------');

// 5 //

let skaicius2 = 0;
let kartai = 0;

while (skaicius2 !== 5 && skaicius2 !== 7) {        // 5 arba 7
    skaicius2 = Math.floor(Math.random() * 10);
    kartai++

    console.log(skaicius2);
}

console.log(`Ciklas prasisuko ${kartai} kartus`);

console.log('-----------------------------');