/* -------------------------------------------------------- */
// Задание 3
/* -------------------------------------------------------- */


function getSumFunc(a) {
	return function(b) {
	  return a + b;
	}
 }
 
 const sumFunc = getSumFunc(5);
 console.log(sumFunc(3)); // выведет 8
 