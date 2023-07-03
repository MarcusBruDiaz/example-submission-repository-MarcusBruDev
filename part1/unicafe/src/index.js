import React,{useState} from 'react'
import ReactDOM from 'react-dom'


const Tittle = ({tittle})=>{
    return(
        <>
            <h1>{tittle}</h1>
        </>
    )
}

const Button =({handleClick,text})=>{
    return(
        <>
            <button onClick={handleClick} >{text}</button>
        </>
    )
}

const Result =({coment,value})=>{
    return(
        <>

            <p>{coment} : {value}</p>
        </>
    )

}

const StatisticsLine = ({coment,value})=>{

    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td>{coment} :</td>
                        <td>{value}</td>
                    </tr>
                    
                </tbody> 
            </table>
         
        </>
    )
}

const Statistics=(props)=>{
    let value = Object.values(props.coment);

    if(value.reduce((accumulator, currentValue)=> accumulator+ currentValue)===0){
        return(
            <>
                <p>No feedback given</p>
            </>
        )
    }
    
    return(
        <>
            <StatisticsLine coment='good' value={props.coment.goog}/>
            <StatisticsLine coment='Neutral' value={props.coment.neutral}/>
            <StatisticsLine coment='Bad' value={props.coment.bad}/>
            <StatisticsLine coment='Total' value={props.total()}/>
            <StatisticsLine coment='Average' value={props.average()}/>
            <StatisticsLine coment='Positive' value={props.positive()}/>
        </>
    )
}

const App=()=>{
    const [numComent, setNumComent] = useState({
        goog:0,
        neutral:0,
        bad:0
    })


    const handleGoodClick= ()=>{
        setNumComent({...numComent,goog: numComent.goog +1 })
    }

    const handleNeutralClick= ()=>{
        setNumComent({...numComent,neutral: numComent.neutral +1 })
    }


    const handleBadClick= ()=>{
        setNumComent({...numComent,bad: numComent.bad +1 })
    }

    const sumAll =()=>{
        let value = Object.values(numComent);
        return value.reduce((accumulator, currentValue)=> accumulator+ currentValue)
    }

    const average = ()=> sumAll() / 3;

    const positive=()=>{
        let total = sumAll();
     
        return (numComent.goog*total)/100;
    }
 
  

    return(
        <>
            <Tittle tittle='Give feedback'/>

            <Button text='Good' handleClick={handleGoodClick}/>
            <Button text='Neutral' handleClick={handleNeutralClick}/>
            <Button text='Bad' handleClick={handleBadClick}/>


            <Tittle tittle='Statistics'/>

            <Statistics coment={numComent} total={sumAll} average={average} positive={positive}/>


   

        </>
    )
}




ReactDOM.render(<App/>, document.getElementById('root'))