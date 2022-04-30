export type CountriesProp =   {
    "name": string,
    "code": string,
    "region": string,
    "capital": string,
    "population": number,
    "currency":string,
    "language": string
} 

export type CountryProps = {
    setSelectedCountry: React.Dispatch<React.SetStateAction<CountriesProp | null>>,
    selectedCountry: CountriesProp
}

export type SearchFilterProps = {
    handleOnChange: (value: string) => void,
     handleClearInput: () => void,
     searchInput: string,
    clearSearch: boolean
};

export type ListSortProps = {
    sort: string,
    handleSelectChange: (value: string) => void
}