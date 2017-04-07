// Condicionales

var valor = 10;
var valorUno = 4;
var valorDos = 6;

if (parseInt(valor) === valorUno) {
  console.log('Mismo valor y mismo tipo-->', true);
}

// isNaN es un metodo que reviza si el dato es un numero

if (isNaN(valorUno)) {
  console.log(`${valorUno} es un entero`);
} else {
  console.log(`${valorUno} No es un entero`);
}

const valorA = 10;
const valorReferencia = 10;

if (valorReferencia > valorA) {
  console.log(valorReferencia, 'es mayor igual a', valorA);
} else if (valorReferencia < valorA) {
  console.log(valorReferencia, 'es menor igual a', valorA);
} else if (valorReferencia == valorA) {
  console.log(valorReferencia, 'es igual a', valorA);
}

const mes = 'Mayo';
switch (mes) {
  case 'Enero':
    console.log('January');
    break;
  case 'Febrero':
    console.log('February');
    break;
  case 'Marzo':
    console.log('March');
    break;
  case 'Abril':
    console.log('April');
    break;
  case 'Mayo':
    console.log('May');
    break;
  default:
    break;
}