var a =  prompt('podaj wartość a');
var b =  prompt('podaj wartość b');
var equalingResult = (a * a) + (2 * a * b) - (b * b);

alert ('wynik równania dla a = ' + a + ' i b = ' + b + ' jest równy: ' + equalingResult);
console.log('wynik równania dla a: ' + a + ' i b: ' + b + ' is equal to: ' + equalingResult);

if (equalingResult > 0) { 
alert ('wynik równania jest dodatni');
console.log ('wynik równania jest dodatni');
}

if (equalingResult < 0) { 
alert ('wynik równania jest ujemny');
console.log ('wynik równania jest ujemny');
}
