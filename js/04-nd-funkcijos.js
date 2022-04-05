let uzdavinioNr = 1;
console.log(`${uzdavinioNr})`);

// tuscia funkcija

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

console.log('-----------------------------');
uzdavinioNr += 1;
console.log(`${uzdavinioNr})`);

// daugyba

function daugyba(skaicius1, skaicius2) {
    if (typeof skaicius1 !== "number" || isNaN(skaicius1)) {
        return `Error: skaicius1 turi buti skaicius`;
}
    if (typeof skaicius2 !== "number" || isNaN(skaicius2)) {
        return `Error: skaicius2 turi buti skaicius`;
    }

    return skaicius1 * skaicius2;
}

console.log( daugyba( 1, 5 ) );
console.log( daugyba( 2, 6 ) );
console.log( daugyba( -3, 7 ) );

console.log( daugyba( 1, 'a' ) );
console.log( daugyba( 'as', 6 ) );
console.log( daugyba( 'tu', 'jis' ) );
console.log( daugyba( '', 5 ) );
console.log( daugyba( 2, '' ) );

console.log( daugyba( false, 5 ) );
console.log( daugyba( 2, false ) );
console.log( daugyba( Infinity, 7 ) );
console.log( daugyba( 1, Infinity ) );
console.log( daugyba( -Infinity, 6 ) );
console.log( daugyba( 3, -Infinity ) );

console.log( daugyba( 3, [] ) );
console.log( daugyba( [], 7 ) );
console.log( daugyba( 3, [7, 4, 6] ) );
console.log( daugyba( [7, 4, 6], 7 ) );

console.log(daugyba(7, NaN));
console.log(daugyba(NaN, 5));

console.log('-----------------------------');
uzdavinioNr += 1;
console.log(`${uzdavinioNr})`);

// Skaitmenu kiekis skaiciuje

function skaitmenuKiekisSkaiciuje(num) {
    if (typeof num !== "number" || !isFinite(num)) {
        return `Pateikta netinkamo tipo reikšmė.`
    }

    const skaiciaiKaipString = '' + num;
    let skaiciuKiekis = skaiciaiKaipString.length;

    if (num % 1 !== 0) {
        skaiciuKiekis--;
    }
    if (num < 0) {
        skaiciuKiekis--;
    }

    return skaiciuKiekis;
}

console.log( skaitmenuKiekisSkaiciuje( 5 ), `---> 1` );
console.log( skaitmenuKiekisSkaiciuje( 781 ), `---> 3` );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), `---> 11` );

console.log( skaitmenuKiekisSkaiciuje( 3.706 ), `---> 4` );
console.log( skaitmenuKiekisSkaiciuje( -3.706 ), `---> 4` );

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );
console.log( skaitmenuKiekisSkaiciuje( [2, 4]) );
console.log( skaitmenuKiekisSkaiciuje( [] ) );
console.log( skaitmenuKiekisSkaiciuje());

console.log('-----------------------------');
uzdavinioNr += 1;
console.log(`${uzdavinioNr})`);

// Didziausias skaicius sarase

function DidziausiasSkaiciusSarase(sarasas) {
    if (typeof sarasas !== "object") {
        return `Pateikta netinkamo tipo reikšmė`
    }
    if (sarasas.length === 0) {
        return `Pateiktas sąrašas negali būti tuščias`
    }

    let didziausias = -Infinity;    // pradejau su 0

    for (let a = 0; a < sarasas.length; a++) {
        const numeris = sarasas[a];
        
        if (typeof numeris !== "number" || !isFinite(numeris)) {
            continue;
        }
        if (numeris > didziausias) {
            didziausias = numeris;
        }
    }
    if (didziausias === -Infinity) {
        return `Tokio skaiciaus negali buti`
    }
    return didziausias;
}



console.log(DidziausiasSkaiciusSarase([5]), '--->', 5);
console.log(DidziausiasSkaiciusSarase([1, 2, 3]), '--->', 3);
console.log(DidziausiasSkaiciusSarase([1, 3, 2]), '--->', 3);
console.log(DidziausiasSkaiciusSarase([-5, 78, 14, 0, 18]), '--->', 78);
console.log(DidziausiasSkaiciusSarase([69, 69, 69, 69, 66]), '--->', 69);
console.log(DidziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]), '--->', -1);

console.log(DidziausiasSkaiciusSarase('pomidoras'), '--->', 'ERROR');
console.log(DidziausiasSkaiciusSarase([]), '--->', 'ERROR');
console.log(DidziausiasSkaiciusSarase(['x']), '--->', 'ERROR');
console.log(DidziausiasSkaiciusSarase(['x', true, [], -Infinity, NaN, Infinity]), '--->', 'ERROR');

console.log(DidziausiasSkaiciusSarase([1, 2, 3, 'x']), '--->', 3);
console.log(DidziausiasSkaiciusSarase([1, 2, 'x', 3]), '--->', 3);
console.log(DidziausiasSkaiciusSarase([1, 'x', 2, 3]), '--->', 3);
console.log(DidziausiasSkaiciusSarase(['x', 1, 2, 3]), '--->', 3);
console.log(DidziausiasSkaiciusSarase([true, -1]), '--->', -1);

console.log('-----------------------------');
uzdavinioNr += 1;
console.log(`${uzdavinioNr})`);

// Isrinkti raides

function isrinktiRaides(tekstas, kasKiek) {
    if (typeof tekstas !== 'string') {
        return `Pirmasis kintamasis yra netinkamo tipo`;
    }
    if (tekstas === '') {
        return `Tekstas negali buti tuscias`;
    }
    if (tekstas.length > 100) {
        return `teksto ilgis negali buti didesnis nei 100 simboliu`;
    }
    if (typeof kasKiek !== "number") {
        return `Antrasis kintamasis yra netinkamo tipo`;
    }
    if (kasKiek === 0) {
        return `Antrasis kintamasis turi būti nelygus nuliui`;
    }
    if (kasKiek > tekstas.length) {
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį`;
    }
    if (kasKiek % 1 !== 0) {
        return `Antrasis kintamasis turi būti sveikasis skaicius`;
    }
    let raides = ''

    if (kasKiek > 0) {
        for (let a = kasKiek - 1; a < tekstas.length; a += kasKiek ) {
            raides += tekstas[a];
        }
    } else {
        for (let a = tekstas.length + kasKiek; a >= 0; a+= kasKiek) {
            raides += tekstas[a];
        }

    }

    return raides;

}

console.log(isrinktiRaides('abcdefg', 2), '-->', 'bdf');
console.log(isrinktiRaides('abcdefghijkl', 3), '-->', 'cfil');
console.log(isrinktiRaides('abcdefghijkl', 4), '-->', 'dhl');

console.log(isrinktiRaides('abcdefg', -2), '-->', 'fdb');
console.log(isrinktiRaides('abcdefghijkl', -3), '-->', 'jgda');
console.log(isrinktiRaides('abcdefghijkl', -4), '-->', 'iea');

console.log(isrinktiRaides(1561, 2), '-->', 'ERROR');
console.log(isrinktiRaides('labas', 'iki'), '-->', 'ERROR');
console.log(isrinktiRaides('labas', NaN), '-->', 'ERROR');
console.log(isrinktiRaides('labas', -Infinity), '-->', 'ERROR');
console.log(isrinktiRaides('labas', Infinity), '-->', 'ERROR');
console.log(isrinktiRaides('labas', 1.111111), '-->', 'ERROR');
console.log(isrinktiRaides('abc', 0), '-->', 'ERROR');
console.log(isrinktiRaides('abc', 4), '-->', 'ERROR');
console.log(isrinktiRaides('', 4), '-->', 'ERROR');