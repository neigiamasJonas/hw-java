// JAVA SCRIPT MINI UZDUOTYS //

// Kintamuju inicijavimas //

const pirmasSkaicius = 2;
console.log('Pirmas skaicius', pirmasSkaicius);

const antrasSkaicius = 4;
console.log('Antras skaicius', antrasSkaicius);

const treciasSkaicius = 7;
console.log('Trecias skaicius', treciasSkaicius);

// 1 (Veiksmai su kintamaisiais) //
const visuSkaiciuSuma = 'suma'
console.log('Visu skaiciu suma =', pirmasSkaicius + antrasSkaicius + treciasSkaicius);

console.log('----------------------------------------------------------------------');

const pirmasZodis = 'Kas';
console.log('Pirmas zodis -', pirmasZodis);

const antrasZodis = 'Ravi';
console.log('Antras zodis -', antrasZodis);

const treciasZodis = 'Siena';
console.log('Trecias zodis -', treciasZodis);

// 2 (Veiksmai su kintamaisiais) //
const zodziaiSuTarpais = 'zodiai su tarpais'
console.log('Zodiai su tarpais -', pirmasZodis, antrasZodis, treciasZodis);

console.log('----------------------------------------------------------------------');

const pirmoSarNr = [1,3,5,7,10];
console.log('Pirmo saraso numeriai', pirmoSarNr);
console.log('Pirmo saraso suma:', pirmoSarNr[0] - pirmoSarNr[1] + pirmoSarNr[2] - pirmoSarNr[3] + pirmoSarNr[4]); // 3 (veiksmai su kintamaisiais)//


const antroSarNr = [2,4,6,8,9];
console.log('Antro saraso numeriai', antroSarNr);
console.log('Antro saraso suma:', antroSarNr[0] - antroSarNr[1] + antroSarNr[2] - antroSarNr[3] + antroSarNr[4]); // 3 (veiksmai su kintamaisiais)//

const trecioSarNr = [12,34,56,78,910];
console.log('Trecio saraso numeriai', trecioSarNr);
console.log('Trecio saraso suma', trecioSarNr[0] - trecioSarNr[1] + trecioSarNr[2] - trecioSarNr[3] + trecioSarNr[4]); // 3 (veiksmai su kintamaisiais)//

console.log('----------------------------------------------------------------------');

const pirmoSarZodziai = ['Kas','turi','paskolinti','geltona','flomasteri'];
console.log('Pirmo saraso zodiai', pirmoSarZodziai);
console.log('Pirmo saraso verciu sujungimas su kableliu ir tarpu - ', `${pirmoSarZodziai[0]}, ${pirmoSarZodziai[1]}, ${pirmoSarZodziai[2]}, ${pirmoSarZodziai[3]}, ${pirmoSarZodziai[4]}?`); // 4 (veiksmai su kintamaisiais)//

const antroSarZodziai = ['Kodel','tu','klausi','jeigu','zinai'];
console.log('Antro saraso zodiai', antroSarZodziai);
console.log('Antro saraso verciu sujungimas su kableliu ir tarpu -', `${antroSarZodziai[0]}, ${antroSarZodziai[1]}, ${antroSarZodziai[2]}, ${antroSarZodziai[3]}, ${antroSarZodziai[4]}?`); // 4 (veiksmai su kintamaisiais)//

const trecioSarZodziai = ['Kiek','tau','kartu','reiks','kartoti'];
console.log('Trecio saraso zodiai', trecioSarZodziai);
console.log('Trecio saraso verciu sujungimas su kableliu ir tarpu -', `${trecioSarZodziai[0]}, ${trecioSarZodziai[1]}, ${trecioSarZodziai[2]}, ${trecioSarZodziai[3]}, ${trecioSarZodziai[4]}?`); // 4 (veiksmai su kintamaisiais)//

console.log('----------------------------------------------------------------------');

// KINTAMUJU PALYGINIMAS //

    // 1 //
const a = 22;
const b = 9;
//a//
if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
//b//
if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
//c//
if (a == b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
//d//
if (a != b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}
//e//
if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('bandykite dar karta');
}
//f//
if (a <= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('----------------------------------------------------------------------');

    // 2 //
const text1 = 'agurkas';
const text2 = 'agurotis';

const text1Length = text1.length;
console.log(text1Length);

const text2Length = text2.length;
console.log(text2Length);

    // 3 //
//a//
if (text1Length > text2Length) {
    console.log('Agurkiene');
} else {
    console.log('Sriubos nebus');
}
//b//
if (text1Length < text2Length) {
    console.log('Agurkiene');
} else {
    console.log('Sriubos nebus');
}
//c//
if (text1Length == text2Length) {
    console.log('Agurkiene');
} else {
    console.log('Sriubos nebus');
}
//d//
if (text1Length != text2Length) {
    console.log('Agurkiene');
} else {
    console.log('Sriubos nebus');
}
//e//
if (text1Length >= text2Length) {
    console.log('Agurkiene');
} else {
    console.log('Sriubos nebus');
}
//f//
if (text1Length <= text2Length) {
    console.log('Agurkiene');
} else {
    console.log('Sriubos nebus');
}

    // 4 //
const list1 = ['brokolis', 'svogunas', 'cesnakas', 'paprika']
const list2 = ['agurkas', 'pomidoras', 'cukinija']

const list1Length = list1.length
console.log(list1Length);
const list2Length = list2.length
console.log(list2Length);

    // 5 //
//a//
if (list1Length > list2Length) {
    console.log('Pusryciai');
} else {
    console.log('Truksta ingridientu');
}
//b//
if (list1Length < list2Length) {
    console.log('Pusryciai');
} else {
    console.log('Truksta ingridientu');
}
//c//
if (list1Length == list2Length) {
    console.log('Pusryciai');
} else {
    console.log('Truksta ingridientu');
}
//d//
if (list1Length != list2Length) {
    console.log('Pusryciai');
} else {
    console.log('Truksta ingridientu');
}
//e//
if (list1Length >= list2Length) {
    console.log('Pusryciai');
} else {
    console.log('Truksta ingridientu');
}
//f//
if (list1Length <= list2Length) {
    console.log('Pusryciai');
} else {
    console.log('Truksta ingridientu');
}

console.log('----------------------------------------------------------------------');