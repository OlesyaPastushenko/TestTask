import { useArticles } from '../../hooks/useAricles';
import { ICard } from '../../models';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import "./style.scss"
import { InputContext } from '../../context/InputContext';
import { useContext, useState } from 'react';






export function Home(){
    const {articles, loading, error} = useArticles()
    const {value} = useContext(InputContext)
    const [filterRes, setFilterRes] = useState<ICard[]>([])
    const [details, setDetails] = useState(false)
    
    const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                <div className='homeH1'>Test Task : TypeScript/React JS</div>
                <div className='showBtn' onClick={()=>setDetails(!details)}>{details ?  'Hide Details': 'Show details'}</div>
                {details && <div className='description'><p>1. Cards with article titles and descriptions for 100 characters. The user can click on the card to go to an article page that contains the title and full description of the selected article.
                </p>
                <p>2. A field to filter by keyword. The user enters keywords into the field and the system displays all articles containing at least one of the keywords in the name or/and description.

                </p>
                <p>The priority of fields: (1) names; and (2) description. The article with one match in the name is higher than the article with one match in the description.

                The matched keywords should be highlighted with yellow color.

                </p><p>Please use TypeScript as the main language. CSS preprocessors should be used. Please use Material UI. Showing an example of a custom hook will be a plus. Showing an example of state management will be a big plus.
                </p>
                </div>}
                <div className='homeH1'>Filter by keywords</div>
                <Input onSearch={onSearch}/>
                <div className='homeH1'>
                    Results: {filterRes.length===0 ? articles.length : filterRes.length}
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