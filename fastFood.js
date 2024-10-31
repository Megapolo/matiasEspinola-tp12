let nombre = "Matías"
let apellido = "Espínola"
let total 

function calcularHamburguesa (tipo, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callback) {

const precioQueso = 30
const precioJamon = 25
const precioSalsaDeTomate = 5
const precioMayonesa = 5
const precioMostaza = 5
const precioTomate = 15
const precioLechuga = 10
const precioCebolla = 10

let precioBase = 0

switch (tipo) {
    case "carne" :
        precioBase = 1800;
        break;
    case "pollo" : 
        precioBase = 1500;
        break;
    case "vegetariana" :
        precioBase = 1200;
        break
    default :
        return "No tenemos ese tipo de hamburguesa :c"
}

//no entendí mucho como funcionan los Callbacks

total = precioBase + (queso ? precioQueso : 0) + (jamon ? precioJamon : 0) + (salsaDeTomate ? precioSalsaDeTomate : 0) + (mayonesa ? precioMayonesa : 0) + (mostaza ? precioMostaza : 0) + (tomate ? precioTomate : 0) + (lechuga ? precioLechuga : 0) + (cebolla ? precioCebolla : 0); 

callback(total)
}

function fastFood(precioHamburguesa) {
    console.log(`${nombre} ${apellido}, el valor de su hamburguesa es $${precioHamburguesa}`);
}


calcularHamburguesa("carne", true, false, false, true, true, true, true, false, fastFood);

