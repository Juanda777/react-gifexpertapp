import React, { useState } from 'react'
import PropTypes from 'prop-types';
// const GifExpertApp = (props) => {

export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // props.setCategories()
        e.preventDefault();

        if (InputValue.trim().length > 2) {
            setCategories(cats => [InputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={InputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
