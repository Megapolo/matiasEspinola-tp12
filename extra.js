function upperConverter (data) {
    return data.toUpperCase()
}

function dataType (data) {
    return typeof(data)
}

function dogAge (data) {
    return `Su Perro tiene de ${data} años perro tiene ${data*7} años humanos`
}

function hourPrice (salario, dias, horasPorDia) {
    return ((salario/dias)/horasPorDia).toFixed(2)
}

module.exports = {upperConverter, dataType, dogAge, hourPrice}

