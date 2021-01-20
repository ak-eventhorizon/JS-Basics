//**************************CALLBACK*******************************
//*****************************************************************

// callback - это функция, которая выполнится после завершения другой функции


function doHomework(subject, callback){
	console.log(`Starting my ${subject} homework`);
	callback(subject);
}

function doneHomework(key){
	console.log(`${key} done!`);
}

doHomework('Math', doneHomework);



// Пример с двумя колбэками

// function main(subject, callback1, callback2){
// 	console.log(`${subject}`);
// 	callback1();
// 	callback2();
// }

// function first(){
// 	console.log(`First callback done`);
// }

// function second (){
// 	console.log(`Second callback done`);
// }

// main('Main func done', first, second);