import { useArticles } from '../../hooks/useAricles';
import { ICard } from '../../models';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import "./style.scss"
import { InputContext } from '../../context/InputContext';
import { useContext, useEffect, useState } from 'react';
import { Article } from '../../components/Aricle/Article';





export function Home(){
    const {articles, loading, error} = useArticles()
    const {value} = useContext(InputContext)
  
    
   
    const onSearch = () => {
        

    }
    return (
        <div className='main'>
            <div className='container'>
                <div className='homeH1'>Filter by keywords</div>
                <Input onSearch={onSearch}/>
                <div className='homeH1'>
                    Results:
                </div>
                <div className='resContainer'>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {articles.map((article: ICard)=><Card card = {article} key={article.id}/>)}
                </div>
            </div>
        </div>
    )
}