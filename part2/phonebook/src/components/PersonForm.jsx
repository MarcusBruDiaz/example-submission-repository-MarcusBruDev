import React from "react"


const PersonForm =(props)=>{
    return(
        <React.Fragment>
                  <form onSubmit={props.onSubmit}>
                        <div>Name: <input value={props.newName} onChange={props.handlename}/></div>
                        <div>Number: <input value={props.number} onChange={props.handleNumber}/></div>

                        <div>
                        <button type="submit">add</button>
                        </div>
                    </form>
        </React.Fragment>
    )
}

export default PersonForm