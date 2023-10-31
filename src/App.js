import React from 'react';
import './App.css';
import Die from './components/Die';
import {nanoid} from "nanoid"
function App() {
  function allNewDice(){
    const newdice =[];
    for(let i = 0 ; i < 10;i++){
      newdice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      })
    }
    return newdice;
  }

const [Tenzies,setTenzies] = React.useState(false)


  const [num,setnum] = React.useState(allNewDice())
  
  React.useEffect(()=>{
    const allHeld = num.every(die=>die.isHeld)
    const firstval = num[0].value
    const allSame = num.every(die=>die.value === firstval)

    if(allHeld && allSame){
      setTenzies(true)
    }
  },[num])
  const elements = num.map(die => <Die key={die.id} value = {die.value} held = {die.isHeld} holdDice={()=>hold(die.id)}  />

  )

  function roll(){
    setnum(state => 
      state.map(die => {
        return die.isHeld ? die :{
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid(),
        }
      })
      )
  }

  function hold(id){
    setnum(prevState=> 
      prevState.map(die => die.id === id ? {
        ...die,
        isHeld : !die.isHeld,
      }: die)
    )
  }

  return (
      <main>
        <div className='die-container'>
        {elements}
        </div>
        <button className='roll-btn' onClick={roll}>Roll</button>
      </main>
  );
}

export default App;
