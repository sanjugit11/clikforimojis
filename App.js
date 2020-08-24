import React ,{useState} from 'react';
import './index.css';
const App = () => {
  const color = "yellow";
  const[value,updated]=useState( color);
  const clickme ="click";
  const[name,setName]=useState(clickme);

  const fcolor = () => {
    let newBg = "red";
    updated(newBg);
    let bname = "hyy 😅";
    setName(bname);
  }
  const lcolor = () => {
    let newBg = "green";
    updated(newBg);
    let bname = "aiyyo 😠 ";
    setName(bname);
  }
  return(
    <>
    <div style={{backgroundColor:value }}>
  <button onClick={fcolor} onDoubleClick={lcolor}>{name}</button>
    </div>
    </>
  )
};

export default App;
















