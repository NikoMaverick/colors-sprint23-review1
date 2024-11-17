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
    setClassBox(boxRef.current.classBox)
  },[])

  return (
    <>
    <div 
    ref={boxRef}
    className={`box ${color}`}
    style={boxClass}
    >
    <h1>{color === value ? `Soy color ${color}` : `No soy color ${value}`} </h1>
      
    </div>
    </> 
  )
}
export default BoxColor;  
