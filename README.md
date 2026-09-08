# Implementación de una API REST para gestión de productos

El sistema debe registrar productos con nombre, precio, stock y categoría. Debe prohibir precios negativos y nombres duplicados. Los productos deben ser accesibles a través de una API REST con operaciones CRUD. La API debe manejar errores de validación y proporcionar respuestas adecuadas.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Desarrollo de una API REST con Express y TypeScript |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del modelo de producto

**Objetivo:** Definir y validar el modelo de producto con sus propiedades y restricciones.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar las propiedades esenciales de un producto (nombre, precio, stock, categoría).
- Establecer las restricciones necesarias (precio positivo, nombre único).
- Crear un modelo de producto que cumpla con estas restricciones.

**Entregable:** Modelo de producto validado con sus propiedades y restricciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo representar las restricciones en el modelo.
- Piensa en cómo validar los datos de entrada para cumplir con las restricciones.

</details>

### Fase 2: Implementación de las operaciones CRUD

**Objetivo:** Implementar las operaciones CRUD para el modelo de producto.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Crear las rutas necesarias para las operaciones CRUD (crear, leer, actualizar, eliminar) en la API REST.
- Asegurar que las operaciones cumplan con las restricciones definidas en el modelo de producto.
- Manejar los errores de validación y proporcionar respuestas adecuadas.

**Entregable:** API REST con operaciones CRUD funcionales y manejo de errores de validación.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar las rutas para que sean intuitivas y coherentes.
- Piensa en cómo manejar los errores de validación y proporcionar respuestas útiles al usuario.

</details>

### Fase 3: Pruebas unitarias y de integración

**Objetivo:** Implementar pruebas unitarias y de integración para asegurar la funcionalidad de la API.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Escribir pruebas unitarias para las funciones del modelo de producto.
- Escribir pruebas de integración para las rutas de la API REST.
- Asegurar que las pruebas cubran los casos de éxito y de error.

**Entregable:** Conjunto de pruebas unitarias y de integración que aseguran la funcionalidad de la API.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo escribir pruebas que sean significativas y cubran los casos importantes.
- Piensa en cómo estructurar las pruebas para que sean fáciles de mantener y escalables.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un modelo de producto y cuáles son sus propiedades esenciales?
- **paraQueSirve**: ¿Para qué sirven las restricciones en el modelo de producto?
- **comoSeUsa**: ¿Cómo se usan las operaciones CRUD en la API REST?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar una API REST y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de pruebas unitarias y de integración?

## Criterios de Evaluacion

- Definición y validación del modelo de producto con sus propiedades y restricciones.
- Implementación de las operaciones CRUD en la API REST con manejo de errores de validación.
- Implementación de pruebas unitarias y de integración que aseguran la funcionalidad de la API.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
