# Sistema de Notas — Patrón MVC con Node.js + Express

> IEI-054 Programación Web · Semana 8  
> Instituto Profesional Santo Tomás  
> Unidad II: Fundamentos de Programación Backend

---

## ¿Qué hace este proyecto?

Sistema web que permite ingresar las notas de un alumno y ver los resultados en una tabla. El servidor calcula el promedio y determina si el alumno aprueba o reprueba.

- **Vista 1 — Formulario** (`/`) — ingresa nombre y 4 notas
- **Vista 2 — Lista** (`/notas/lista`) — tabla con nombre, promedio y estado

---

## Estructura de carpetas

```
ProyectoNotas/
├── public/
│   └── index.html                  ← formulario (ejecuta el NAVEGADOR)
├── src/
│   ├── controllers/
│   │   └── notaController.js       ← lógica: promedio, estado, respuesta HTML
│   ├── models/
│   │   └── notaModel.js            ← datos: arreglo en memoria
│   └── routes/
│       └── notaRoutes.js           ← rutas: URL → función del controller
├── server.js                       ← configura Express y monta rutas
└── package.json
```

> `public/` lo ejecuta el navegador. `src/` lo ejecuta Node.js. Nunca se mezclan.

---

## Cómo ejecutar

```bash
npm install
node server.js
```

Abrir en el navegador: `http://localhost:3000`

---

## Patrón MVC aplicado

| Capa | Archivo | Responsabilidad |
|------|---------|-----------------|
| Model | `src/models/notaModel.js` | Guardar y entregar datos |
| View | `public/index.html` + HTML del controller | Lo que ve el usuario |
| Controller | `src/controllers/notaController.js` | Calcular promedio, determinar estado |
| Router | `src/routes/notaRoutes.js` | Conectar URL con función del controller |

### Flujo de una petición

```
[index.html]  →  POST /notas
                     ↓
            [notaRoutes.js]  →  registrarNota()
                                      ↓
                          [notaController.js]
                           · parseFloat() las notas
                           · calcula promedio
                           · determina estado (>= 4.0 aprueba)
                           · llama a NotaModel.guardar()
                           · res.redirect('/notas/lista')
                                      ↓
                          [notaModel.js]  →  notas.push()
                                      ↓
            [notaRoutes.js]  →  listarNotas()
                                      ↓
                          [notaController.js]
                           · llama a NotaModel.obtenerTodas()
                           · construye tabla HTML con .map()
                           · res.send(html)
                                      ↓
                          [Navegador muestra la tabla]
```

---

## Conceptos utilizados

**`express.urlencoded()`** — middleware que permite leer los datos del formulario en `req.body`.

**`req.body`** — objeto con los campos del formulario. Las claves corresponden al atributo `name` de cada `<input>`.

**`parseFloat()`** — convierte un string a número decimal. Los datos del formulario siempre llegan como string.

**`toFixed(1)`** — redondea a un decimal y devuelve string. Ejemplo: `(5.125).toFixed(1)` → `'5.1'`

**Operador ternario** — forma corta de escribir un if/else:
```javascript
const estado = parseFloat(promedio) >= 4.0 ? 'Aprobado' : 'Reprobado';
```

**`.map()` + `.join('')`** — recorre el arreglo y construye las filas HTML de la tabla:
```javascript
const filas = notas.map(n => `<tr><td>${n.nombre}</td></tr>`).join('');
```

**`res.redirect()`** — le indica al navegador que haga una nueva petición GET a otra ruta.

**`module.exports` / `require()`** — permiten compartir código entre archivos.

---

## Semana 9 — ¿Qué cambia con MySQL?

Solo se modifica `notaModel.js`. El controller, las rutas y el HTML no se tocan.

```javascript
// Semana 8 — arreglo en memoria (datos se pierden al reiniciar)
let notas = [];
function guardar(nota)    { notas.push(nota); }
function obtenerTodas()   { return notas; }

// Semana 9 — MySQL (datos persisten)
async function guardar(nota) {
    await db.execute('INSERT INTO notas (nombre, promedio, estado) VALUES (?, ?, ?)',
        [nota.nombre, nota.promedio, nota.estado]);
}
async function obtenerTodas() {
    const [filas] = await db.execute('SELECT * FROM notas');
    return filas;
}
```

Esa es la ventaja del patrón MVC: cada capa puede cambiar sin romper las demás.

---

## Referencias

- Express.js: https://expressjs.com
- Node.js: https://nodejs.org/en/docs
- W3Schools JavaScript: https://www.w3schools.com/js
