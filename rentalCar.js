function rentalCar(vehiculo, dias, sillaDeBebe) {
let valorDeVehiculo = 0
let valorTotal = 0
let valorDeSilla = 0

switch (vehiculo) {
    case "compacto" :
            valorDeVehiculo = 14000;
            break;
    case "mediano" :
            valorDeVehiculo = 17000;
            break;
    case "camioneta" :
            valorDeVehiculo = 28000;
            break;
    default :
            return ("Vehículo no valido")
}

valorTotal = valorDeVehiculo * dias

if (sillaDeBebe === "si") {
    valorDeSilla = 1200 * dias
    valorTotal = valorTotal + valorDeSilla
    return (`Estimado cliente: En base al tipo de vehículo ${vehiculo} alquilado, considerando los ${dias} días utilizados y que pidió silla para bebés por $1200 al día, el monto total a pagar es de $${valorTotal}`);
} else {
    return (`Estimado cliente: En base al tipo de vehículo ${vehiculo} alquilado, considerando los ${dias} días utilizados, el monto total a pagar es de $${valorTotal}`);

}


}

//console.log(rentalCar("compacto", 2, "no"));


