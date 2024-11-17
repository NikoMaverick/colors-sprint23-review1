import { useEffect, useState, useRef } from "react";
import BoxColor from "./BoxColor";

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  //const [value, setValue] = useState('')
  const [inputColor, setInputColor] = useState('')
  const inputRef = useRef(null); // Esta variable la podemos llamar como queramos

  return (
    <>
    <input 
    type="text"
    placeholder="Ingresa el color"
    value={inputColor}
    ref={inputRef}
    onChange={() => setInputColor(inputRef.current.value)}
    />
     <div className="container">
      {colors.map((color, i) => (
        <BoxColor key={i} color={color} value={inputColor}/>
      ))}
    </div>
    </>
  );
}

export default MyForm;