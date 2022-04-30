import React from 'react'
import {
  SeachBoxWrapper
} from "./styles";
import { SearchFilterProps } from "./types";

const SearchFilter: React.FunctionComponent<SearchFilterProps> = ({ handleOnChange, handleClearInput, searchInput, clearSearch}) => {
  return (
     <SeachBoxWrapper >
        <input
            type="text"
            placeholder="Search by country name or code..."
            onChange={({ target }) => handleOnChange(target.value)}
            value={searchInput}
            className = "search-input"
        />
        {!!clearSearch && <span onClick={handleClearInput}>X</span>}
    </SeachBoxWrapper> 
  )
}

export default SearchFilter