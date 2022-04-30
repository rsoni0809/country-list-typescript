
import React, { useEffect, useState, useCallback , useMemo} from 'react';
import countryData from "../countries.json";
import {
  CountryListWrapper,
  CountryHeaderWrapper,
  CountryItemListWrapper,
  CountryItemWrapper
} from "./styles";
import { CountriesProp } from "./types";
import { sortField, filterList } from "../helpers";
import Country from "./Country";
import SearchFilter from "./SearchFilter";
import ListSort from "./ListSort";

const Countries = () => {
  const [countryList, setCountryList] = useState<CountriesProp[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [sort, setSort] = useState<string>("descending");
  const [selectCountry, setSelectedCountry] = useState<CountriesProp | null>(null);
  const [clearSearch, setClearSearch] = useState<boolean>(false);
  

  const handleOnChange = useCallback((value: string) => {
    setSearchInput(value)
    setClearSearch(value ? true : false);
  }, [])

  const handleSelectChange = useCallback((value: string ) => {
    sortField(countryList, value);
    setSort(value);
    setCountryList(countryList);
  }, [sort, countryList, setCountryList])

  useEffect(() => {
    const { countries = [] } = countryData; 
    sortField(countries, sort);
    setCountryList(countries);
  }, []);

  const handleCountrySelect = (country: CountriesProp) => {
    setSelectedCountry(country);
  }
  
  const handleClearInput = () => {
    setSearchInput("");
    setClearSearch(false);
  }

  const updatedCountryList = useMemo(() => {
   return !!countryList.length ? countryList.filter((countryItem: CountriesProp) => {
          if (searchInput === "") {
            return countryItem
          } else if(filterList(countryItem, searchInput)) {
            return countryItem;
          }
   }).map((country) => {
     return (
       <CountryItemWrapper key={country.population} onClick={() => handleCountrySelect(country)}>
          <h2>{country?.name}</h2>
        </CountryItemWrapper>
          )
        })
     : null
  }, [countryList, searchInput,handleSelectChange, handleCountrySelect])

  return (
    <>
      {
        !selectCountry ?
          <CountryListWrapper>
            <CountryHeaderWrapper>Countries List</CountryHeaderWrapper>
            <div className='filter-container'>
              <SearchFilter handleOnChange={handleOnChange}
                handleClearInput={handleClearInput}
                searchInput={searchInput}
                clearSearch={ clearSearch}
              />
              <ListSort sort={sort} handleSelectChange={ handleSelectChange}/>
            </div>
            <CountryItemListWrapper>
              {updatedCountryList?.length ? updatedCountryList:  <CountryHeaderWrapper>Sorry!! No Country Exist</CountryHeaderWrapper>}
            </CountryItemListWrapper>
          </CountryListWrapper>
          :
          <Country setSelectedCountry={setSelectedCountry} selectedCountry={ selectCountry}/>
    }
    </>
  
  )
}

export default Countries

