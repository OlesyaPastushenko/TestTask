import "./style.scss"
import { useContext, useState } from "react"
import { InputContext } from "../../context/InputContext"

interface InputProps {
   onSearch: ()=> void
}


export function Input({onSearch}: InputProps) {
const {value, setValue}= useContext(InputContext)

return(
    
    <div className="inputMain">
    <div className="inputContainer">
    <button className="inputSearchBtn" onClick={onSearch}></button>
    <input className="inputInput" type="text" value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}}/>
    </div>
    </div>
)
}