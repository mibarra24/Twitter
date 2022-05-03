En esta practica pondremos en marcha tres temas complementarios que le daran profundidad al proyecto:

# 3. Sprint 1: Agregar modelos 🖋️
Se realiza un proyecto nuevo, empezando desde los requerimientos. ☑️
 - Se crea un proyecto llamado twitter.
 - Se ejecuta npm init y se añade jest como dependencia, ademas de los folders app y test.
 - Dentro de la carpeta app, se crea una llamada models y un archivo js llamado User dentro de la misma. 📂
 - Dentro de la carpeta models, se crea un archivo llamado User.test.js.

Como primer requerimiento, se necesita un modelo "user" para guardar informacion de un usuario dentro de la app.
 - Para lo anterior, es necesario crear la clase "User" y se importa en el test. 📔
 - Se realizan pruebas y, despues de fallos, se logran pasar gracias a la creacion de user.js. 

Segundo requerimiento:
 - Se crean las propiedades `dateCreated` y `lastUpdated`, deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
 - Se modifica el codigo para no enviar los datos de dateCreated y lastUpdated, cuidando no recibir un valor undefined. 💼
 - Despues del fallo de la prueba, se tienen que hacer modificaciones a la clase user para que esta prueba funcione.

Tercer requerimiento:
 - Cada objeto tipo user requiere de gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.  
 - Se crea la prueba User.test.js 
 - Para que la prueba no falle, es necesario agregar codigo en user.js, gets de que regresan los elementos antes mencionados. 👾

Cuarto requerimiento:
 - Se añaden los setters: `setUsername` y `setBio`, para actualizar dichas propiedades al agrega los setters usando la palabra `set` y modificando el atributo indicado.



