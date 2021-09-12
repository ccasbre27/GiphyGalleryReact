import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);    
   
    return (
        <div>
            <h2>Gift Expert App</h2>
            <hr />
            <AddCategory setCategories={ setCategories } />
            <ol>
                {
                    categories.map( category => {
                        return <GifGrid
                            key={ category } 
                            category={ category } />
                    })
                }
            </ol>
        </div>
    );
}