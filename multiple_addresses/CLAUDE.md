# Multiple Addresses — Contexto del prototipo

## Qué es

Prototipo interactivo de una feature llamada **Multiple Addresses** para una wallet portfolio crypto (mundo EVM). Se construye como HTML + CSS + JavaScript puro, sin frameworks.

## Feature

Un modal contextual que permite gestionar múltiples addresses guardadas. Se abre desde el **wallet pill** en la navbar.

### Modos de guardado de addresses

- **Wallet connection** (foco del prototipo): conexión vía browser extension (MetaMask, Rabby, etc.). Simula el flujo de selección de proveedor y aprobación. **Persiste al recargar la página.**
- **Private key**: al recargar la página, pierde la conexión y pasa a watchonly.
- **Seed phrase**: igual que private key, pasa a watchonly al recargar.

### Reglas de estado

- Solo **una address puede estar conectada** a la vez.
- Al conectar una address, la anterior pasa a watchonly.
- Las addresses de private key y seed phrase pierden su conexión al recargar (pasan a watchonly). Solo las wallet connections mantienen su estado.

### Acciones disponibles en el modal

- Conectar / desconectar cada address
- Renombrar addresses
- Recargar balances
- Menú de más opciones por address (three-dot menu)

## Estados del wallet pill (navbar)

| Estado | Border | Estructura de texto |
|---|---|---|
| **Connected** | `1.5px solid #05c0a5` (teal) | Una fila: nombre + address abreviada |
| **Watchonly** | `1px solid #e6e6e6` | Dos filas: "Watchonly" arriba, nombre + address abajo |

## Estructura del modal

1. **Card de detalle** (top): muestra la address seleccionada — balance, nombre, address abreviada, source, estado (connected/watchonly), botón de acción (Connect/Disconnect), y selector de red.
2. **Lista de addresses**: cada row tiene avatar de color, nombre, badge de estado (ojo = watchonly, check = seleccionada), balance, y three-dot menu.
3. **Footer**: botón "Add wallet".

## Stack técnico

- HTML + CSS + JavaScript vanilla
- Font: DM Sans (Google Fonts)
- Sin frameworks, sin Tailwind
- Archivo único: `index.html`

## Archivo de diseño Figma

- Archivo de referencia: `MEW — Internal Playground`
- File key: `mzCIrSKNkRm8ZuqQ4bb71r`
- Nodos implementados:
  - Navbar: `601:1485`
  - Modal abierto: `602:1723`
  - Wallet pill estados: `603:1615`
