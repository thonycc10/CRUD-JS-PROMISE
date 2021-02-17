import { init } from './js/archivos-page';
// import { obtenerUsuarios } from './js/http-provider';
// import * as CRUD from './js/crud-provider';

// uso para llamar apis http
/*  1 evitar usar call back help
fetch(jokeUrl).then(resp => {
   console.log(resp);
   // abreviar y capturar los paramentros del json
   resp.json().then( ({id, value}) => {
       console.log(id);
       console.log(value);
   });
});
 */

// 2
/* fetch(jokeUrl )
    .then(resp => resp.json())
    .then(({id, value}) => {
        console.log(id, value);
    }); */

// obtenerUsuarios().then(console.log);


// ************* para llamadas rest

// CRUD.getUsuario(2).then(console.log);
//
// CRUD.crearUsuario({
//     name: 'Thony',
//     job: 'Estudiante'
// }).then(console.log);

// CRUD.acturalizarUsuario( 997, {
//     name: 'Thony',
//     job: 'chamba'
// }).then(console.log)

// CRUD.borrarUsuario(1).then(console.log);

// ************* FIN para llamadas rest

init();
