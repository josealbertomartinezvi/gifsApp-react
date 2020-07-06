import { useState, useEffect } from "react"

import { getGifs } from './../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    
    /**
     * Condicional para ejecutar cierta accion dentro del componente
     */
    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [ category ]);

    return state;

}