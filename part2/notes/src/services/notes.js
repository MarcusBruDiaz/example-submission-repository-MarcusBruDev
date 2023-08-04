import axios from "axios";

const baseUrl = 'http://localhost:3001/notes';


const getAll = ()=>{
    const request= axios.get(baseUrl);
    return request.then(response=>response.data)
}


const create= (newObject)=>{
    const request = axios.post(baseUrl,newObject)
   return request.then(response=>response.data)
}


const update = (id, newObject)=>{
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return  request.then(response => response.data)
}

const objMethodsAxios={  // En la nueva especificacion de JS ES6 , si la clave es igual al valor dentrop de obketo, basta con declarar el nombnre de la propiedad.
    getAll,
    create,
    update
}

export default  objMethodsAxios