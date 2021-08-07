import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

// const GifExpertApp = (props) => {
const GifExpertApp = () => {

     const [categories, setCategories] = useState(['One punch man']);

    // const handleAdd = () => {
    //     // categories.push('HxH')
    //     // console.log(categories)
    //     // setCategories([...categories,'HxH']);
    //     setCategories(cats => [...cats, 'HxH']);
    // }

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        <ol>
            {
                categories.map(category => (
                    <GifGrid 
                    key={category}
                    category={category}
                    />
                ))
            }
        </ol>
    </>)
}

export default GifExpertApp;