import React, {useState,useEffect} from "react";
import axios from "axios"
import Paises from "./components/Paises";


function App() {
  const [findCountrie, setFindCountrie]= useState("")
  const [countries, setCountries]= useState([]);
  const [newCountrie,setNewCountrie] =useState();
  const [weatherstack, setWatherStack]= useState([]);
  const[onlyoneCountrie, setOnlyOneCuntrie]= useState("New York");


  const handelInputCountrie = (setCountrie)=>(event)=>{
      setCountrie(event.target.value)
      setNewCountrie();
  }

  const params = {
    access_key: process.env.REACT_APP_API_KEY,
    query: onlyoneCountrie
  }
 

 
  useEffect(()=>{
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all").then((response)=>{
      const data = response.data;
      setCountries(data)
    })

  axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
        if (!response.data.error) {
            const apiResponse = response.data;
            setWatherStack(apiResponse);
            console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
        } else {
            console.log(`Response error: code: ${response.data.error.code}, info: ${response.data.error.info}`)
        }
    }).catch(error => {
        console.error("An error occurred: ", error);
    }
    )
  },[onlyoneCountrie])
  //onlyoneCountrie
  
  
 
  const arr= countries.filter((countrie)=>{
    if(countrie.name.official.toLowerCase().indexOf(findCountrie.toLowerCase())!==-1){
      return countrie.name.official
    } 
  })
   
  console.log(arr.length)





  return (
    <>
      <div>Find countries: <input value={findCountrie} onChange={handelInputCountrie(setFindCountrie)}></input></div>
      <Paises arr={arr}  newCountrie={newCountrie} setNewCountrie={setNewCountrie} setOnlyOneCuntrie={setOnlyOneCuntrie} weatherstack={weatherstack}/>
      
      
    </>
  );
}

export default App;
