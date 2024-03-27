import { useState, useEffect } from "react";
import { getRandomFact } from "../Services/facts.js"


export function useCatFact () {
    const [fact, setFact] = useState()
    
    const refreshFact = () =>{
        getRandomFact().then(setFact)
    }
    useEffect(refreshFact,[])

    return { fact, refreshFact }
}