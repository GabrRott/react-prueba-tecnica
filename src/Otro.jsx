import { useCatFact } from "./Hooks/useCatFact";

export function Otro () {
    const { imgCat } = useCatFact({fact: 'Random fact'})

    return(
    <>
    {imgCat&&<img src={imgCat}/> }
    </>
    )
}