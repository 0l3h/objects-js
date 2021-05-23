// *************************Условные выражения**********************
// Деление числа на 5, 3, 2
alert("Проверка деления числа на 5, 3, 2")
const firstNumber = Number(prompt("Введите число"));

alert(isDivided(firstNumber));

function isDivided(number) {
    if (number % 5 === 0 || number % 3 === 0 || number % 2 ===0) {
        return true;
    }
    return false;
}

// ******************************Цикл for**************************
// Факториал
alert("Факториал числа");
let secondNumber = Number(prompt("Введите число"));

for (let i = secondNumber - 1; i >= 1; i--) {
    secondNumber *= i;
}

alert("Факториал числа:" + secondNumber);

// Сумма первых N элементов
alert("Сумма первых N элементов");
let N = Number(prompt("Введите число"));

let sumOfN = 0; 
for (let i = N; i >= 1; i--) {
    sumOfN += 1/i;
}

alert("Сумма первых N элементов:" + sumOfN);

// Произведение чисел в заданных пределах
alert("Произведение чисел в заданных пределах:");
const lim1 = Number(prompt("Введите первое число"));
const lim2 = Number(prompt("Введите второе число"));

let multiplicationResult = 1; 
for (let i = 1; i < lim2 - lim1; i++) {
    multiplicationResult *= lim1 + i;
}

alert("Результат произведения: " + multiplicationResult);

// **************************Функции************************
// Проверка возраста
alert("Проверка возраста");
const age = Number(prompt("Укажите возраст"));

alert(isAdult(age));

function isAdult(age) {
    return age >= 18? true: false;
}

// Проверка на простоту чисел
alert("Проверка простоты чисел");
const fourthNumber = Number(prompt("Введите число"));

alert(isPrime(fourthNumber));

function isPrime(number) {
    let comparisonResult = 0;
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            comparisonResult++;
        }
    }
    return comparisonResult > 0? false : true;
}

// Проверка кратности
alert("Проверка деления двух чисел без остатка")
const number1 = Number(prompt("Введите первое число"));
const number2 = Number(prompt("Введите второе число"));

alert(checkMultiplicity(number1, number2));

function checkMultiplicity(num1, num2) {
    return num1 % num2 === 0? true : false;
}

// Возможность существования треугольника
alert("Возможность существования треугольника с указанными длинами")
const sideA = Number(prompt("Длина первой стороны"));
const sideB = Number(prompt("Длина второй стороны"));
const sideC = Number(prompt("Длина третьей стороны"));

alert(isPossible(sideA, sideB, sideC));

function isPossible(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

// Вычисление площади параллелепипеда
alert("Площадь параллелепипеда");
const edgeA = Number(prompt("Длина первой грани"));
const edgeB = Number(prompt("Длина второй грани"));
const edgeC = Number(prompt("Длина третьей грани"));

alert(parallelepipedArea(edgeA, edgeB, edgeC));

function parallelepipedArea(a, b, c) {
    return 2 * (a * b + b * c + a * c);
}

// Площадь треугольника
alert("Площадь разностороннего треугольника");
const edgeD = Number(prompt("Длина первой грани"));
const edgeE = Number(prompt("Длина второй грани"));
const edgeF = Number(prompt("Длина третьей грани"));

const triangleArea = function (a, b, c) {
    const p = (a + b + c) / 2;
    return (p * (p - a) * (p - b) * (p - c)) ** 0.5;
}

alert(triangleArea(edgeD, edgeE, edgeF));

// Площадь конуса
alert("Площадь полной поверхности конуса")
const l = Number(prompt("Длина образующей конус"));
const r = Number(prompt("Радиус окружности основания"));

const coneArea = function (l, r) {
    const PI = Math.PI;
    return PI * r * (r + l);
}

alert(coneArea(l, r));

// ***********************Объекты*******************
// Студент
const student = {
    name: "John",
    surname: "Johnson",
    gender: "Male",
    phoneNumber: "+380000000",
    address: "Wachington D.C.",
    showAddress() {
        alert(this.address);
    },
    changeGender() {
        this.gender = String(prompt("Enter your gender"));
    },
}

console.log("First student", student);

// Студент 2
const student2 = {
    university: "Harvard University",
    faculty: "computer science",
    department: "artificial intelligence",
    changeDepartment() {
        this.department = String(prompt("Перевод на новый факультет"));
    },
}

console.log("Second student", student2);

// **********************Конструкторы*************************
// Книга
function Book(author, name, publishingDate, publisher) {
    this.author = author;
    this.name = name;
    this.publishingDate = publishingDate;
    this.publisher = publisher;
}

const book = new Book("Peter Thiel & Blake Masters", "Zero To One", 
                      "September 16, 2014", "Crown Business");

console.log(book);

// Электронная книга
function EBook(author, name, publishingDate, publisher, format, eNumber) {
    this.author = author;
    this.name = name;
    this.publishingDate = publishingDate;
    this.publisher = publisher;
    this.format = format;
    this.eNumber = eNumber;
}

const eBook = new EBook("Peter Thiel & Blake Masters", "Zero To One", 
                        "September 16, 2014", "Crown Business", "pdf", "9780753550304");

console.log(eBook);