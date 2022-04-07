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
    if (a === b) {
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
    let skaiciai = 0;
    for (i = 0; i < a; i++) {
        if (a % i === 0 && i !== 1) {
            skaiciai++
        }
    }
    return skaiciai;
}
console.log(sveikas(20));

console.log('----------------');


// function sveikas(a) {
//     let skaiciai = [];
//     for (i = 0; i < a; i++) {
//         if (a % i === 0 && i !== 1) {
//             skaiciai.push(i);
//         }
//     }
//     return skaiciai;
// }
// console.log(sveikas(20));

// console.log('----------------');

// 7 //

function tekstas(text) {
    return `${text} sudaro ${text.length} raides`
}

console.log(tekstas('velykos'));

console.log('----------------');

// 8 //

function telNr(num) {
    if (num.length !== 10) {
        return `Numeris turi tureti 10 skaitmenu`
    } else {
        return `Telefono numeris: (${num.slice(0, 3).join('')}) ${num.slice(3, 6).join('')}-${num.slice(6).join('')}`;
    }
    
}

console.log(telNr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// arba

function telNr2(num) {
    if (num.length !== 10) {
        return `Numeris turi tureti 10 skaitmenu`
    } else {
        let numeris = '(xxx) xxx-xxxx';

        num.forEach(element => {
            numeris = numeris.replace('x', element);
        
    });
    return `Telefono numeris2: ${numeris}`;   
    }
}

console.log(telNr2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log('----------------');

// 9 //

function text(a, b) {
    if (a.length > b.length) {
        return `Pirmas tekstas ilgesnis uz antra`;
    } else if (b.length > a.length) {
        return `Antras tekstas yra ilgesnis uz pirma`;
    } else {
        return `Tekstai yra lygus`;
    }
    
}

console.log(text('rope', 'salota'));

console.log('----------------');

// 10 //

function raides(r) {
    let skaicius = 0;

    for (let i = 0; i < r.length; i++) {
        if (r[i] === 'a') {
            skaicius++
        }
    }
    return `Zodyje yra ${skaicius} "a" raides`;
}

console.log(raides('Matematika'));