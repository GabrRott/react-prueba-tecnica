import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./Services/facts"


const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
//const   CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&/cat?json=true`
const PREFIX_URL = `https://cataas.com`

function useCatImage ({fact}) {
    const [imgCat, setImgCat] = useState()
    
    useEffect(()=>{
        if(!fact)return
        const firstThreeWords = fact.split(' ')[0];
        
        fetch(`https://cataas.com/cat/says/${firstThreeWords}?&Size=50&color=red&json=true`)
        .then(res =>  res.json())
        .then(response => {     
           const { url } = response
           setImgCat( url )   
           
        })  
    },[fact])

    return { imgCat }
}


export function App () {
    const [fact, setFact] = useState()
    const { imgCat } = useCatImage({fact})
    
    useEffect(()=>{
        getRandomFact().then(setFact)
    },[])

    const hadleClick = ()=>{
        getRandomFact().then(setFact)    
    }


    return (
        <main>
        <h1>App de gatitos</h1>
        <button onClick={hadleClick}>Get new fact</button>
        {fact&&<p>{fact}</p>}
        <img src={`${PREFIX_URL}${imgCat}`} alt=
        {`Image extracted using the firs three words from ${fact}`}></img>
        </main>
    )
}