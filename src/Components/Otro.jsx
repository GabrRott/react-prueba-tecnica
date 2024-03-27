import { useCatImage } from "../Hooks/useCatImage"


export function Otro () {
    const { imgCat } = useCatImage({fact: "cat"})
    console.log(imgCat)
    return(
    <>
    {imgCat && <img src={imgCat}/> }
    </>
    )
}