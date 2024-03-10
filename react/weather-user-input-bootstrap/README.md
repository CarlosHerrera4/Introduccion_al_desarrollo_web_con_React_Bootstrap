# Weather App User Input con Bootstrap

En este ejemplo creamos una app con React (utilizando Vite) para mostrar el tiempo de una ciudad que el usuario podrá determinar y haremos uso de algunos componentes de React-Bootstrap

Para ello hacemos uso de la API [wttr.in](https://wttr.in/). El formato de las llamadas a la API para una ciudad específica es:
`https://wttr.in/${encodeURIComponent(ciudad)}?format=j1`

De esta manera, la ciudad será una variable.

## Instalación
- Instalar dependencias NodeJS. Desde la terminal ve al directorio de 'weather-app'
```sh
npm install
```
- También instalamos el módulo 'react-bootstrap'
```sh
npm intall react-bootstrap bootstrap
```

- Una vez instaladas las dependencias podremos arrancar el servidor de desarrollo
```sh
npm run dev
```
