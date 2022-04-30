import React from 'react'
import { CountryItemWrapper, CountryDetailWrapper } from "./styles";
import { CountryProps } from "./types";

const Country: React.FunctionComponent<CountryProps> = ({ setSelectedCountry, selectedCountry: {name,  capital, currency, language} }) => {
  return (
    <CountryDetailWrapper>
        <button onClick={() => setSelectedCountry(null)}>Go To Dashboard</button>
        <CountryItemWrapper >
            <h2>{name}</h2>
            <div>Capital: <span>{capital}</span></div>
            <div>Currency: <span>{currency}</span></div>
            <div>Language: <span>{language}</span></div>
        </CountryItemWrapper>
    </CountryDetailWrapper>
  )
}

export default Country