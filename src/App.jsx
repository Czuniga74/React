import React from "react";
import {useState} from "react"

export function App(){
	const [show,setShow]=useState(0)
	const handleShow=(show)=>{
		setShow(show)
	}
	return (<div>
				<div className='main'>
				<button onClick={()=>handleShow(1)}>Rojo</button>
				<button onClick={()=>handleShow(2)}>Azul</button>
				<button onClick={()=>handleShow(3)}>Amarillo</button>
				<br />
				{show === 1 && <div className='DivRed'></div>}
				{show === 2 && <div className='DivBlue'></div>}
				{show === 3 && <div className='DivYellow'></div>}
				</div>
			</div>)
}