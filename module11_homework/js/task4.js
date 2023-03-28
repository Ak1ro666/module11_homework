/* -------------------------------------------------------- */
// Задание 4
/* -------------------------------------------------------- */


function printNumbers(start, end) {
	let current = start;
 
	let intervalId = setInterval(function() {
	  console.log(current);
	  if (current == end) {
		 clearInterval(intervalId);
	  }
	  current++;
	}, 1000);
 }
 