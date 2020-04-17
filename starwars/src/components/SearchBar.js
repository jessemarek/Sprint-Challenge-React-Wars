import React from 'react'
import styled from 'styled-components'

const SearchBar = () =>{

    return(
        <form>
            <label>
                <input type="text" />
                <input type="submit">Search</input>
            </label>
        </form>
    )
}

export default SearchBar