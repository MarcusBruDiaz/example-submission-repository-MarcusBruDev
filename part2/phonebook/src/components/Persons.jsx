import React from "react"

const Persons =(props)=>{

    
    if(props.persons.length>=1){
        return(
            <React.Fragment>
                      {
                        props.persons.map((person)=>{
                            
                            if(person.name){
                                
                                return(
                                    <form key={person.name} onSubmit={(event)=>{
                                        if(window.confirm(`Delete ${person.name} ?`)){
                                            props.supr(person.id,person,event)
                                            }
                                            
                                            } 
                                            
                                        }
                                    >
                                        <div>
                                            <label key={person.name} >{person.name} : {person.number}</label><button type="submit">Delete</button>
                                        </div>
                                    </form>

                                )
                            }
    
                        })
                     }
                    
            </React.Fragment>
        )
    }
 
        return(
            <React.Fragment>
                      {
                        props.persons.map((person)=>{
                            if(person.name){
                                return(
                                    <div key={person.name}>
                                        <p key={person.name}>{person.name} : {person.number}</p>
                                    </div>
                                
                                )
                            }
    
                        })
                     }
                     
            </React.Fragment>
        )

    


}

export default Persons

///<p >{person.name} : {person.number}</p> <button >Delete</button>