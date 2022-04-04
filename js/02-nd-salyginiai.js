 // SALYGINIAI UZDAVINIAI (mini) //

// 1 //

const n = 20;
console.log(n);

if (n >= 0) {
    console.log('Geras');
} else {
    console.log('Blogas');
}

console.log('-------------------------------------');

// 2 //

let n2 = 2;

if (n2 === 1) {
    console.log('Eikite');
} else if (n2 === 2) {
    console.log('Palaukite');
} else if (n2 === 3) {
    console.log('Neikite');
} else {
    console.log('error');
}

console.log('-------------------------------------');

// 3 //

let k = 18;         // knygos //
let d = 3;          // dezes //
let n3 = 5;         // knygos telpa dezeje //

n3 = 5;

if (k / n3 <= d) {
    console.log('Knygos telpa i dezes');
} else {
    console.log('Knygos netelpa i dezes');
}

console.log('-------------------------------------');

// 4 //

let a = 1;
let b = 4;

if (a > b) {
    console.log(--a, ++b);
} else if (a < b) {
    console.log(++a, --b);
}

console.log('-------------------------------------');

// 5 //

const c = 73;                     // centai //
const p = 20;                     // viena porcija //
const kk = Math.floor(c / p);
const graza = (c - kk*p);

console.log(`Saulius nusipirks ${kk} porcijas ir jam liks ${graza} centu`);

console.log('-------------------------------------');

// 6 //

const n4 = 7;                         // degtukai //

if (n4 % 3 === 0) {
    console.log('Trikampi sudelioti galima');
} else {
    console.log('Trikampio sudelioti negalima');
}

console.log('-------------------------------------');

// 7 //

const men = 6;             // menesis //
let d1 = 0;

if (men === 1 || men === 3 || men === 5 || men === 7 || men === 8 || men === 10 || men === 12) {
    d1 = 31;
    console.log(`${men} menesis turi ${d1} diena.`);
} else if (men === 2) {
    d1 = 28;
    console.log(`${men} menesis turi ${d1} dienas.`);
} else {
    d1 = 30;
    console.log(`${men} menesis turi ${d1} dienu.`);
}

console.log('-------------------------------------');

// 8 //

const kamb = 4;               // kauliuko skaicius //

if (kamb % 2 !== (0) && kamb < 6 ) {
    console.log('Kambari tvarkys jaunelis');
} else if (kamb % 2 === 0 && kamb <=6) {
    console.log('Kambari tvarkys vyresnelis');
} else if (kamb > 6) {
    console.log('Kambari tvarkys mama');
}

console.log('-------------------------------------');

// 9 //

// 1896 pirmosios olimpines / vyksta kas 4 metai / [nr] turi rodyti olimpiniu numeri //

const metai = 1904;                     // kintamasis //
const skirtumas = metai - 1896;         // skirtumas tarp kintamojo ir pradzios metu //
const liekana = skirtumas % 4;          // surandama liekana nuo skirtumo, jei liekana bus, vadinasi metai nebus olimpiniai //
const nr = skirtumas / 4 + 1;           

if (liekana === 0) {
    console.log(`Olimpines zaidynes, kuriu numeris ${nr}`);
} else {
    console.log('Metai neolimpiniai');
}

// 10 //

const v1 = 8;       // laikrodis rodo 'valandu'
const m1 = 29;       // laikrodis rodo 'minuciu'
const m2 = 23;       // kelione trunka 'minuciu'
const v = 9;        // pamoka prasideda 'valandu'
const m = 5;        // pamoka prasideda 'minuciu'

// parasyti programa ar petras nepaveluos i pamoka prasidedancia v 'valandu ir m 'minuciu

const laikrodisRodo = v1 * 60 + m1;
const pamokuPradzia = v * 60 + m;
const kelioneTrunka = laikrodisRodo + m2;

if (kelioneTrunka <= pamokuPradzia) {
    console.log('Petras i pamoka nepaveluos');
}   else if (kelioneTrunka > pamokuPradzia) {       // galima naudoti tik "else"
    console.log('Petras i pamoka paveluos');
}
