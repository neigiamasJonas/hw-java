let uzdavinioNr = 1;
console.log(`${uzdavinioNr})`);

// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai): //

function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let a = nuo; a <= iki; a++) {
        suma += a;
    }
    return suma;
}

console.log('Skaiciu suma nuo 0 iki 0 =', sumaIntervale(0, 0));
console.log('Skaiciu suma nuo 0 iki 4 =', sumaIntervale(0, 4));
console.log('Skaiciu suma nuo 0 iki 100 =', sumaIntervale(0, 100));
console.log('Skaiciu suma nuo 574 iki 815 =', sumaIntervale(574, 815));
console.log('Skaiciu suma nuo -50 iki 50 =', sumaIntervale(-50, 50));
console.log('Skaiciu suma nuo -70 iki 30 =', sumaIntervale(-70, 30));

console.log('----------------------------------------------');

uzdavinioNr += 1;
console.log(`${uzdavinioNr})`);

// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo //
// abcdef / fedcba //

function reverseString(text) {
    let reverse = '';
    for (let a = 0; a < text.length; a++) {
        const position = (text.length -1) - a;
        reverse += text[position];
    }
    return reverse;
}
console.log(reverseString('abcdefgh'));

function reverseString2(text) {
    let reverse = '';
    for (let a = text.length - 1; a >= 0; a--) {
        reverse += text[a]
    }
    return reverse
}
console.log(reverseString2('Povilas'));

console.log('----------------------------------------------');

uzdavinioNr = ++uzdavinioNr;
console.log(`${uzdavinioNr})`);

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai //

function liekana(nuo, iki, daliklis) {
    let dalintojas = 0;
    for (let a = nuo; a <= iki; a++) {
        if (a % daliklis === 0) {
            dalintojas++
        }
    }
    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${dalintojas} vienetai.`
}

console.log(liekana(0, 11, 3));
console.log(liekana(0, 11, 5));
console.log(liekana(0, 11, 7));

console.log('--------------------');

function liekana(nuo, iki, daliklis) {
    let skaicius = 0;
    for (let b = nuo; b <= iki; b++) {
        if (b % daliklis === 0) {
            skaicius++
        }
    }
    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${skaicius} vienetai.`
}

console.log(liekana(8, 31, 3));
console.log(liekana(8, 31, 5));
console.log(liekana(8, 31, 7));
console.log(liekana(-18, 18, 3));
console.log(liekana(-18, 18, 5));
console.log(liekana(-18, 18, 7));
