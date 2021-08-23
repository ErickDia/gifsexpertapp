import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);

    // const handleApp = () => {
    //     setCategories(['Rick and Morty', ...categories])
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory categories = {categories} setCategories = {setCategories}/>
            <hr/>
            {/* <button onClick={handleApp}>Agregar</button> */}
            <ol>
                {categories.map((categoria) => <GifGrid 
                                                    key={categoria} 
                                                    category = {categoria}
                                                />)}
            </ol>
        </>
        
    )
}
