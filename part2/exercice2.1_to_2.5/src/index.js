import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


/* const notes = [
  {
    id: 1,  // Id unique
    content: 'HTML is easy',  // constent of the note
    date: '2019-05-30T17:30:31.098Z', /// Date of the note
    important: true, // Categorize if a note is marked as important
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]
 */
/**aqio estana notes pero para mejorar el codigfo lo movimos a un archivo a marte como un modulo y lo importamos en el actual
 * 
 * 
 * 
const Note = ({note})=>{
  return(
    <>
      <li>{note.content}</li>
    </>
  )
}
*/

/**Aqui estaba App, lo pasamos a components, dado que es componente raiz del proyecto se colaba en la base de src, el componente app debe crearse con .js */




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Renderizando colecciones.

//Cuadno vamos a renderizar varios datos guardados en un objeto o una estrucrora de datos compleja es recomendable utilizar algun metodo y no acceder al contedio mediente indices.

// Cuando se renderizan varios elementos mediante map, debemos definir un propiedad key a cada elemento generado para que pueden identificarse.

//React utiliza los atributos "key" de los objetos en una matriz para determinar como actualizar la vista generada por un componente cuando el componente se vuelve a renderizar.

// COmo vimos al principio es buena practica tener cada componentre un un archivo disninto o modulo.

//Para trababar con modulo(componentes) por separado, la convencion dice que se crea un direcrorio llamado component dentro de src