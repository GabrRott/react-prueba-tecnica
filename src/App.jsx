import './App.css'
import { useCatFact } from "./Hooks/useCatFact"
import { useCatImage } from "./Hooks/useCatImage"
import { Otro } from './Components/Otro.jsx'

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
//const   CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&/cat?json=true`





export function App () {

    const { fact, refreshFact} = useCatFact()
    const { imgCat } = useCatImage({fact})
     
    const hadleClick = async ()=>{
        refreshFact()    
    }


    return (
        <main>
        <h1>App de gatitos</h1>
        <button onClick={hadleClick}>Get new fact</button>
        {fact&&<p>{fact}</p>}
        <img src={imgCat} alt={`Image extracted using the firs three words from ${fact}`}></img>
       
        </main>
    )
}