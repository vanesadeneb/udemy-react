import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory  onNewCategory={(value) => onAddCategory(value)} />
           
            {  
                categories.map( category => 
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />) 
            }

        </>
    );
}