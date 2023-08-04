import React from "react"  // no es necsario en la nueva version de react, pero para vesiones anteriores se recomiendo importarlo debido que no reconocia JSX

const Note = ({note})=>{
    return(
      <>
        <li>{note.content }</li>
      </>
    )
}


export default Note