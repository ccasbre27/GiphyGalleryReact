import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGrids = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })    

    useEffect( () => {
        getGifs( category )
            .then( imgs => {

                setTimeout( () => {
                    
                    setState({ data: imgs, loading: false }) ;
                }, 3000);
            })
                
    }, [ category ]); // el arreglo vacío indica que sólo se renderiza una vez


    return state;
}