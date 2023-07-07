'use stricts';

// --------------Type Data (Типи даних)----------------

// --------------------Примітиви-----------
// 1. Number(число)
// 2. BigInt (великі числа)
// 3. String(строка)
// 4. Boolean(булево значенняб логічний тип)
// 5. Null(нул)
// 6. undefined(невизначений)
// 7. Symbol(унікальний id проперті об'єктів)

// ----------Складні типи----------------
// 8. Object(Oб'єкт)

// 1.Number(число)-------------

let numb = 4;
let numb_2 = 4.2;
let numb_3 = 1e6;
let numb_4 = Infinity;
let numb_5 = 10 - 'sdf40'; 
//  NaN - Not a Namber

console.log(typeof numb_5);
console.log(numb_5);

// -------BigInt (великі числа) 2 в 53 - 1---------------

let bigNumb = 10000000000000000000000000000000000;

console.log(bigNumb);
console.log(typeof bigNumb);


// 3.String (Строка)-----------------
// '', "",``
let str = 'I like';
let str_2 = 'Beetroot';
let cuurentYear = '2023';

let str_3 = `${str} - ${str_2} from ${2024 - 1} years`;
let str_4 = str +' - ' + str_2 + 'from' + cuurentYear + 'years';

console.log(typeof str);
console.log(typeof str-2);
console.log(str_3);
console.log(str_4);

// 4. Boolean (булево значення)------------

let bool_1 = true;
let bool_2 = false;
let someData = '';

console.log(bool_1);
console.log(typeof bool_1);
console.log(bool_2);
console.log(typeof bool_2);
console.log(Boolean(someData));
console.log(typeof someData);


// 5. Null (нулл)----------

let amoumntStudent = null;

console.log(amoumntStudent);
console.log(typeof amoumntStudent);

//  6. Undefined (андефайнед)---------------

let dateFinishCourse;

console.log(dateFinishCourse);
console.log(typeof dateFinishCourse);

// 7. Symbol (Символ)-------------------
let id_1 = Symbol('id');
let id_2 = Symbol('id');

console.log(id_1 === id_2);

let numb_6 = '10';
let numb_7 = 10;

console.log(numb_6 === numb_7);

// 8. Object(об'єкт)-------------------------

// object
// array
// function
// class

let student = {
    name: 'Maryna',
    age: 25,
    city: 'Kyiv',
    academy: 'Beetroot'
}
console.log(typeof student);

let arrNumb = [1,2,3,4,5,6];

console.log(typeof arrNumb);
console.log(arrNumb.length);
// -------------------------------------------

// ---------------Перетворення типів даних-----------


