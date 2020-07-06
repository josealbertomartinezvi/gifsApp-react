import React, { useState } from 'react';
import { AddCategory } from './addCategory/AddCategory';

const GifExpertApp = () => {

    // const categorias = ['One Puch Man', 'Samurai X', 'Dragon Ball'];

    const [categorias, setCategories] = useState(['One Puch Man', 'Samurai X', 'Dragon Ball']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setCategories } />
            <ol>
                { 
                    categorias.map( categoria => {
                        return <li key = { categoria }>{ categoria }</li>
                    } )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;