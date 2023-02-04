import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IArticle } from "../../models"
import "./style.scss"
import {Link} from "react-router-dom"

export function CardItem() {
    const {itemId} = useParams<{itemId?: string | undefined}>()
    const [article, setArticle] = useState<IArticle>()
    const [error, setError] = useState("")
    
 async function fetchArticle (id: string | undefined) {
       try {
           const response =  await axios.get<IArticle>(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
           setArticle(response.data)
       } catch (e: unknown) {
           const error = e as AxiosError
           setError(error.message)
       }
    }

    useEffect(()=>{
        fetchArticle(itemId)
    })

    return (
        <div className="cardItemMain">
            {error && <p>{error}</p>}
            { article ? 
            <>
            <img alt = "" className="cardItemImg" src={article?.imageUrl}/>
            <div className="cardItemContainer">
            <div className="cardItemTitle">{article?.title}</div>
            <div className="cardItemSum">{article?.summary}</div>
            </div>
            </> : <p>Loading...</p>}
            <Link className="link" to={'/'}>
            <div className="cardItemBackBtn">&larr; Back to homepage</div>
            </Link>
        </div>
    )
}