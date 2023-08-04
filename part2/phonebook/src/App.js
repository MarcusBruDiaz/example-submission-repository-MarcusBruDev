import React, {useState,useEffect} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios"
import objMethodsAxios from "./services/phonebook";
import "./index.css"
import NotificationPhoneBook from "./components/Notificacion";

function App() {

  const [persons, setPersons]= useState([])
  const [newName, setNewName] =  useState('')
  const [number, setNumber]= useState('')
  const [findPerson,setFindPerson] = useState('')
  const [idToDelete,setIdToDelete]= useState('')
  const[succesfulMessage,setsuccesfulMessageMessage]=useState(null)
  const[errorMessage,setErrorMessage]=useState(null)


  //useEfecct: aqui se ejecuta solo en el primer rendertizado el medoto getAll, lo que hace es obtener los datos del servidor json-server
  useEffect(()=>{
      objMethodsAxios.getAll().then((data)=>{
        setPersons(data)
      })
  },[])
  
  //obtengo los nombre de las personas que ya estan agregadas a la libreta telefonica, con el fin de comprobar mas adelante que no se duplique una persona
  const claves=persons.map((person)=>person.name.toLowerCase());
  const callNumber = persons.map((person)=> person.number);
  //console.log(callNumber)

  // filtro: si findPerson tiene nombre a buscar, entonces se realiza la sentencia despies de ? la cual devuelbe un array con el nopmbre que se escribio en findPerson , pero si no escriben nada en findPerson el arr es vacio
  const arr= findPerson ? persons.filter((person)=>{
          if(person.name.toLowerCase().indexOf(findPerson.toLowerCase())!==-1){
            return person
          }
  }) : []



   //funcion para agregar un nuevo numero a la lista
  const addName = (event)=>{
    
    event.preventDefault();

      // se valida que no exista el nombre a agragar en la lista , si estuviera incluido, muestra un mensaje y finaliza la funcion con return.Pero si no esta incluido sigue el proceso de agregar nuevo nombre a  la lista

    if(claves.includes(newName.toLocaleLowerCase()) ){
      
      const per = persons.find(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase());

      if(window.confirm(`${per.name} is already added to phonebook, replace the old number with a new one?`)){
      const url = `http://localhost:3001/notes/${per.id}`;
      const changedNote = {...per , number: number}
      objMethodsAxios.update(per.id,changedNote).then((initialNotes)=>{
        setPersons(persons.map((person)=> person.id !==  per.id ? person : initialNotes))
        setsuccesfulMessageMessage(`Updated ${initialNotes.name}`)
    }).then((data)=>{
      setTimeout(()=>{setsuccesfulMessageMessage(null)},2000)
    })

      setNewName('')
      setNumber('')
      return
    }

    alert(`${newName} is already added to phonebook` )
    setNewName('')
    setNumber('')
    return
   
        
      }

  
 

      //objeto con los datos del nueva persona.


      const ObjnewName ={
          name: newName,
          number: number
      }

      objMethodsAxios.create(ObjnewName).then(data=>{
        setPersons(persons.concat(data))
        setsuccesfulMessageMessage(`Added ${data.name}`)
        setNewName('')
        setNumber('')
      }).then((data)=>{
        setTimeout(()=>{setsuccesfulMessageMessage(null)},2000)
      })
    
      
     
  }

  const supr = (id,person,event)=>{
    event.preventDefault();
    //console.log(id)
    console.log(person)
    setsuccesfulMessageMessage(`Deleted ${person.name}`)
    objMethodsAxios.supr(id).then(data=>{

      setPersons(persons.filter(person => person.id !== id))
    }).then(()=>{
      setTimeout(()=>{setsuccesfulMessageMessage(null)},2000)
    })
    .catch((error)=>{
      setErrorMessage(`Information of '${person.name}' has already been removed from server`)
      //alert(`the name '${person.name}' was already deleted from server`)
      setPersons(persons.filter(person => person.id !== id))
    }).then(()=>{
      setTimeout(()=>{
        setErrorMessage(null)
        setsuccesfulMessageMessage(null)
      },3000)
    })
  }

  const find = ()=>{
      const filter = persons.filter(person=>{
          //cambie while
          if(person.name.toLowerCase().indexOf(findPerson.toLowerCase())!==-1){//index off muestra todos lo elementos al principop toda vez que encuentra ''
                return person
          }
      })
      
      return filter
  }


  
  const handlename = (event)=>{
      setNewName(event.target.value)
  }

  const handleNumber = (event)=>{
      setNumber(event.target.value)
  }

  const handleFindPerson = (event)=>{
      setFindPerson(event.target.value)
      
  }

  const toggleImportance = (id)=>{
    console.log('Hola')

  }

  return (
    <>
      <h2>Phonebook</h2>
      <Filter handleFindPerson={handleFindPerson} findPerson={findPerson}/><br></br>

      <NotificationPhoneBook succesfulMessage={succesfulMessage} errorMessage={errorMessage}/>
      <h2>Add new number phone to Phonebook</h2>
      
      <PersonForm  onSubmit={addName} newName={newName} handlename={handlename}  number={number} handleNumber={handleNumber} toggleImportance={()=>toggleImportance()}/>


      



      <h2>Numbers..</h2>
      <Persons persons={persons}  supr={supr} toggleImportance={toggleImportance} />

      
      <h2>Detail person finded</h2>
      <Persons persons={arr} /> 

      
   </>
  );
}

export default App;


/* {
  find().map((person)=>{
    if(person.name){
        return(
          <p key={person.name}>{person.name} : {person.number}</p>
        )
      }

  })
  } */


  //{findPerson !=="" ? <Persons persons={find()}/> : <p>type name</p>}