import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};
