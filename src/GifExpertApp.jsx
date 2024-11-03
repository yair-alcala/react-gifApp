import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (categoryValue) =>{
        if(categories.includes(categoryValue)) return;
        setCategories([categoryValue,...categories]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewCategory={(e)=>onAddCategory(e)}/>
            {
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}
