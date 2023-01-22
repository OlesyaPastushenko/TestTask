import axios, {AxiosError} from 'axios'
import React, { useEffect, useState } from 'react'
import { ICard } from '../models'

export function useArticles(){
    const [articles, setArtices] = useState<ICard[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    async function fetchArticles() {
        try {
           setLoading(true)
           const response = await axios.get<ICard[]>('https://api.spaceflightnewsapi.net/v3/articles')
           setArtices(response.data)
           setLoading(false)
        }
        catch(e: unknown) {
        const error = e as AxiosError
        setError(error.message)
        }
    }


    useEffect(()=>{
       fetchArticles()
    },[])
    
    return { articles, loading, error }
}