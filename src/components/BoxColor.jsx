import { useState, useRef, useEffect, } from "react";

function BoxColor ({color, value}) {
  const [classBox, setClassBox] = useState('')
  const boxRef = useRef(null)

  const boxClass = {
    backgroundColor: classBox == `box ${value}` ? color : null,
    border: `2px solid ${color}`,
    color: color
  }

  useEffect(() => {
    setClassBox(boxRef.current.className) 
  },[])

  return (
    <>
    <div 
    ref={boxRef}
    className={`box ${color}`}
    style={boxClass}
    >
    {color === value ? <h1 style={{color: 'black'}}> Yes, I'm {value} color</h1> : <h1>I'm not {value} color</h1> }
      
    </div>
    </> 
  )
}
export default BoxColor;  
