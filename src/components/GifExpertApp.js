import React, { useState } from 'react';
import { AddCategory } from './addCategory/AddCategory';
import { GifGrid } from './gifGrid/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Puch Man']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setCategories } />
            <ol>
                { 
                    categories.map( category => 
                        <GifGrid key={ category } category={ category } />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;