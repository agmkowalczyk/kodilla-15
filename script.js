// ZADANIE 1
const str1 = `Hello`;
const str2 = `World`;
const str3 = `${str1} ${str2}`;
	
// ZADANIE 2	
const multiply = (a='1',b='1') => a * b;
multiply(2);

// ZADANIE 3
const average = (...rest) => rest.reduce( (a,b) => a+b) / rest.length;
average(1, 2, 3);

// ZADANIE 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const average2 = (arr) => arr.reduce( (a,b) => a+b) / arr.length;
average2(grades);

//ZADANIE 5
arr = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstName, ,lastName] = arr;
