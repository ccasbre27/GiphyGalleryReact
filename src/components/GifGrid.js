import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGrids } from '../hooks/useFetchGrids';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGrids( category );

    return (
        <div>
            <h3> { category } </h3>
            { loading && <p> Loading </p> }
            <div className="card-grid">
                <ol>
                    {
                        images.map( img => {
                            return <GifGridItem 
                                key={ img.id }
                                { ...img } />
                        })
                    }
                </ol>
            </div>
       </div>
    )
}
