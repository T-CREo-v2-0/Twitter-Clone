# Twitter-Clone

Clon de Twitter implementado para la prueba de la extensión T-CREo.

## Integrantes

* Daniela Ramírez
* Jonathan Bautista
* Ka Fung
* Valeria Herrera

## Tutores

* Yudith Cardinale
* Irvin Dongo
* Ana Aguilera

## Scripts Disponibles

Se requiere de Node v18.16.0 para correr el proyecto.

Dentro de la carpeta `backend` y `frontend` se tiene que instalar las dependencias.

### Instalación de dependencias

```bash
npm install
```

Dentro de la carpeta `backend` se debe crear un archivo `.env` con las siguientes variables de entorno:

```bash
PORT = 3005
DB_URI= "mongodb+srv:..."
```

Donde `DB_URI` es la URI de la base de datos de MongoDB que simula los tweets de Twitter.

### Correr el proyecto en modo de desarrollo

```bash
npm run dev
```
