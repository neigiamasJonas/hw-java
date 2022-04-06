// 1 //

function suma(a, b) {
    return a + b
}
console.log(suma(2, 4));

console.log('----------------');

// 2 //

function lygina(a, b) {
    if (a > b) {
        return 'Pirmas skaicius didesnis uz antra';
    }
    if (a < b) {
        return 'Antras skaicius didesnis us pirma';
    }
    if (a = b) {
        return "Skaiciai yra lygus";
    }
}
console.log(lygina(5, 5));

console.log('----------------');

// arba //

function lygina2(a, b) {
    if (a > b) {
        return 'Pirmas skaicius didesnis uz antra';
    } else if (a < b) {
        return 'Antras skaicius didesnis us pirma';
    } else {
        return "Skaiciai yra lygus";
    }
}
console.log(lygina2(6, 6));

console.log('----------------');

// 3 //

function metai(a) {
    if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
        return 'Metai keliamieji'
    } else {
        return 'Metai nekeliamieji'
    }
}
console.log(metai(1601));

console.log('----------------');

// 4 //

function square(a) {
    return a*a;
}
console.log(square(5));

console.log('----------------');

// 5 //

function suma2(a) {
    let suma = 0;
    if (a > 1) {
        for (i = 1; i <= a; i++) {
            suma += i;
        }
    } else {
        return 'Skaicius turi buti didesnis uz viena';
    }
    return suma;
}

console.log(suma2(5));

console.log('----------------');

// 6 //

function sveikas(a) {
    let skaiciai = [];
    for (i = 0; i < a; i++) {
        if (a % i === 0 && i !== 1) {
            skaiciai.push(i);
        }
    }
    return skaiciai;
}
console.log(sveikas(10));

console.log('----------------');

// 7 //

function tekstas(text) {
    return `${text} sudaro ${text.length} raides`
}

console.log(tekstas('velykos'));

console.log('----------------');

// 8 //

function telNr(a) {
    return [a];
}

console.log(telNr(1234567890));

// cia sustojau / nespejau dar / nebesigalvoja //