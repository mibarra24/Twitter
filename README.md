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


# 4. Sprint 2: Agregar servicios 🛍️

Primer requerimeinto:Se crea un usaurio con lo ya definido en el sprint anterior, usando una nueva clase que se llama `UserService`.
 
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados.

Segundo requerimiento: se añade un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, regrese una lista con todos los valores de los atributos de dicho objeto.

Tercer requerimiento: se agrega un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

Cuarto requerimiento: se agrega un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 

# 5. Sprint 3: Agregar vistas 🌠

Se crea la clase `UserView`, misma que funciona para interactuar con el modelo `User` a través de `userService`. Al mismo tiempo, se crea una clase dentro de este ultimo llamado `create User`, la cual sirve para crear un nuevo objeto user a partir de un `payload`, que es un objeto que contiene info para crearlo.

Requerimientos: 📔
1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.



