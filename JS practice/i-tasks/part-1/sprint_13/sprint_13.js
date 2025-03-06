// Task 1
// Все это время мы работали с именованными функциями, т.е. функция имеет имя, по которому можно обращаться к данной функции. Вызывать функцию. Давайте закрепим знания. Напишите функцию t01, которая выводит в .out-1 текст 'work'.

function t01() {
    document.querySelector('.out-1').textContent = 'work';
}

// после написания снимите комментарий со строки ниже и проверьте работу функции
document.querySelector('.b-1').onclick = t01;


// Task 2
// Именованную функцию можно запускать просто указав имя и скобки. Снимите комментарий с кода ниже. Изучите, когда сработает функция. И да, функции можно запускать много раз.

function t02() {
    document.querySelector('.out-2').textContent += 'work ';
}

// снимите комментарий
t02(); t02();


// Task 3
// Мы запускали функцию в таске 2 указывая ее название и ставя скобки после ее имени. Однако есть и другой, более короткий способ - если вам нужно вызвать написанную функцию то можно применить следующий синтаксис (снимите комментарий с кода ниже). Кстати, потом можно вызывать функцию еще и стандартным способом - t3();

(function t03() {
    document.querySelector('.out-3').textContent += 'work ';
})();
//t03();

// Task 4
// Напишите анонимную функцию, которая срабатывает при клике на кнопке .b-4 и выводит в .out-4 строку 'work'.

document.querySelector('.b-4').onclick = function () {
    document.querySelector('.out-4').textContent = 'work';
};


// Тask 5
// Напишите анонимную функцию, которая запускается после объявления. Функция выводит в .out-5 строку 'work'.
(function () {
    document.querySelector('.out-5').textContent = 'work';
})();


// Task 6
// Изучите код ниже. Можно создавать функцию и так. Т.е. мы создаем константу или переменную и присваиваем в нее анонимную функцию.

const t06 = function () {
    document.querySelector('.out-6').textContent += 'work ';
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Давайте рассмотрим функцию ниже. Функция выводит в .out-7 сумму двух переменных. Функция работает, но она жестко завязана на данные переменные. Т.е. функция всегда выводит один и тот же результат. Изучите функцию t07. Функция делает одно и тоже. Всегда. Т.е. даже если мы вызовем функцию t07 много раз - результат будет один и тот же. 

function t07() {
    let a = 6;
    let b = 7;
    document.querySelector('.out-7').textContent = a + b;
}

document.querySelector('.b-7').onclick = t07;

// Task 8
// Давайте сделаем шаг к более универсальной функции. Изучите как работает функция t08.

function t08(a, b) {
    document.querySelector('.out-8').textContent = a + b;
}

document.querySelector('.b-81').onclick = function () {
    t08(100, 200);
}

document.querySelector('.b-82').onclick = function () {
    t08(300, 400);
}

// Task 9
// Напишите функцию t09, которая принимает два числа (как аргументы) и выводит большее число в .out-9.

function t09(a, b) {
    document.querySelector('.out-9').textContent = (a > b) ? a : b;
}

document.querySelector('.b-9').onclick = function () {
    t09(150, 90);  // снимите комментарий для проверки
}


// Task 10
// Напишите функцию t10, которая принимает два числа как аргументы и выводит в .out-10 случайное целое число в указанном диапазоне.

// тут напишите функцию t10

const out10 = document.querySelector('.out-10');

function t10(min, max) {
    out10.textContent = Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector('.b-10').onclick = function () {
    t10(0, 10);  // снимите комментарий для проверки
}

// Task 11
// Напишите функцию t11, которая принимает три числа как аргументы и выводит в .out-11 меньшее из трех чисел.

// тут напишите функцию t11

const out11 = document.querySelector('.out-11');

function t11(a, b, c) {
    if (a < b && a < c) {
        out11.textContent = a;
    } else if (b < a && b < c) {
        out11.textContent = b;
    } else {
        out11.textContent = c;
    }
}

document.querySelector('.b-11').onclick = function () {
    t11(0, 8, -10);  // снимите комментарий для проверки
}

// Task 12
// Напишите функцию t12, которая принимает в качестве аргумента ccылку на изображение, создает через createElement изображение, присваивает полученный как аргумент src, и выводит через append в .out-12.

const out12 = document.querySelector('.out-12');

function t12(link) {
    const img = document.createElement('img');
    img.setAttribute('src', link);
    out12.append(img);
}

document.querySelector('.b-121').onclick = function () {
    t12('./images/28986.jpg');  // снимите комментарий для проверки
}

document.querySelector('.b-122').onclick = function () {
    t12('./images/28983.jpg');  // снимите комментарий для проверки
}

// Task 13
// Напишите функцию t13, которая получает текст, как аргумент, создает параграф с данным текстом и выводит в .out-13 созданный параграф.

const out13 = document.querySelector('.out-13');

function t13(text) {
    const p = document.createElement('p');
    p.textContent = text;
    out13.append(p);
}

document.querySelector('.b-13').onclick = function () {
    const text = document.querySelector('.i-13').value;
    t13(text);
}


// Task 14
// Напишите функцию t14, которая получает два аргумента, первый - класс элемента, который нужно окрасить, второй аргумент - цвет. Функция должна задавать указанному элементу указанный цвет фона через backgroundColor.

function t14(cl, col) {
    const elem = document.querySelector(cl);
    elem.style.backgroundColor = col;
}

document.querySelector('.b-14').onclick = function () {
    t14('.out-14', 'orange');
}

// Task 15
// Напишите функцию t15, которая получает аргумент - имя пользователя и создает гиперссылку, где атрибут href равен '/logout', а текст гиперссылки - текст переданный как аргумент. Добавьте гиперссылке класс 'button', 'button-primary'. С помощь append добавьте созданную ссылку в .out-15.

const out15 = document.querySelector('.out-15');

function t15(name) {
    const a = document.createElement('a');
    a.setAttribute('href', '/logout');
    a.textContent = name;
    a.classList.add('button', 'button-primary');
    out15.append(a);
}

document.querySelector('.b-15').onclick = function () {
    t15('felson@crusader.eu');
}

// Task 16
// Напишите функцию t16, которая получает аргумент - имя пользователя и создает гиперссылку, где атрибут href равен '/logout', а текст гиперссылки - текст переданный как аргумент. Добавьте гиперссылке класс 'button', 'button-primary'. Функция должна ВОЗВРАЩАТЬ созданную гиперссылку.

function t16(name) {
    const a = document.createElement('a');
    a.setAttribute('href', '/logout');
    a.textContent = name;
    a.classList.add('button', 'button-primary');
    return a;
}

document.querySelector('.b-16').onclick = function () {
    const link = t16('kay@tritagonist.eu');
    document.querySelector('.out-16').append(link);
}

// Task 17
// Напишите функцию t17, которая получает два числа как аргументы и ВОЗВРАЩАЕТ случайное целое число в переданном диапазоне.

function t17(min, max) {
    const res = Math.floor(Math.random() * (max - min + 1) + min);
    return res;
}

document.querySelector('.b-17').onclick = function () {
    document.querySelector('.out-17').textContent = t17(100, 110);
}

// Task 18
// Напишите функцию t18, которая возвращает значение value (число) элемента input, класс которого передан как аргумент в функцию t18.

function t18(cl) {
    const elem = document.querySelector(cl);
    return +elem.value;
}

document.querySelector('.b-18').onclick = function () {
    const a = t18('.i-181');
    const b = t18('.i-182');
    document.querySelector('.out-18').textContent = (a > b) ? a : b;
}

// Task 19
// Напишите функцию t19, которая принимает три аргумента: num1, num2 - числа и sign - строку знак операции. sign может быть равен '+', '-', '/', '*'. В зависимости от знака функция должна возвращать результат выбранной операции над числами. Например, передали числа 10 и 5 и знак '/'. Функция должна возвратить 2.

function t19(num1, num2, sign) {
    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
    }
}

document.querySelector('.b-19').addEventListener('click', function () {
    document.querySelector('.out-19').textContent = t19(100, 2, '/');
});

// Task 20
// Напишите функцию t20, которая принимает аргумент и если аргумент число, то возвращает строку 'int', если аргумент строка, то возвращает 'string', если аргумент boolean, то функция возвращает 'bool'.

function t20(val) {
    if (typeof val === 'number') {
        return 'int';
    }
    if (typeof val === 'string') {
        return 'string';
    }
    if (typeof val === 'boolean') {
        return 'bool';
    }
}

document.querySelector('.b-20').addEventListener('click', function () {
    document.querySelector('.out-20').textContent = t20(100);
});