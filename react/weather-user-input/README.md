# Weather App User Input

En este ejemplo creamos una app con React (utilizando Vite) para mostrar el tiempo de una ciudad que el usuario podrá determinar. 

Para ello hacemos uso de la API [wttr.in](https://wttr.in/). El formato de las llamadas a la API para una ciudad específica es:
`https://wttr.in/${encodeURIComponent(ciudad)}?format=j1`

De esta manera, la ciudad será una variable.

## Instalación
- Instalar dependencias NodeJS. Desde la terminal ve al directorio de 'weather-app'
```sh
npm install
```

- Una vez instaladas las dependencias podremos arrancar el servidor de desarrollo
```sh
npm run dev
```
