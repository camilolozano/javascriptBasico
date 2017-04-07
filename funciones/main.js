// Funciones

function traductorMes(_mes) {
  const mes = _mes;
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
}

traductorMes('Enero');
traductorMes('Febrero');
