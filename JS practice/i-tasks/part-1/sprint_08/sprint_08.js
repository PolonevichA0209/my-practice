// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, который создает с помощью цикла строку, где шаблон _* повторяется 10 раз. Функция выводит в .out-1 созданную строку. Обращаю внимание - функция должна гарантировать один и тот же результат в не зависимости от количества запусков. Данное требование справедливо для всех функций далее.

const out1 = document.querySelector('.out-1');

function t01() {
    let text = '';
    for (let i = 1; i <= 10; i++) {
        text += '_*';
    }
    out1.textContent = text;
}

document.querySelector('.b-1').onclick = t01;


// Task 2
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, который создает с помощью цикла строку, где шаблон _* повторяется число раз указанное в .i-2. Функция выводит в .out-2 созданную строку.

const out2 = document.querySelector('.out-2');

function t02() {
    const val = +document.querySelector('.i-2').value;
    let text = '';
    for (let i = 1; i <= val; i++) {
        text += '_*';
    }
    out2.textContent = text
}

document.querySelector('.b-2').onclick = t02;

// Task 3
// Создана функция t03. Функция запускается при нажатии .b-3. Напишите код внутри функции, который получает число из input и с помощью цикла создает строку от 0 до указанного числа с разделителем - подчеркивание. Выводит созданную строку в .out-3.
// Введено число 5, получаем строку 0_1_2_3_4_5_

const out3 = document.querySelector('.out-3');

function t03() {
    const val = +document.querySelector('.i-3').value;
    let text = '';
    for (let i = 0; i <= val; i++) {
        text += i + '_';
    }
    out3.textContent = text;
}

document.querySelector('.b-3').onclick = t03;


// Task 4
// Создана функция t04. Функция запускается при нажатии .b-4. Напишите код внутри функции, который получает число из input и с помощью цикла создает строку от полученного числа до нуля, с разделителем - подчеркивание. Выводит созданную строку в .out-4.
// Введено число 5, получаем строку 5_4_3_2_1_0_

const out4 = document.querySelector('.out-4');

function t04() {
    const val = +document.querySelector('.i-4').value;
    let text = '';
    for (let i = val; i >= 0; i--) {
        text += i + '_';
    }
    out4.textContent = text;
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает ЧИСЛО из input.i-5 и создает строку от 0 до введенного числа с шагом 2. Разделитель - подчеркивание. 
// Введено число 6, получаем строку 0_2_4_6_
// Введено число 4, получаем строку 0_2_4_
// При проверке в input будут вводиться только четные числа.
// Строка выводится в .out-5.

const out5 = document.querySelector('.out-5');

function t05() {
    const val = +document.querySelector('.i-5').value;
    let text = '';
    for (let i = 0; i <= val; i = i + 2) {
        text += i + '_';
    }
    out5.textContent = text;
}

document.querySelector('.b-5').onclick = t05;


// Task 6
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции, который читает ЧИСЛО из input.i-6 и создает строку от 0 с шагом 3 пока не будет превышено введенное число.
// Например введено число 7 получим строку 0_3_6_9_
// Например введено число 12 получим 0_3_6_9_12_
// Например введено число 13 получим 0_3_6_9_12_15
// Функция выводит строку в .out-6.

const out6 = document.querySelector('.out-6');

function t06() {
    const val = +document.querySelector('.i-6').value;
    let text = '';
    for (let i = 0; i < val + 3; i = i + 3) {
        text += i + '_';
    }
    out6.textContent = text;
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Создана функция t07. Функция запускается при нажатии .b-7. Функция создает строку от 1 до 30 с шагом 1 и разделителем подчеркивание. В строке должны быть пропущены числа, которые делятся на 4 с остатком 0. Для пропуска примените continue. Выведите строку в .out-7.
// Ожидается строка вида 1_2_3_5_6_7_9_10_11_13_14_15_17_18_19_21_22_23_25_26_27_29_30_

const out7 = document.querySelector('.out-7');

function t07() {
    let text = '';
    for (let i = 1; i <= 30; i++) {
        if (i % 4 === 0) continue;
        text += i + '_';
    }
    out7.textContent = text;
}

document.querySelector('.b-7').onclick = t07;


// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Функция считает сумму чисел от 0 до 10 с помощью цикла. Выводит сумму в .out-8.
// Т.е. нужно найти сумму 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

const out8 = document.querySelector('.out-8');

function t08() {
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i;
    }
    out8.textContent = sum;
}

document.querySelector('.b-8').onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции, который считает сумму чисел от 0 до введенного в input.i-9 числа включительно. Выводит сумму в .out-9.

const out9 = document.querySelector('.out-9');

function t09() {
    const val = +document.querySelector('.i-9').value;
    let sum = 0;
    for (let i = 0; i <= val; i++) {
        sum += i;
    }
    out9.textContent = sum;
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Создана функция t10. Функция запускается при нажатии .b-10. Напишите код внутри функции, который считает сумму чисел от 0 до введенного в input.i-10 числа включительно. Выводит сумму в .out-10. Если сумма становится больше 50, то цикл останавливается и выводится текущая сумма.

const out10 = document.querySelector('.out-10');

function t10() {
    const val = +document.querySelector('.i-10').value;
    let sum = 0;
    for (let i = 0; i <= val; i++) {
        sum += i;
        if (sum > 50) break;
    }
    out10.textContent = sum;
}

document.querySelector('.b-10').onclick = t10;


// Task 11
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код внутри функции, который получает 2 числа из input.i-111 и input-112 и создает строку от меньшего числа к большему с шагом 1. Разделитель подчеркивание. Выведите строку в .out-11.
// Например введено 4 и 7 получаем строку 4_5_6_7_
// Например введено 12 и 9 и получаем строку 9_10_11_12_

const out11 = document.querySelector('.out-11');

function t11() {
    const val1 = +document.querySelector('.i-111').value;
    const val2 = +document.querySelector('.i-112').value;
    let sum = '';
    if (val1 > val2) {
        for (let i = val2; i <= val1; i++) {
            sum += i + '_';
        }
    } else {
        for (let i = val1; i <= val2; i++) {
            sum += i + '_';
        }
    }
    out11.textContent = sum;
}

document.querySelector('.b-11').onclick = t11;

// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который считает произведение чисел от 1 до введенного в input.i-12. Результат выводится в .out-12. 

const out12 = document.querySelector('.out-12');

function t12() {
    const val = +document.querySelector('.i-12').value;
    let sum = 1;
    for (let i = 1; i < val; i++) {
        sum += sum * i;
    }
    out12.textContent = sum;

}

document.querySelector('.b-12').onclick = t12;


// Task 13
// Метод querySelectorAll() получает NodeList, который можно перебирать с помощью цикла. Давайте научимся работать с NodeList с помощью цикла. Изучите пример ниже.

const p13 = document.querySelectorAll('.p-13'); // получаем NodeList

function t13() {
    // перебираем NodeList с помощью цикла
    for (let i = 0; i < p13.length; i++) {
        p13[i].textContent += 5;
    }
}

document.querySelector('.b-13').onclick = t13;


// Task 14
// Создана функция t14. Функция запускается при нажатии .b-14. Напишите код внутри функции, который получает все параграфы .p-14 в NodeList и каждому прописывает фон backgroundColor равный 'lightsalmon'.

const p14 = document.querySelectorAll('.p-14');

function t14() {
    for (let i = 0; i < p14.length; i++) {
        p14[i].style.backgroundColor = 'lightsalmon';
    }
}

document.querySelector('.b-14').onclick = t14;


// Тask 15
// Создана функция t15. Функция запускается при нажатии .b-15. Напишите код внутри функции, который получает все div.d-15 в NodeList и четным элементам NodeList присваивает свойство background равное 'paleturquoise'.

const d15 = document.querySelectorAll('.d-15');

function t15() {
    for (let i = 0; i < d15.length; i++) {
        if (i % 2 === 0) {
            d15[i].style.background = 'paleturquoise';
        }
    }
}

document.querySelector('.b-15').onclick = t15;


// Task 16
// В первом спринте мы учили два способа получения элементов - querySelector() и getElementById(). Сегодня выше изучили метод querySelectorAll(). В JavaScript существуют и другие методы получения групп элементов. Например, getElementsByClassName() получает коллекцию HTML элементов, однако, синтаксис работы полностью аналогичный с NodeList в примере выше. Давайте попрактикуемся в работе с ними.
// Создана функция t16. Функция запускается при нажатии .b-16. Функция должна перебрать HTML коллекцию spans16 и найти сумму чисел прописанных в данных span. Вывести сумму в .out-16.

const spans16 = document.getElementsByClassName('sp-16');
const out16 = document.querySelector('.out-16');

function t16() {
    let sum = 0;
    for (let i = 0; i < spans16.length; i++) {
        sum += +spans16[i].textContent;
    }
    out16.textContent = sum;
}

document.querySelector('.b-16').onclick = t16;

// Task 17
// Теперь применим знания для получения значения из radiobutton. Изучите код ниже.

const radio17 = document.getElementsByName('radio-17');

function t17() {
    for (let i = 0; i < radio17.length; i++) {
        if (radio17[i].checked) {
            document.querySelector('.out-17').textContent = radio17[i].value;
            break;
        }
    }

}

document.querySelector('.b-17').onclick = t17;


// Task 18
// Напишите в функции t18 код, который выводит в .out-18 значение value выбранного radiobutton r-18.

const r18 = document.getElementsByName('r-18');
const out18 = document.querySelector('.out-18');

function t18() {
    for (let i = 0; i < r18.length; i++) {
        if (r18[i].checked) {
            out18.textContent = r18[i].value;
            break;
        }
    }
}

document.querySelector('.b-18').onclick = t18;

// Task 19
// CSS позволяет написать селектор, селектор выбираем checked radiobutton, т.е. нет нужды получать несколько элементов, и перебирать их циклом. Изучите как работает функция. Не забывайте, что html, css очень сильно влияют на JavaScript, и при правильной организации HTML, CSS можно очень сильно упростить код JS.


function t19() {
    document.querySelector('.out-19').textContent = document.querySelector('[name="r-19"]:checked').value;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создана функция t20. Напишите код, который получает value выбранного radiobutton r-20 и если:
// value равен 100, то в .out-20 вывести строку 'admin'
// value равен 200, то в .out-20 вывести строку 'moderator'
// value равен 300, то в .out-20 вывести строку 'user'

const out20 = document.querySelector('.out-20');

function t20() {
    const val = document.querySelector('[name="r-20"]:checked').value;
    switch (val) {
        case '100':
            out20.textContent = 'admin';
            break;
        case '200':
            out20.textContent = 'moderator';
            break;
        case '300':
            out20.textContent = 'user';
            break;
    }
}

document.querySelector('.b-20').onclick = t20;