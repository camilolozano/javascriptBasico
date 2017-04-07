// ciclod

// For

var arrayUno = ['casa', 'carro', 'veca'];
var element;

for (var i = 0; i < arrayUno.length; i++) {
  console.log(arrayUno[i]);
}
console.log('----------');
for(array of arrayUno){
  console.log(array);
}
console.log('----------');

// While
// ++ se le dice que incremente en una unidad el valor
var i = 0;
var text = '';
while (i < 10) {
    text += '\n El número es ' + i;
    i++;
}
// \n nos sirve para dar un salto de linea, quitenlo y miren 
// como se mostraria la información si no se lo usara
// += concatena cada dato que resulta del ciclo
console.log(text);