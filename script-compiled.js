'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// ZADANIE 1
var str1 = 'Hello';
var str2 = 'World';
var str3 = str1 + ' ' + str2;

// ZADANIE 2	
var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
	return a * b;
};
multiply(2);

// ZADANIE 3
var average = function average() {
	for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
		rest[_key] = arguments[_key];
	}

	return rest.reduce(function (a, b) {
		return a + b;
	}) / rest.length;
};
average(1, 2, 3);

// ZADANIE 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var average2 = function average2(arr) {
	return arr.reduce(function (a, b) {
		return a + b;
	}) / arr.length;
};
average2(grades);

//ZADANIE 5
arr = [1, 4, 'Iwona', false, 'Nowak'];

var _arr = arr,
    _arr2 = _slicedToArray(_arr, 5),
    firstName = _arr2[2],
    lastName = _arr2[4];
