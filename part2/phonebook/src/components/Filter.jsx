import React from "react"

const Filter =({handleFindPerson,findPerson})=>{
    return(
        <React.Fragment>
           <div>Filter shown with <input value={findPerson}  onChange={handleFindPerson}/></div>
        </React.Fragment>

    )
}

export default Filter