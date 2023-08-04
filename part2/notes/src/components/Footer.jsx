import React from "react"

const Footer =()=>{
    const footeStyle = {
        color:'green',
        fontStyle: 'italic',
        fontSize: 16,
        paddingBottom: 15
    }

    return(
        <div style={footeStyle}>
            <br />
            <em> Note app, departament of Cmputer Science, University of Helsinki 2020 </em>
        </div>
    )
}

export default Footer