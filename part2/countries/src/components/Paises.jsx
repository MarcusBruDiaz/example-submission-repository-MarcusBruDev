import React, {useState,useEffect} from "react"

const Paises=(props)=>{

   //const [newCountrie,setNewCountrie] =useState();
   //console.log(props.weatherstack.location)
   const arr= props.newCountrie ? props.newCountrie : props.arr

   const handleOnlyCountrie = (countrie)=>{
     props.setOnlyOneCuntrie(countrie)
   }


    if(arr.length>10){
        return(
            <>
                <p>Too many matches, specify another filter</p>
                
            </>
        )
    }if(arr.length===1){
            return(
                <>
                    {arr.map((countrie)=>{
                        console.log("aqui abajo esta el error");
                        handleOnlyCountrie(countrie.name.common);
                        
                        return(
                            <React.Fragment key={countrie.name.common}>
                                <div>
                                        <h2 key={countrie.name.common} >{countrie.name.common}</h2>
                                        <p key={countrie.capital}>Capial: {countrie.capital}</p>
                                        <p key={countrie.population}>Populaton: {countrie.population}</p>
                                </div>
                                <div>
                                    <h2>Languages</h2>
                                    <ul>
                                      {Object.keys(countrie.languages).map((language)=>{
                                        return(
                                            <li key={language}>{language}</li>
                                        )
                                      })

                                      }
                                    </ul>
                                </div>
                                <div>
                                    {countrie.flag}
                                </div>
                                <div>
                                    
                                </div>
                                <button onClick={()=>{props.setNewCountrie()}}>Back</button>
                            </React.Fragment>
                        )
                    })}

                    <div>
                        <h2>Weather in {props.weatherstack.location.name}</h2>
                        <p><strong>Temperature:</strong> {props.weatherstack.current.temperature} °C</p>
                        {props.weatherstack.current.weather_icons.map((icon)=>{
                            return(
                                <img src={icon}></img>
                            )
                        })}
                    </div>

                    
                </>
            )
    }
    return(
        <>
                  {
                    arr.map((countrie)=>{
                       
                            return(
                                <React.Fragment key={countrie.name.common}>
                                 
                                        <p key={countrie.name.common}>{countrie.name.common}</p>
                                      
                                        <button onClick={()=>props.setNewCountrie([countrie])}>Show</button>
                                    
                                    
                                </React.Fragment>

                            )
                    })
                 }
        </>
    )
    
    
}

export default Paises

///<p key={countrie.name.official}></p>
/* 
<div>


</div> */