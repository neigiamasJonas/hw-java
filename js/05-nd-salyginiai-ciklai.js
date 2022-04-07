// 1 // naudojant cikla atspausdinti penkias eilutes "Labas"

const labas = 'Labas'

for (a = 0; a < 5; a++) {
    console.log(labas);
}
console.log('--------------------------');

// 2 // naudojant cikla penkiose eilutese atspausdinti skaicius 0 1 2 3 4 (vienas skaicius vienoje eiluteje)

for (a = 0; a < 5; a++) {
    console.log(a);
}
console.log('--------------------------');

// 3 // naudojant cikla penkiose eilutese atspausdinti skaicius 0 10 20 30 40 (vienas skaicius vienoje eiluteje)

for (a = 0; a < 5; a++) {
    console.log(a * 10);
}
console.log('--------------------------');

// 4 //  naudojant cikla penkiose eilutese atspausdinti skaicius 49 50 51 52 53 (vienas skaicius vienoje eiluteje)

for (a = 49; a < 54; a++) {
    console.log(a);
}
console.log('--------------------------');

// 5 // naudojant cikla penkiose eilutese atspausdinti skirtingus atsitiktinius skaicius nuo 0 iki 10 (vienas skaicius vienoje eiluteje)

let skaiciai4 = 0;

for (let a = 0; a < 5; a++) {
    skaiciai4 = Math.floor(Math.random() * 10);
    console.log(skaiciai4);
}
console.log('--------------------------');

// 6 // naudojant cikla atspausdinti skaicius nuo 1 iki 20, nespausdinant skaiciu kurie dalinasi is 3

for (let a = 1; a<=20; a++) {
    if ([a] % 3 === 0) {
        continue;
    }
    else {
        console.log(a);
    }
}

// arba //

for (let a = 1; a<=20; a++) {
    if ([a] % 3 !== 0) {
        console.log(a);
    }
}
console.log('--------------------------');

// 7 // parasykite programa, kuri atspausdintu ivesto skaiciaus daugybos lentele nuo 1 iki 10

const skaicius = 5;

for (let a = 1; a <=10; a++) {
    daugyba = skaicius * a;
    console.log(daugyba);
}
console.log('--------------------------');

// 8 // vienas colis yra 2,54cm. Sudaryt programa, kuri atspausdintu lentele nuo 1 iki n coliu/centimetrais

const n = 5;

for (let a = 1; a <= n; a++) {
    colis = 2.54 * a;
    console.log(`${a} coliu sudaro ${colis} centimetrai`);
}
console.log('--------------------------');

// 9 // bankas moka 2% palukanu. idejo 100e. sudaryti kasmetine ataskaita iki n metu (metai/palukanos/indelis)

const metai = 4;

const palukanos = 0.02;
const indelis = 100;

let dabarTuriu = indelis;


for (a = 1; a <= metai; a++) {
    palu = dabarTuriu * palukanos;
    dabarTuriu += dabarTuriu * palukanos;
   
    console.log(`Po ${a} metu gausiu ${palu.toFixed(2)} euru palukanu ir turesiu ${dabarTuriu.toFixed(2)} euru`);
}


console.log('--------------------------');

10 // keliamieji metai turi 366, paprastieji 365.

for (a = 0; a <= 2022; a++) {
    if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)){
        console.log(`${a} metai yra keliamieji`);
    }
}

