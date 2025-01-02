export type Tcountry =  {
    "flags": Tflags,
    "name": Tname,
    "capital": string[],
    "region": string,
    "population": number,
    "subregion"?: string
}
  
type Tflags = {
    png: string,
    svg: string
    alt: string
}

type Tname = {
    common: string
    official: string
}

export interface SearchFilterProps {
    filterText: string,
    setSearchText: (value:string) => void,
    searchText: string,
    setFilterText: (value:string)=>void,
    allCountries: Country[] | undefined
}

export interface CountryProps {
    cou: Country
}

export interface Country {
     "flags": Tflags,
    "name": Tname,
    "capital": string[],
    "region": string,
    "population": number,
    "subregion"?: string
    "tld"?: string[]
    "borders"?: string[]
    "currencies"?: Currency
    "languages"?: Languages
}

interface Currency {
    [key: string]: CurrencyValue
}

interface Languages {
    [key: string]: string
}

interface CurrencyValue {
    name: string
}

export interface SearchQueryParams  {
    searchText: string
    fields?: string
}

export interface FilterQueryParams  {
    filterText: string
    fields?: string
}

export interface DetailQueryParams  {
    name?: string
    fields?: string
}

// {
// 	"0": {
// 		"flags": {
// 			"png": "https://flagcdn.com/w320/tw.png",
// 			"svg": "https://flagcdn.com/tw.svg",
// 			"alt": ""
// 		},
// 		"name": {
// 			"common": "Taiwan",
// 			"official": "Republic of China (Taiwan)",
// 			"nativeName": {
// 				"zho": {
// 					"official": "中華民國",
// 					"common": "台灣"
// 				}
// 			}
// 		},
// 		"tld": [
// 			".tw",
// 			".台灣",
// 			".台湾"
// 		],
// 		"currencies": {
// 			"TWD": {
// 				"name": "New Taiwan dollar",
// 				"symbol": "$"
// 			}
// 		},
// 		"capital": [
// 			"Taipei"
// 		],
// 		"region": "Asia",
// 		"subregion": "Eastern Asia",
// 		"languages": {
// 			"zho": "Chinese"
// 		},
// 		"borders": [],
// 		"population": 23503349
// 	}
// }

