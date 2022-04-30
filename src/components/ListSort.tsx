import React from 'react';
import {
  SelectBoxWrapper
} from "./styles";
import { ListSortProps } from "./types";

const ListSort: React.FunctionComponent<ListSortProps> = ({ sort, handleSelectChange}) => {
  return (
        <SelectBoxWrapper>
            <select value={sort} onChange={({ target }) => handleSelectChange(target.value)}>
                <option value="ascending" >Ascending By Population</option>
                <option value="descending" >Descending By Population</option>
            </select>
        </SelectBoxWrapper> 
  )
}

export default ListSort