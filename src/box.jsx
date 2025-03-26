import React from 'react'
import Square from './square'
import { useState } from 'react'
function Box(){
   const [state,setstate]=useState(Array(9).fill(null))
const [tic,setTic]=useState(true)
function checkWinner(){
    const winningCombos = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2
      ];

      for(let logic of winningCombos){
      const[a,b,c]=logic;
      if( state[a] === state[b] && state[a] === state[c] ){
  return state[a];
      }
      
        return false;
      
      }
}


   function handleClick(index) {
    const copyState=[...state];
    copyState[index]=tic?"X":"O"
    setstate(copyState) //react ko update karne ke liye naya state diya
    setTic(!tic)

    const isWinner=checkWinner();


 }
   console.log(state);
    return(
       
       <div className='main-container'>
        {isWinner?(<>{isWinner} WONN,CONGRATULATION</>):(<>
        <div className='row'>
        <Square  onClick={()=>handleClick(0) } value={state[0]}/>
        <Square  onClick={()=>handleClick(1) } value={state[1]}/>
        <Square onClick={()=>handleClick(2) } value={state[2]}/>
        </div>
        <div className='row'>
        <Square onClick={()=>handleClick(3)} value={state[3]}/>
        <Square onClick={()=>handleClick(4) } value={state[4]}/>
        <Square onClick={()=>handleClick(5) } value={state[5]}/>
        </div>
        <div className='row'>
        <Square onClick={()=>handleClick(6)} value={state[6]}/>
        <Square onClick={()=>handleClick(7)} value={state[7]}/>
        <Square onClick={()=>handleClick(8)} value={state[8]}/>
        </div>
        </>)}
       </div>
     
    )
}

export default Box