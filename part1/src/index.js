import React,{useState} from 'react';
//import ReactDOM from 'react-dom'
//import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */

/* 
const Hello = (props)=>{
  return(
    <div>
      <p>Hello worl from other component with recive data of other componente:{props.name} tiene {props.age}</p>
    </div>
  )
}


const App = () => {  // App es un componente
  
  const now  = new Date();
  const a =  10;
  const b= 20;
  const age = 32;
  console.log('Hello from component');
  return(
    <div>
      <p>Hello world</p> 
      <p>{a} plus {b} is {a+b}</p>
      <h1>Greetings</h1>
      <Hello name='Marcus' age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))  */


//este ultimio comando renderiza su contenido en el elemento div, definido en el archivo public/index.html, que tiene el valor de id: 'root'.

// lOS COMPRONENTES se definen como una funcion JS 

//estas funciones se asignar a una variable constante iniciada con la primera letra en mayurcula.

//en el codigo como la funcion solo esta debolviendo una sola expresion en este caso <div> entonves se hizo como el codigo anterior de App , sin embargo, en los casos donde el componente devuelva varias expresiones se debe devolver con return (.....)

//la funcion que define el componente puede recibir cualquier tipo de codigo JS antes de devolver la expresion.

//podemos rendezonar contenido dinamico dentro de un componente, haciendo la logia en el componente como se dijo y en el componente encerrando entre {} las variabvles o el codigo js.

//se evalua cualquier codigo JS entre llaves y el resultado de esta evaluacion se incrusta en el lugar definido en el HTML pruducido por el componente.


// Patrece que los componentes estan devolviendo marcado HTML, sin embargo, no es asi. El diseño de los componentes de REACT se escribe prin cipalmente con JSX.

//Aunque JSX tiene parecido con HTML, no es lo mismo lo que se hace es escibir JS baso cuerdas.  el JSX devuelto por los componentes de REACT se compilan con JS.

//La compilacon que se hace esta a cargo de babel.Los proyestos creados con create-react-app se compilan automatiamente.

//Todas las etiquetas en JSX (LO QUE DEVUELVE EL COMPONETE DE REACT) deben cerrarse.


//la filosofis de react es crear muchos componentes para ser reutilizados.

//Hayn una ocnvencion muy fuerte que indica que el componente raiz siempre debe ser App, sin embargo esto puede cambiar en algunos escenarios donde App a su vez haga parte de otro componente dentro del arbol de componentes.


//Es posible pasarle datos a un componente mediente props, modificque mos el componente Hello.

//props es un objeto.


// al momenmto de pasarle datps a un componente y este dato viene de una operacion o un codifgo js este debe ir encerrado en {}

//En vez de encerrar varios componentes en un div, tambien podemos devolver un array d

//Tambien podemos utilizar la etiqueta fragments, es decir envolvienbdo los elementos que el componente devuelve en un elmento vacio.  <>   </>



/* Estados del componente, controladores de eventos. */


//Funciones auxiliares del componente.


//Se denominan funciones auxiliales a aquellas que estan dentro de la funcion del componente, y que a su vez, realizan alguna logica para el componente mismo.  a estas funciones no es necesario pasarles parametros debido que puede tomarlo de los props. Veamos un ejemplo donde vamos a adivinar el año de nacimietno de  la persona solo con le edad, esto lo vamos hacer en el componen te Hello

/* const Hello = (props)=>{
  const bornYear = ()=>{
    const yearNow = new Date().getFullYear();
    return yearNow - props.age
  }

  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old  </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = () => {  // App es un componente
  
  const now  = new Date();
  const a =  10;
  const b= 20;
  const age = 32;
  console.log('Hello from component');
  return(
    <div>
      <p>Hello world</p> 
      <p>{a} plus {b} is {a+b}</p>
      <h1>Greetings</h1>
      <Hello name='Marcus' age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))  */

//Desestructuracion

//Nos permite desesturturar valores de objetos y matrices.

//podemos simploficar el codgfiop anterior con dividiendo los props en dos vatriables name y  age :

/* const Hello = ({name,age})=>{


  

  const bornYear = ()=> new Date().getFullYear() - age

  return(
    <div>
      <p>Hello {name}, you are {age} years old  </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = () => {  // App es un componente
  
  const now  = new Date();
  const a =  10;
  const b= 20;
  const age = 32;
  
  return(
    <div>
      <p>Hello world</p> 
      <p>{a} plus {b} is {a+b}</p>
      <h1>Greetings</h1>
      <Hello name='Marcus' age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 
 */


//Re-renderizado de la pagina.

//Hasta ahora toda  nuestra aplicacion han sido que siu apariencia es estatica despues de la renderiaszion inicial.¿ Que pasaria si quisieramos crear un contador donde el valor aumentada en funcion del tiempo o con el clivk de un boton?


/* const App = ({counter})=>{
  return(
    <div>
        <p>{counter}</p>
    </div>
  )
}

let counter = 1
 */

/* ReactDOM.render(
  <App counter={counter+=1} />, 
  document.getElementById('root')
) */

// en este casi no se pinta nuevamente el componente con el nuevo dato, cuando lo cambiamos, solo cambia el valor y listo. pero no se pinta oytra vez.

// Con el fin de que se muestre una segunda vez, sin necesitar de crear otro componente que haga lo mismo ,m podemos hacerlo llamando a ReactDom.render por segunda vez.

/* const refresh =()=>{
  ReactDOM.render(
    <App counter={counter} />, 
    document.getElementById('root')
  )
} */
//en el cpdigo anterior lo que hacemos es embolver el renderizado dentro de una rfuncion para reducir la cantidad de codigo.

/* refresh();
counter +=1;
refresh();
counter+=1;
refresh();
 */

// aqui se pintarian 1, 2 y al final el 3 pero no se ven debido que el tiempo es tan corto que no pueden ser notados.

// Para poder verlos vamos a embolver el cofifo dentro de un setInterbal, que lo que hace es ejecutar un codigo cada cierto tiempo.


/* 
let count = 0;

let id = setInterval(()=>{
  refresh();
  counter+=1;
  count++
  if(count==10){
    clearInterval(id);
  }
},1000)
 */
// Hacer llamdas repetitivas el metodo ReactDom.render no es la forma mas reomendada para renderizar componentes. Vemos la mejor forma :)


//Componente con estado.

//Todosa los componentes creados  hasta el momento han sido simplos y sin un estado que pueda cambiar durante el ciclo de vida del mismo.


//Vamos a agregarle ESTADO al componente App, esto lo haremos con hook de estado de React.

//Lo primero que se hixo fue importar el hook useState en la partte de arriba de este scrip



/* const App= ()=>{
  //Aio comiensa haciendo un llamado a la funcion useState
   //a su vez inicializa el valos de counter en 0;
    //la funcio useState, devuelve una matriz con dos valores. un valor asingando a counter y una funcion setCounter que es la unica que se puede utilizart para modificar el estado(counter), Nota: aqui se utiliza desestructuracion de array.
  const [counter, setCounter] = useState(0);
  
  let id = setTimeout(()=>{
    setCounter(counter+1)  // aqui despues de cada segundo, se llama s setCounter y modifgica el estado y React vuelve a renderizar el componente. Lo que significa que el cuerpo de la funcion del componente se vuelve a ejecutar. Cuado se vuelve a ejecutar llama a la funcion useState de vevuelve el valor de estado 1 y asi susecivamente.
  },1000)

  //Cada vez que setCounter modifica el estado, hace que el componente se renderice.
  
  if(counter===10){
    clearTimeout(id)
  }

  return(
    <>
      <p>{counter}</p>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))

 */
//Manejo de eventos.

//Vamos a cambiar la aplicacion para que aunmente el contador cuando un usuario de click en un boton.

//Los botonnes admiten los llamados eventos de mousem de los cuales click es el evento mas comun.


/* const App= ()=>{

  const [counter, setCounter] = useState(0);

  return(
    <>
      <p>{counter}</p>
      <button onClick={()=>{setCounter(counter+1)}} >Plus</button>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root')) */

//El controlador de eventos es una funcion.

//Los controladores de eventos son las ufnciones que se le pasan a los eventos de los elemtnos, por ejemplo en el boton el atributo onClick  recibe una funcion entonmces esa es la funcion cntroladora de evebtos.

//No es recomendable quye hagamos como el codigfo anterior de pasar las funciones directamente en el JSX, es mejor separa los controladores de eventos del JSX, de la siguiente manera:


/* const App= ()=>{

  const [counter, setCounter] = useState(0);
  
  const increaseByOne = ()=> setCounter(counter + 1);

  const setToZero = ()=> setCounter(0)
   

  return(
    <>
      <p>{counter}</p>
      <button onClick={increaseByOne}>Plus</button>
      <button onClick={setToZero}>Zero</button>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
 */
// Las funciones controladoreas de eventos deben ser pasadas como referencia de la funcion mas no la ejecucion ().



//Pasando el estado a componentes Hijos

//Se recomiensa escribir cimponentes de REACT que sean pequeños y reutilizables en toda la aplicacion.

///Vamos a refactorizar nuestro aplicacion, diviviendo el mostratr el contador y los botones en otro componente.


//Mejor practica es levantar el estado de jerarquia de componentes

//Documentacion dice: A menudo, varios componentes deben reflejar los mismo datos cambiados. Recomendamos elevar el estado compartido a si acestro comun mas cercano.

//Asi que coloquemos el estado en el componente Appp y se lo pasamos al componente Display

const Display=({counter})=>{
  return(
    <>
      <p>{counter}</p>
    </>
  )
}


const Button = ({handleClick,text})=>{
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}


/* const App= ()=>{

  const [counter, setCounter] = useState(0);
  
  const increaseByOne = ()=> setCounter(counter + 1);

  const setToZero = ()=> setCounter(0)
   

  return(
    <>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text='Plus'/> 
      <Button handleClick={setToZero} text='Zero'/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))  */

//El controlador de eventos se pasa al componente Button a traves de la propiedad handleClick. El nobre del prop en si no es tan significadtivo, pero la documentaciopn recomienda esta convencion.

// Los cambio de estado provocan re-renderizacion.




///Estado complejo de un componente:

//Si, llegaramos a necesiras un estado de componente mas complejo, prodriamos crear partes de estado separados, quiere decir que crear varios useState y asiganrlos a varias variables con sus respectivas funciones modificadoras.

//Pero esto no se ve tan cool, enronces podriamos pensar  guardar los diferentes estados y unirlos en un objeto.

//Supongamos que queremos guardar en el estado los click que damos a la derecha y a la izquierza (dos botones), seria entionces crear un oibjeto para ese estado con right y left

/* {
  right: 0,
  left :0
} */

//hagamo la aplicacion.

/* const App = ()=>{

  const [clicks,setClicks]= useState({
    left:0,right:0 
  })  // aqio el componente solo tiene una parte de estado y los controladores de evenbtos debem encarharse de cambiar el estado cimpleto de la aplicacion.

  const handleleftClick = ()=>{
      setClicks({...clicks,left:clicks.left +1})
  }

  const handleRightClick =()=>{
  
    setClicks({...clicks,right:clicks.right +1} )
  }

  return(
    <>
      <Display counter={clicks.left}/>
      <Button text='left' handleClick={handleleftClick}/>
      <Button text='right' handleClick={handleRightClick}/>
      <Display counter={clicks.right}/>
    </>
  )


}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */
//En REACT esta prohibido mutar estado directamente.

// el estado siempre debe actualizarce pasadndo un nuevo objeto.


//Manejo de matrices.

//Cuando manejamos matrices en lso estados y estamos mofificando el array, debemos tener en cuenta de utilzair metodos de array que devuelvan un nuevo arrau debido que los estados deben ser mofificados con nueos datros asi sean copiados.

//Veamos un ejemplo donde, amos a guardar un intorial de clicks en un array, siendo L para le¿ft y R para right


/* const App =()=>{
  const [left, setLeft] = useState(0)
  const [right, setRight]= useState(0);
  const [allArrayClicks, setAllArrayClicks] = useState([])

  const handleleftClick=()=>{
    setAllArrayClicks(allArrayClicks.concat('L')) // contac devuelve un copia del array original.
    setLeft(left+1)
  }

  const handleRightClick =()=>{
    setAllArrayClicks(allArrayClicks.concat('R'))
    setRight(right + 1)  
  }


  return(
    <>
      <Display counter={left}/>
      <Button text='left' handleClick={handleleftClick}/>
      <Button text='right' handleClick={handleRightClick}/>
      <Display counter={right}/>
      <Display counter={allArrayClicks.join(' ')}/>
    </>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */

// Renderizacion condicional

///Modificquemos nuestra aplicacion para que el rendertizado del historial de click sea manejada por un nuevo componente History:


const History = ({allArrayClicks})=>{
  if(allArrayClicks.length === 0){  //Ahora mostar el historial depende si se ha echo click en los botones.
    return(
      <>
        <p> The app is used by pressing the buttons</p>      
      </>
    )
  }

  return(
    <>
      <p>button press History:  {allArrayClicks.join(' ')}</p>
    </>

  )


}
/* 
const App =()=>{
  const [left, setLeft] = useState(0)
  const [right, setRight]= useState(0);
  const [allArrayClicks, setAllArrayClicks] = useState([])

  const handleleftClick=()=>{
    setAllArrayClicks(allArrayClicks.concat('L')) // contac devuelve un copia del array original.
    setLeft(left+1)
  }

  const handleRightClick =()=>{
    setAllArrayClicks(allArrayClicks.concat('R'))
    setRight(right + 1)  
  }


  const resetHistory =()=>{
    setAllArrayClicks([]);
  }

  return(
    <>
      <Display counter={left}/>
      <Button text='left' handleClick={handleleftClick}/>
      <Button text='right' handleClick={handleRightClick}/>
      <Display counter={right}/>
      <History allArrayClicks={allArrayClicks}/>
      <Button text='reset history' handleClick={resetHistory}/>
    </>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 */
// En el react antiguo no existian los extados para los componentes funcionales, aqui que se manejaban los estados con componentes de clases.
// Pero hoyn por hoy con los hook ya se puede trabajar los estados con componentes funcionales.

//Deporacion de apliocaciones REACT

//Gran parte del tienmpo como desarrolladores pasaremos revisando codigo y viendo por que algo esta roto o como funciona algo, rara vez para a tener qye escrbir tantas lienas de codigo.

//POr lo anterior las buenas practicas y las herramientas para depurar son extremadamente importantes.


// REACY es iuna libreria extremadamente amigable para nosotros los desarrolladores cuando se trata de depurar.

//Reglas del desarrollo Web

//- Mantenga la consola del navegador abierta.
//- Manten tu codigo y la pagina web aviertos al mismo tiempo.
//- Si mi codigo falla al compilarse y su navegadro se ilumina coimo arbol de navidad, no escriba mas codigo, busque la solucion al problema inmediatamente.
//- Si no funciona el codigo de un componente es recomendable comenzar a imprinir los props u las variables en consola.
//-imprimir en consola no es la unica forma. POdemos pausar la ejecucion del codigo de su aplicacion en el depurador de la consola de desarrollador de Chrome. escribiendo debbuger en cualquier parte del codigo. la aplicacion se detendra una vezx llegue al punto donde se ejecuta el comando debugger.


//regas de los Hooks


//Hay algunas caracteristicas o reglas que debemos segior para que nuestras aplciaciones utilice de forma corracta las funciones de estado basadas en hooks


//las funciones de estado, no se deben  llamas desde bucles o desde condiciones 

//En resumen laas las fujnciones de los hooks solo pueden ser llamadas desde un cuerpo de funcion qiue define un componente REACT


//funcion que devuelve una funcion:

//Otra forma de definir un controlador de eventos es utilizar una funcion que devuelve una funcion.

//vemos un ejemplo:


const App = ()=>{
  const [value,setValue] = useState(10)


  const hello = ()=> ()=> console.log('Hello world')



  return(
    <>
     <Button handleClick={hello()} text='button'/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//Pero que nos aporta devilver una funcion, nada mas ni anda menos que poder pasarle parametros al controlador de eventos.en el elemento.