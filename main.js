//Переменные

/* переменные var, let, const

    let - изменяемая переменная, можно использовать без обявления зеначения
    const - неизменная переменная

*/

let myNumber = 10
myNumber = 15
console.log(myNumber)

const myAge = 33
//myAge = 34
console.log(myAge)


// Нейминг переменных

/*
    Разрешен символ _ и $, только буквы и цифры, цыфра не может быть первой
    Используется camelCase - myAge - наиболее распространен
    Используется PascalCase - MyClass - для типов и классов
    Все с большой буквы - MY_COLOR_RED, для известных переменных, которые не меняются
    Осмысленные правильные, очевидные имена

 */

const $colorRed = "red"
const myName = "Ilya"
const MY_COLOR_BLACK = "#FFF"

// Выражения и инструкция

/*
    Выражения возвращают значение (какой-то тип данных)
    Инструкция ничего не возвращает (if\esle, let, const , switch ...)

 */

// a <= b || c != d true

//Типы данных

/*

    7 примитивных и 1 ссылочный типов
    Ссылочный - object
    Примитивные - Number, String, Boolean, Undefined, null, Symbol, BigInt

 */

let myNumber = 10
console.log(typeof myNumber)
console.log(typeof null)
console.log(typeof 'Hello')
console.log(typeof true)