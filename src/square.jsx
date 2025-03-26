import React from 'react'
import { useState } from 'react'

function Square({value,onClick}){
// const [tic,setTic]=useState(true)

    return (
        <div className='squaree' onClick={onClick} >
        
        <h3>{value}</h3>
        </div>
    )
}

export default Square