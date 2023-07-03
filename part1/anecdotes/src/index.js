import React, { useState } from 'react'
import ReactDOM from "react-dom/client";


const Button = ({handleClick,text})=>{

  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Anecdote =({anecdote})=>{
  return(
    <>
      <p>{anecdote}</p>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points,setPoints]= useState([...props.anecdotes].fill(0))
  console.log(points)

  let min = 0;
  let max = props.anecdotes.length

  const randomAnecdote =()=>{
    setSelected(Math.floor(Math.random()*(max-min)+min))
  }

  const voteAnecdote=()=>{
    let copy = [...points]
    copy[selected]+=1
    setPoints([...copy])
  }


  console.log(points.indexOf(Math.max(...points)) )



  return (
    <div>
      <Anecdote anecdote={props.anecdotes[selected]}/>
      <Button text='Vote' handleClick={voteAnecdote}/>
      <Button text='Next anecdote' handleClick={randomAnecdote}/>
      <Anecdote anecdote={props.anecdotes[points.indexOf(Math.max(...points))]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);

