import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({courses})=>{

    return(
        <>
            <Content key={courses.id} courses={courses}/>            
        </>
    )
}


export default Course



//<Content courses={courses}/>
//<Total arrayParts={arrayParts}/>