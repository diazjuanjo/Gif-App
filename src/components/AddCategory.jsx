import React, { useState } from 'react'

export const AddCategory = ({addCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
        // console.log(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // setCategories((categories)=>[inputValue, ...categories])
        if(inputValue.length < 1) return
        addCategory(inputValue.trim())
        // console.log(inputValue)
        setInputValue('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Buscar Gif"
            value={inputValue} 
            onChange={handleInputChange}
        />
    </form>
  )
}
