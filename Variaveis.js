//Números:

alert('Isto é um teste')
var idade = 35;
var quantidade = 100;
var pi = 3.14;
var exponencial = 2e10;

//Operadores Aritméticos:

var soma1 = 80+70;
var subtracao1 = 160-25;
var multiplicacao1 = 2*10;
var divisao1 = 250/2;
var expoente1 = 2 ** 8;
var modulo1 = 14 % 5;

// Operadores Aritméticos Strings:

var soma2 = '980' + 70;
var subtracao2 = '1160' - 25;
var multiplicacao2 = '25' * 10;
var divisao2 = 'Divida 2500' / 2; //NaN
var expoente2 = '3' ** 8;
var modulo2 = '13' % 5;

// Operadores Aritméticos Unários

var incrementar = 10;

console.log(incrementar++); // imprime 10 e soma 1 à variável
console.log(++incrementar); // soma 1 e imprime o total de 12
console.log(--incrementar); // subtrai 1 e imprime 11
console.log(incrementar--); // imprime 11 e depois subtrai 1
console.log(incrementar); // imprime o valor atual da variável que é 10


var texto = 'Este é um texto';
console.log(+texto); // NaN
console.log(-texto); // NaN

var numero = '20';
console.log(numero + 2);
console.log(+numero + 2); //converte para número e soma
