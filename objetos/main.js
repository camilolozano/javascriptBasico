// Objetos
// clave: valor
const objetoUsuario = {
  nombre: "Nombre Usuario",
  apellida: "Apellido Usuario",
  edad: 20,
  activo: true
}

// agregar una nueva llave y valor
console.log(objetoUsuario);
objetoUsuario.nuevaLLave = 'nuevo valor';
console.log(objetoUsuario);

console.log(objetoUsuario.nombre);
console.log(`la edad del usaurio es ${objetoUsuario.edad}`);

//Concatenar
console.log('El usuarios de  '+objetoUsuario.edad+' años, esta '+objetoUsuario.activo+' en el sistema ');