//*************************ЗАМЫКАНИЕ*******************************
//*****************************************************************

function closureCounter(){

	let count = 0;

	function counter(){
		count++;
		return count;
	};

	return counter;
};


//независимые экземпляры счетчика
let firstCounter = closureCounter(); 
let secondCounter = closureCounter();





//***************замыкания на стрелочных функциях***************
//**************************************************************

// эта функция принимает агрумент x, сохраняет его в замыкании и возвращает функцию, принимающую аргумент y
const add = x => y => x+y;

add(3)(8); // 11

// это аналог реализации такого замыкание:
function add1(x){
	return function(y){
		return x+y;
	}
};

add1(3)(8); // 11



//вложенное замыкание
const add2 = x => y => z => x+y+z;
add2(3)(8)(10); // 21