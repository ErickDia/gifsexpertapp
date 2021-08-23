import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({categories, setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.trim().length > 2 && !categories.find( ( categoria ) => categoria === inputValue) ){
            setCategories( (cats) => [inputValue.trim(), ...cats ] )
            setInputValue('')
        }else{
            console.warn('ingresaste menos de 2 caracteres o repetiste alguno de las series ya existentes');
        }
        
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text" 
                placeholder='ingrese una serie' 
                value={inputValue}
                onChange={ handleInputChange }/>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
