# 📚 IEI-054 — Programación Web
**Instituto Profesional Santo Tomás**  
Ingeniería en Informática / Analista Programador — III Semestre

---

## 📖 ¿De qué trata esta asignatura?

**Programación Web (IEI-054)** es una asignatura práctica orientada a la construcción de componentes de software basados en arquitectura web. A lo largo del semestre trabajarás con las tecnologías más usadas en el desarrollo web profesional:

| Tecnología | Uso en la asignatura |
|---|---|
| **HTML5** | Estructura y semántica de páginas web |
| **CSS3** | Estilos, diseño visual y responsive |
| **JavaScript (ES6+)** | Interactividad, lógica y manipulación del DOM |
| **Node.js** | Desarrollo backend y servidores |
| **WebSockets** | Comunicación en tiempo real |
| **MySQL + Apache** | Base de datos y servidor local (Bitnami WAMP) |

La metodología es **Aprendizaje Basado en Problemas (ABP)**: cada semana partes desde un problema o caso real del mundo TI, y construyes la solución paso a paso.

---

## 🚀 ¿Cómo empezar?

### 1. Clonar el repositorio

Abre una terminal (o Git Bash en Windows) y ejecuta:

```bash
git clone https://github.com/lonkodev/ProgramacionWeb2026_ST
```

Reemplaza `TU_USUARIO` con el usuario GitHub que te indique el docente.

Luego entra a la carpeta del proyecto:

```bash
cd ProgramacionWeb2026_ST
```

### 2. Instalar dependencias (Node.js)

Algunos ejercicios de las semanas 8 en adelante requieren Node.js. Una vez dentro de la carpeta correspondiente, instala las dependencias con:

```bash
npm install
```

> 💡 Debes tener **Node.js instalado** en tu equipo. Descárgalo desde [https://nodejs.org](https://nodejs.org) (versión LTS recomendada).

Para verificar que Node.js está instalado correctamente:

```bash
node --version
npm --version
```

### 3. Abrir en Visual Studio Code

```bash
code .
```

O abre VS Code manualmente y usa **File → Open Folder** para abrir la carpeta del proyecto.

---

## 🔄 Mantener el repositorio actualizado

El docente sube material nuevo cada semana. Para descargar los últimos cambios, **siempre ejecuta esto antes de comenzar a trabajar**:

```bash
git pull
```

Si tienes cambios locales que aún no has guardado y quieres actualizar de todas formas:

```bash
git stash        # guarda tus cambios temporalmente
git pull         # descarga lo nuevo
git stash pop    # recupera tus cambios
```

---

## ▶️ Ejecutar un ejercicio con Node.js

Para los ejercicios que incluyen servidor Node.js, el flujo típico es:

```bash
# 1. Entra a la carpeta del ejercicio
cd semana-08/ejercicio

# 2. Instala dependencias (solo la primera vez)
npm install

# 3. Ejecuta el servidor
node index.js
# o si el proyecto usa un script definido en package.json:
npm start
```

Luego abre tu navegador en `http://localhost:3000` (o el puerto que indique el ejercicio).

Para detener el servidor: `Ctrl + C` en la terminal.

---

## 🛠️ Herramientas necesarias

Asegúrate de tener instalado todo esto en tu equipo de laboratorio o en el tuyo:

- [ ] **Visual Studio Code** — [https://code.visualstudio.com](https://code.visualstudio.com)
- [ ] **Node.js LTS** — [https://nodejs.org](https://nodejs.org)
- [ ] **Git** — [https://git-scm.com](https://git-scm.com)
- [ ] **Bitnami WAMP Stack** (Apache + MySQL) — entregado en clases
- [ ] **Navegador web** con DevTools (Chrome o Firefox recomendado)

---

## 📚 Recursos de consulta

- **W3Schools** — [https://www.w3schools.com](https://www.w3schools.com)
- **MDN Web Docs** — [https://developer.mozilla.org](https://developer.mozilla.org)
- **Node.js Docs** — [https://nodejs.org/en/guides](https://nodejs.org/en/guides)
- **JavaScript.info** — [https://es.javascript.info](https://es.javascript.info)
- **Biblioteca ENI (Santo Tomás)** — acceso a través del portal institucional

---

## 🤝 Código de conducta del repositorio

Este repositorio es un espacio de aprendizaje colectivo. Se espera que:

- Intentes resolver los ejercicios **antes** de revisar la solución
- Compartas tus dudas con tus compañeros — la colaboración es parte del aprendizaje
- No subas soluciones de evaluaciones sumativas al repositorio público
- Reportes cualquier error o problema al docente

> *"Solos llegamos más rápido, juntos llegamos más lejos."*  
> — Valores tomistas: Solidaridad y Fraternidad

---

## 👨‍🏫 Docente

**Giovanni** — Instituto Profesional Santo Tomás  
Asignatura: IEI-054 Programación Web | III Semestre

---
No olvides dejar tu ⭐ en el repositorio si te ha sido útil para tus estudios!

*Última actualización: 2026*