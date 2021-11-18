let nombreLogin = prompt ("INGRESE SU NOMBRE PARA INGRESAR (tutor/profesor)")
if (nombreLogin == "Diana".toLowerCase() || nombreLogin == "Rodrigo".toLowerCase()|| nombreLogin == "Bruno".toLowerCase()|| nombreLogin == "Laura".toLowerCase()) {
    alert ("1ER PASO COMPLETADO, CONTINUE")
}
else {
    alert ("TUTOR/PROFESOR NO IDENTIFICADO, INTENTE DE NUEVO")
}

let apellidoPassword = prompt ("INGRESE SU PASSWORD PARA INGRESAR (apellido de tutor/profeso)")
if (apellidoPassword == "Mottura".toLowerCase() || apellidoPassword == "Plutino".toLowerCase()|| apellidoPassword == "Simone".toLowerCase()|| nombreLogin == "Gonzalez".toLowerCase()) {
    alert ("2DO PASO COMPLETADO, BIENVENIDO")
}
else {
    alert ("PASSWORD INCORRECTO, INTENTE DE NUEVO")
    apellidoPassword = prompt ("INGRESE SU PASSWORD PARA INGRESAR (apellido de tutor/profeso)")
}

const papa = {
    verdura: 'papa',
    precio: 10,
    proveedor: 'colombiano'}
const tomate = {
    verdura: 'tomate',
    precio: 20,
    proveedor: 'venezolano'}
const lechuga = {
    verdura: 'lechuga',
    precio: 30,
    proveedor: 'boliviano'}
const zanahoria = {
    verdura: 'zanahoria',
    precio: 30,
    proveedor: 'brasilero'}
const pepino = {
    verdura: 'pepino',
    precio: 50,
    proveedor: 'colombiano'}
const calabaza = {
    verdura: 'calabaza',
    precio: 20,
    proveedor: 'colombiano'}
const huevo = {
    verdura: 'huevo',
    precio: 120,
    proveedor: 'colombiano'}
    console.log (papa,tomate,lechuga,zanahoria,pepino,calabaza,huevo)

let ingresarVerduras = prompt("INGRESE LAS VERDURAS QUE DESEA COMPRAR (hasta que aprete esc)")
while (ingresarVerduras != "ESC".toLowerCase()) {
console.log ("El usuario ingreso "+ ingresarVerduras)
ingresarVerduras= prompt("INGRESE LAS SIGUIENTES VERDURAS QUE DESEA COMPRAR (hasta que aprete esc)")

}


let precioTotal = parseFloat (prompt("INGRESE EL MONTO TOTAL A PAGAR"))

alert ("SI USTED PAGA CON TARJETA CODERBANK, OBTENDRA UN 10%")

let tarjeta = prompt("USTED TIENE ESA TARJETA?")
let diezprociento = precioTotal*0.10

const descuento = function (a,b) {return a - b };

switch (tarjeta) {
    case "si":
        alert ("EL MONTO A PAGAR ES DE "+(descuento (precioTotal,diezprociento)))
        break;
    case "no":
        alert ("EL MONTO A PAGAR ES " + precioTotal)
        break;
    default: 
    alert ("INGRESE UNA RESPUESTA")
    break;
}
alert ("SI QUIERE CONTINUAR CON LA COMPRA CREE UNA CUENTA A CONTINUACION")
class comprador {
constructor (nombre,apellido, telefono, fechaDeNacimiento, direccion){
    this.nombre = nombre
    this.apellido = apellido
    this.telefono = telefono
    this.fechaDeNacimiento = fechaDeNacimiento
    this.direccion = direccion
}
}
let nombre = prompt("INGRESE SU NOMBRE")
let surname = prompt ("INGRESE SU APELLIDO")
let number = parseInt (prompt("INGRESE SU NUMERO DE TELEFONO"))
let cumpleanios = parseInt (prompt("INGRESE SU FECHA DE NACIMIENTO"))
let calle = prompt ("INGRESE SU DIRECCION")
const usuario1 = new comprador (nombre,surname,number,cumpleanios,calle)
console.log (usuario1)
