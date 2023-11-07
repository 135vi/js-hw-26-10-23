// №1
// let x = prompt('Введите число для возведения в степень')
// let n = prompt('Введите степень числа')
// function degree(x, n) {
//     let result = 1;
//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// alert(degree(x, n))

// №2
// let a = prompt('Введите первое число');
// let b = prompt('Введите второе число');
// function divide(a, b) {
//     if(a == 0) return b;
//     else return divide(a, b % a);
// }
// alert(divide(a, b))

// №3
// let num = prompt('Введите число');
// function max(num) {
//     if(num < 0) return 'Error';
//     if(num < 10) return num;
//     return Math.max(num % 10, max(parseInt(num / 10)));
// }
// alert(max(num))

// №4
// let num = prompt('Введите число');
// function prime(num, x = 3) {
//     if(num == 2) return 'Данное число является простым';
//     if(num < 2 || num % 2 === 0) return 'Данное число не является простым';
//     if(x * x > num) return 'Данное число является простым';
//     if(num % x === 0) return 'Данное число не является простым';
//     return prime(num, x + 2);
// }
// alert(prime(num, x = 3))

// №5
// let a = prompt('Введите число');
// let b = 2;
// let c = [];
// function multiplier(a, b, c) {
//     if(b > a ** 0.5) {
//         c.push(a);
//         return c;
//     }else if(a % b == 0) {
//         c.push(b);
//         multiplier(a / b, b, c);
//     } else {
//         multiplier(a, b + 1, c);
//     }
//     return c.join('*');
// }
// alert(multiplier(a, b, c))

// №6
// let num = +prompt('Введие порядковый номер числа Фибоначчи');
// function Fib(n) {
//     if(n == 1 || n == 2) return 1;
//     else return Fib(n - 2) + Fib(n - 1);
// }
// alert(Fib(num))