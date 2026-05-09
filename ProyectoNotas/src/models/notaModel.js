let notas = [];

function guardar(nota){
    notas.push(nota);
}

function obtenerTodas(){
    return notas;
}

module.exports = {guardar,obtenerTodas};
