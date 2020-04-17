import React from 'react'
import styled from 'styled-components'

const SearchBar = props =>{
    const { setSearchInput } = props.setSearchInput

    const changeHandler = event => {
        const searchInput = event.target.value
        setSearchInput(searchInput)
      }

    return(
        <form>
            <input onChange={changeHandler} type="text" placeholder="Enter a Name" />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar