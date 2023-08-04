import React,{useState, useEffect} from "react";
import Note from "./components/Notes";
import axios from "axios"
import objMethodsAxios from "./services/notes";
import "./index.css"
import Notification from "./components/Notificacion";
import Footer from "./components/Footer";

const App =(props)=>{

    const[notes,setNotes] = useState([])
    const[newNote, setNewNote]= useState('')
    const[showAll,setShowAll]= useState(true)
    const[errorMessage,setErrorMessage]=useState(null)

/*     const promise = axios.get('http://localhost:3001/notes')
    console.log(promise)
    promise.then(response=>console.log(response.data)) */


    useEffect(()=>{
        console.log('effect');
        objMethodsAxios.getAll().then((initialNotes)=>{
            setNotes(initialNotes)
        })
    },[])// el segundo parametro nos indica la frecuencua con qye se va a ejecutar el efecto. esto quiere dedir que si le pasamos [] se ejecutara el efecto solo con el primer renderizado.



    const addNote = (event)=>{
        event.preventDefault();
        
        const noteObject ={
            content:newNote,
            date: new Date().toDateString(),
            important: Math.random() < 0.5,
        }


        objMethodsAxios.create(noteObject).then((initialNotes)=>{
            setNotes(notes.concat(initialNotes))
            setNewNote('')
        })


    }


    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }
    
        objMethodsAxios
          .update(id,changedNote).then(returnedNote => {
            setNotes(notes.map(note => note.id !== id ? note : returnedNote))
          })
          .catch(error => {
            setErrorMessage(
              `Note '${note.content}' was already removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNotes(notes.filter(n => n.id !== id))
          })
      }



/*     const toggleImportance = (id)=>{
        console.log(id)
        const url = `http://localhost:3001/notes/${id}`;
        const note = notes.find(note => note.id === id );
        const changedNote = {...note , important: !note.important}

        objMethodsAxios.update(id,changedNote).then((initialNotes)=>{
            setNotes(notes.map((note)=> note.id !==id ? note : initialNotes))
        })
    }
 */

    const notesToShow = showAll ? notes : notes.filter(note=>note.important)

    const handleNoteChange = (event)=>{
        setNewNote(event.target.value)
    }

    return(
        <>
            <h1>Notes</h1>
            <Notification message={errorMessage}/>

            <div>
                <button onClick={()=>setShowAll(!showAll)}>
                    show {showAll ? 'important': 'all'}
                </button>

            </div>
            
            <ul>
                {notesToShow.map((note)=>(
                    <Note key={note.id} note={note} toggleImportanceOf={()=>toggleImportanceOf(note.id)} />
                ))
                }

            </ul>

            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/> <br></br><br></br>
                <button type="submit">Save</button>
            </form>


            <Footer/>
            
                
        </>
    )
}

export default App