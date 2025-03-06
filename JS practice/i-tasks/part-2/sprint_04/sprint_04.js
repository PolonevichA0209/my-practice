// iTGid.info - курс JS24/2

// В задачах, где говорится пробел - применяем символ пробела - нажатие на клавишу space.
// Там где говорится дефис - подразумевается черта на клавиатуре "минус", между символами 0 и =

// Task 01
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 4=4 3 2 1 0 3=4 3 2 1 0 2=4 3 2 1 0 1=4 3 2 1 0 0=4 3 2 1 0
// и выводит в .out-1.
// Напоминаю. Если можно избежать, то не делайте вывод на страницу внутри цикла.

const out1 = document.querySelector('.out-1');

const t01 = () => {
    let str = '';
    for (let i = 4; i >= 0; i--) {
        str += `${i}=`;
        for (k = 4; k >= 0; k--) {
            str += `${k} `;
        }
    }
    out1.textContent = str;
};

document.querySelector('.b-1').addEventListener('click', t01);

// Task 02
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 0****<br>1****<br>2****<br>3****<br>4****<br>
// и выводит в .out-2 с помощью innerHTML

const out2 = document.querySelector('.out-2');

const t02 = () => {
    let str = '';
    for (let i = 0; i < 5; i++) {
        str += `${i}`
        for (let k = 0; k < 4; k++) {
            str += '*';
        }
        str += '<br>'
    }
    out2.innerHTML = str;
};

document.querySelector('.b-2').addEventListener('click', t02);


// Task 03
// Функция должна выводить прямоугольник на страницу состоящий из символов звездочка. В горизонтали 6 звездочек, количество линий - число, которое пользователь ввел в input.i-3.
// Перенос строки делайте с помощью тега br.

const out3 = document.querySelector('.out-3');

const t03 = () => {
    const val = +document.querySelector('.i-3').value;
    let str = '';
    for (let i = 1; i <= val; i++) {
        for (let k = 0; k < 6; k++) {
            str += '*';
        }
        str += '<br>';
    }
    out3.innerHTML = str;
};

document.querySelector('.b-3').addEventListener('click', t03);


// Task 04
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали 6 чисел от 5 до нуля, количество линий - число, которое пользователь ввел в input.i-4.
// Перенос строки делайте с помощью тега br.

const out4 = document.querySelector('.out-4');

const t04 = () => {
    const val = +document.querySelector('.i-4').value;
    let str = '';
    for (let i = 1; i <= val; i++) {
        for (let k = 5; k >= 0; k--) {
            str += `${k}_`;
        }
        str += '<br>';
    }
    out4.innerHTML = str;
};

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали числа от введенного в input.i-51 до нуля, количество линий - число, которое пользователь ввел в input.i-52.
// Перенос строки делайте с помощью тега br.

const out5 = document.querySelector('.out-5');

const t05 = () => {
    const val1 = +document.querySelector('.i-51').value;
    const val2 = +document.querySelector('.i-52').value;
    let str = '';
    for (let i = 1; i <= val2; i++) {
        for (let k = val1; k >= 0; k--) {
            str += `${k}_`;
        }
        str += '<br>';
    }
    out5.innerHTML = str;
};

document.querySelector('.b-5').addEventListener('click', t05);


// Task 06
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-6

const out6 = document.querySelector('.out-6');

const t06 = () => {
    let str = '';
    for (let i = 0; i < 3; i++) {
        str += '| ';
        for (let k = 0; k < 4; k++) {
            str += '* ';
        }
        str += '|<br>';
    }
    out6.innerHTML = str;
};

document.querySelector('.b-6').addEventListener('click', t06);


// Task 07
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-7.

const out7 = document.querySelector('.out-7');

const t07 = () => {
    let str = '';
    for (let i = 0; i < 5; i++) {
        str += '| ';
        for (k = 0; k < 4; k++) {
            if (i === 0 || i === 4) {
                str += '- ';
            }
            else {
                str += '* ';
            }
        }
        str += '|<br>';
    }
    out7.innerHTML = str;
};

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Функция должна рисовать такую фигуру
//10x01x%
//10x01x
//10x01x
// и выводить в .out-08
const out8 = document.querySelector('.out-8');

const t08 = () => {
    let str = '';
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            str += `10x01x%<br>`;
        }
        else {
            str += `10x01x<br>`;
        }
    }
    out8.innerHTML = str;
};

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Функция должна рисовать такую фигуру
// и выводить в .out-09

const out9 = document.querySelector('.out-9');

const t09 = () => {
    let str = '';
    for (let i = 0; i < 6; i++) {
        if (i % 2 === 0) {
            str += `010101<br>`;
        }
        else {
            str += `101010<br>`;
        }
    }
    out9.innerHTML = str;
};

document.querySelector('.b-9').addEventListener('click', t09);


// Task 10
// Функция должна вывести в .out-10 такую строку:
// 5 0 4 1 3 2 2 3 1 4 0 5

const out10 = document.querySelector('.out-10');

const t10 = () => {
    let str = '';

    out10.textContent = str;
};

document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// Функция должна рисовать такую фигуру
// и выводить в .out-11

const out11 = document.querySelector('.out-11');

const t11 = () => {
    let str = '';
    for (let i = 1; i < 5; i++) {
        for (let k = 0; k < i; k++) {
            str += '*';
        }
        str += '<br>';
    };
    out11.innerHTML = str;
};

document.querySelector('.b-11').addEventListener('click', t11);



// Task 12
// Функция должна рисовать такую фигуру
// и выводить в .out-12

const t12 = () => {

};

document.querySelector('.b-12').addEventListener('click', t12);


// Task 13
// Функция должна рисовать такую фигуру
// и выводить в .out-13


const t13 = () => {

};

document.querySelector('.b-13').addEventListener('click', t13);


// Task 14
// Функция должна рисовать такую фигуру
// и выводить в .out-14


const t14 = () => {

};

document.querySelector('.b-14').addEventListener('click', t14);

// Task 15
// Функция должна рисовать такую фигуру
// и выводить в .out-15


const t15 = () => {

};

document.querySelector('.b-15').addEventListener('click', t15);


// Task 16
// Функция должна рисовать такую фигуру
// и выводить в .out-16


const t16 = () => {

};

document.querySelector('.b-16').addEventListener('click', t16);


// Task 17
// Функция должна рисовать такую фигуру
// и выводить в .out-17


const t17 = () => {

};

document.querySelector('.b-17').addEventListener('click', t17);


// Task 18
// Функция должна рисовать такую фигуру
// и выводить в .out-18


const t18 = () => {

};

document.querySelector('.b-18').addEventListener('click', t18);



// Task 19
// Функция должна рисовать такую фигуру
// и выводить в .out-19


const t19 = () => {

};

document.querySelector('.b-19').addEventListener('click', t19);


// Task 20
// Функция должна рисовать такую фигуру
// и выводить в .out-20


const t20 = () => {

};

document.querySelector('.b-20').addEventListener('click', t20);