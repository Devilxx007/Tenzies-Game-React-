import React from 'react'

const Die = (props) => {
    const styles={
        backgroundColor: props.held ? "#59E391" : "white"
    }
  return (
    <div className='die-box' style={styles} onClick={props.holdDice}>
      <h3 className='die-num' >{props.value}</h3>
    </div>
  )
}

export default Die
