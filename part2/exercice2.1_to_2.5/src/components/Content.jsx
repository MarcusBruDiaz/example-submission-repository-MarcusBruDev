import Part from "./Part"
import Header from "./Header"
import Total from "./Total"
import React from "react"

const Content = (props)=>{

  
    return(
        
        <>
        {props.courses.map((course)=>{
                return(
                
                    <React.Fragment key={course.id}>

                        <Header key={course.name} name={course.name}/>

                        <ul key={course.id}>
                                                       
                           {course.parts.map((part)=>{          
                                return(
                                        <Part name={part.name} key={part.id} exercise={part.exercises}/>
                                )                

                            })}
                        </ul>

                        <Total arrayParts={course}  />
                       
                    </React.Fragment>
                    
          
                ) 
               
            })
            }
        </>

        

        
    )
}


export default Content


