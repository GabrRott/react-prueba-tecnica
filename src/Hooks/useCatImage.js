import { useState, useEffect } from "react";
const PREFIX_URL = `https://cataas.com`

export function useCatImage ({fact}) {
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

    return { imgCat: `${PREFIX_URL}` }
}
