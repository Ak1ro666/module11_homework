/* -------------------------------------------------------- */
// Задание 1
/* -------------------------------------------------------- */


function countEvenAndOdd(arr) {
  const result = { even: 0, odd: 0, zero: 0 };

  arr.reduce((acc, cur) => {
    if (cur === null || cur === undefined || isNaN(cur)) {
      return acc;
    }

    if (cur === 0) {
      acc.zero++;
    } else if (cur % 2 === 0) {
      acc.even++;
    } else {
      acc.odd++;
    }

    return acc;
  }, result);

  return result;
}


