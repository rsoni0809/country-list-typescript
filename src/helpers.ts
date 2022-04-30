
import { CountriesProp } from "./components/types";

export const sortField = (list: CountriesProp[], sortKey: string) => {
  return  list.sort((a:CountriesProp , b: CountriesProp) => {
      return sortKey === 'descending' ? (b.population - a.population) : (a.population - b.population)
    })
}
export const filterList = (countryItem: CountriesProp, inputKey: string) => {
  return (countryItem.name.toLowerCase().includes(inputKey.toLowerCase()) ||
    (countryItem.code.toLowerCase().includes(inputKey.toLowerCase())))
}