import "./style.scss"
import { ICard } from "../../models"
import { Link } from "react-router-dom"
import {useState, useContext, useMemo, useEffect} from "react"
import { InputContext } from "../../context/InputContext"
import reactStringReplace from 'react-string-replace';


interface CardProps {
    card: ICard
}


export function Card({card}: CardProps){
    const {value}= useContext(InputContext)
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState(card.summary.slice(0,60).trim()+"...")
    /* 
    let cardTitle = card.title 
    let newCardTitle = cardTitle.replace(regex,function(match){return `<span>${match}</span>`})
    */
    let regex = new RegExp(`(${value})`, "gi")
    return (
        <Link className="cardLink" to={`/${card.id}`}>
        <div className="cardContainer">
        <img className="cardImg" src={card.imageUrl}/>
        <div className="cardDateContainer">
        <div className="cardDateImg"/>
        <div className="cardPublishedAt">{card.publishedAt}</div>
        </div>  
        <div className="cardTitle">
        {reactStringReplace(card.title.slice(0,72), regex , (value) => (
          <span style={{ backgroundColor: 'yellow' }}>{value}</span>
        ))} 
        </div> 
        <div className="cardSummary">
        {reactStringReplace(summary, regex , (value, i) => (
          <span key={i} style={{ backgroundColor: 'yellow' }}>{value}</span>
        ))}     
        </div>
        <div className="cardReadMore">Read more &rarr;</div>
        </div>
        </Link>
    )
}