import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCard } from './GifCard';

export const GifGrid = ( {category} ) => {

    const {data:images,loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__bounceIn'> {category} </h3>

            { 
                loading ? 
                <p>Cargando...</p> : 
                (<div className='card-grid'> 
                    {
                        images.map( (image) => ( 
                            <GifCard 
                                key={image.id} 
                                {...image} 
                            /> 
                        ))
                    }
                </div>)
            }

            
        </>
    )
}
