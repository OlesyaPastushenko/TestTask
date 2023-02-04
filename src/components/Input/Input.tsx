import "./style.scss"
import { useContext } from "react"
import { InputContext } from "../../context/InputContext"

  
interface InputProps {
    onSearch: (event: any) => void
  }
export function Input({onSearch}: InputProps) {
const {value, setValue}= useContext(InputContext)

return(
    
    <div className="inputMain">
    <div className="inputContainer">
    <button className="inputSearchBtn"></button>
    <form className="inputForm" onSubmit={onSearch}>
    <input className="inputInput" type="text" value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}}/>
    </form>
    </div>
    <div className="searchBtn" onClick={onSearch}>Search</div>
    </div>
)
}