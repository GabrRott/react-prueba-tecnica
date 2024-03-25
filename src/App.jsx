import { useEffect, useState } from "react"
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
//const   CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const PREFIX_URL = `https://cataas.com`



export function App () {
    const [fact, setFact] = useState()
    const [imgCat, setImgCat] = useState()
    const [factError, setFactError] = useState()
   
    
    useEffect(() =>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res =>{
            if (!res.ok){
                setFactError('No se ha podido recuperar la cita')
            }
            return res.json()})
        .then(data =>{
            const { fact } = data
            setFact(fact)
        })
    }, [])

    useEffect(()=>{
        if(!fact)return
        const firstThreeWords = fact.split(' ',3 ).join(' ');
        fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`)
        .then(res =>  res.json())
        .then(response =>{
           const { url } = response
           setImgCat( url )
           
        })  
    },[fact])

    

    return (
        <main>
        <h1>App de gatitos</h1>
        {fact&&<p>{fact}</p>}
        <img src={`${PREFIX_URL}${imgCat}`} alt=
        {`Image extracted using the firs three words from ${fact}`}></img>
        </main>
    )
}