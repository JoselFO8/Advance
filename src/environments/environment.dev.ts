// export const environment = {
//   production: false,
//   uri: 'http://localhost:3000/' // Agrregar URL del backend
// };

// API prueba esta en el puerto 4000
export const environment = {
  production: false,
  uri: 'http://localhost:4000/' 
};

// Configurar el angular.json
// Copiando el  "fileReplacements": [contenido] y su contenido, y pegandolo en un key nuevo "dev"
// no olvidar cambiar el .prod o .production por .dev **en este caso**
// Cambiar en packet.json el "start": "ng serve", por "start:dev": "ng serve --c=dev", y agregar "start:prod": "ng serve --c=prod",
// Cambiar en packet.json el build por 
// "build:dev": "ng build --c=dev",
// "build:prod": "ng build --c=prod",


// Para copiar una linea, alt + shift + ↓ o ↑