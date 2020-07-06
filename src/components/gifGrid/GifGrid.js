import React, { useState, useEffect } from 'react'
import { GifGridItem } from '../gifGridItem/GifGridItem';

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([])

    /**
     * Condicional para ejecutar cierta accion dentro del componente
     */
    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=one puch man&limit=10&api_key=agL46rpLwfhvCx2gJmYP7322Y43dBwt3`
        const res = await fetch( url );
        const { data } = await res.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        setImages( gifs )
    }

    return (
        <div>
            <h3>{ category }</h3>
                { 
                    images.map( ( img ) => (
                        <GifGridItem 
                            key = { img.id }
                            { ...img } 
                        />
                    )) 
                }
        </div>
    )
}
