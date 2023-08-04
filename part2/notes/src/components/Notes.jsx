import React from "react"  // no es necsario en la nueva version de react, pero para vesiones anteriores se recomiendo importarlo debido que no reconocia JSX

const Note = ({note,toggleImportanceOf})=>{

    const label = note.important ? 'Make not important' : 'Make important';

    return(
      <>
        <li className="note">{note.content }</li>
        <button onClick={toggleImportanceOf}>{label}</button>
      </>
    )
}


export default Note