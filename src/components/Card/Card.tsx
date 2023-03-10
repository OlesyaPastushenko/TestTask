import "./style.scss"
import { ICard } from "../../models"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { InputContext } from "../../context/InputContext"
import reactStringReplace from 'react-string-replace';


interface CardProps {
    card: ICard
}


export function Card({card}: CardProps){
    const {value}= useContext(InputContext)

    let regex = new RegExp(`(${value})`, "gi")
    return (
        <Link className="cardLink" to={`/${card.id}`}>
        <div className="cardContainer">
        <img alt='' className="cardImg" src={card.imageUrl}/>
        <div className="cardDateContainer">
        <div className="cardDateImg"/>
        <div className="cardPublishedAt">{card.publishedAt}</div>
        </div>  
        <div className="cardTitle">
        {reactStringReplace(card.title, regex , (value, i) => (
          <span key={i} style={{ backgroundColor: 'yellow' }}>{value}</span>
        ))} 
        </div> 
        <div className="cardSummary">
        {reactStringReplace(card.summary.slice(0,65).trim()+"...", regex , (value, i) => (
          <span key={i} style={{ backgroundColor: 'yellow' }}>{value}</span>
        ))}     
        </div>
        <div className="cardReadMore">Read more &rarr;</div>
        </div>
        </Link>
    )
}