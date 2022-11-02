import React, { useState } from 'react'

function SearchBar(props) {

  const {filterProducts} = props;

  const [searchInput, setSearchInput] = useState("")
  const [checkboxIsActive, setCheckboxIsActive] = useState(false)

  // Search function
  const handleChange = (event) => {
    setSearchInput(event.target.value)
    filterProducts(event.target.value, checkboxIsActive)
  }

  // Checkbox active
  const toggleCheckbox = (event) => {
    setCheckboxIsActive(event.target.checked)
  }

  return (
    <div>
        <div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "center"}}>
            <label htmlFor="name">Search</label>
            <input type="text" name="name" value={searchInput} onChange={handleChange}/>
        </div>
        
        <div>
            <input type="checkbox" name="checkbox" checked={checkboxIsActive} onChange={toggleCheckbox}/>
            <label htmlFor="checkbox">Only show products in stock</label>
        </div>
    </div>
  )
}

export default SearchBar