import { useArticles } from '../../hooks/useAricles';
import { ICard } from '../../models';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import "./style.scss"
import { InputContext } from '../../context/InputContext';
import { useContext, useEffect, useState } from 'react';






export function Home(){
    const {articles, loading, error} = useArticles()
    const {value} = useContext(InputContext)
    const [titleFilter, setTitleFilter] = useState<ICard[]>([])
    const [sumFilter, setSumFilter] = useState<ICard[]>([])
    const [filterRes, setFilterRes] = useState<ICard[]>([])
    // const [sortedFilter, setSortedFilter] = useState<ICard[]>()
    
   
    const onSearch = () => {
        setFilterRes([])
        let sortedFilter = articles.filter(el =>
        el.title.toLowerCase().includes(value.toLowerCase()) 
        || el.summary.toLowerCase().includes(value.toLowerCase()))
        sortedFilter = (sortedFilter?.sort((a,b) => {
            let aLower = a.title.toLowerCase();
            let valueLower = value.toLowerCase();
            let bLower = b.title.toLowerCase();
            if(aLower.includes(valueLower)){
                return -1
            } else if(bLower.includes(valueLower)){
                return 1
            } else {
                return 0
            }
        }))
        setFilterRes(sortedFilter)
    }
    console.log(filterRes)

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
                { filterRes.length>0 ? 
                filterRes.map((article: ICard)=><Card card= {article} key={article.id}/>):              
                articles.map((article: ICard)=><Card card = {article} key={article.id}/>)}
                </div>
            </div>
        </div>
    )
}