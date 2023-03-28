/* -------------------------------------------------------- */
// Задание 5
/* -------------------------------------------------------- */


const power = (x, n) => {
  let result = 1;
  for(let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(power(2, 3)); // ожидаемый результат: 8
console.log(power(5, 2)); // ожидаемый результат: 25
console.log(power(10, 5)); // ожидаемый результат: 100000

