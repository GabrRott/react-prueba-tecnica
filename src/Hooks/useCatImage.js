import { useState, useEffect } from "react";
const PREFIX_URL = `https://cataas.com`

export function useCatImage ({fact}) {
    const [imgCat, setImgCat] = useState()
    
    useEffect(()=>{
        if(!fact)return
        const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
        .then(() => {
           const url  = `/cat/says/${threeFirstWords}?size=50&color=red`
           setImgCat( url )   
           
        })  
    },[fact])

    return { imgCat: `${PREFIX_URL}${imgCat}` }
}
