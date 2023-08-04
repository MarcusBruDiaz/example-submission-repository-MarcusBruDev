const Total=(props)=>{

    let arr= props.arrayParts.parts.map((element)=>element.exercises)
   

    return(
        <>
         <p><strong>Total of : {arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue)} exercises</strong></p>
        </>
    )
}


export default Total