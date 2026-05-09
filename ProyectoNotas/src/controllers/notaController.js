const NotaModel = require('../models/notaModel');

function registrarNota(req, res) {
    const { nombre, nota1, nota2, nota3, nota4 } = req.body;

    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    const n4 = parseFloat(nota4);

    const suma = n1 + n2 + n3 + n4;
    const promedio = (suma / 4).toFixed(1);

    const estado = parseFloat(promedio) >= 4.0
        ? 'Aprobado'
        : 'Reprobado';

    const nuevaNota = {
        nombre,
        nota1: n1,
        nota2: n2,
        nota3: n3,
        nota4: n4,
        promedio,
        estado
    };

    NotaModel.guardar(nuevaNota);
    res.redirect('/notas/lista');
}

function listarNotas(req, res) {
    const notas = NotaModel.obtenerTodas();

    const filas = notas.map(n => `
        <tr>
            <td>${n.nombre}</td>
            <td>${n.promedio}</td>
            <td>${n.estado}</td>
        </tr>
    `).join('');

    res.send(`
        <h1>Lista de Notas</h1>

        ${notas.length === 0
            ? '<p>No hay notas registradas.</p>'
            : `
            <table border="1" cellpadding="8">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Promedio</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    ${filas}
                </tbody>
            </table>
            `
        }

        <br>
        <a href="/">← Ingresar otra nota</a>
    `);
}

module.exports = { registrarNota, listarNotas };
