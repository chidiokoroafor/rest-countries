import { useGetCountriesQuery, useLazyFilterCountriesByRegionQuery, useLazySearchCountriesByNameQuery } from "../services/country"

// import axios from "axios";
import { useEffect, useState } from "react"
import { Country } from "../utils/types"
import SearchFilter from "../components/SearchFilter"
import Countrie from "../components/Country"
const Home = () => {
    const [searchText,setSearchText] = useState("")
    const [filterText, setFilterText] = useState("")
    const [currentPage, setcurrentPage] = useState(1)
    const fields = "capital,name,region,population,flags"
    const { data: allCountries, isLoading: allLoading } = useGetCountriesQuery(fields)
   
    const [triggerSearchCountriesByName, { data: searchedCountries, isLoading: searchedLoading }] = useLazySearchCountriesByNameQuery()
    
     const [triggerFilterCountriesByName, { data:filteredCountries, isLoading:filteredLoading }] = useLazyFilterCountriesByRegionQuery()
    
    useEffect(() => {
        const queryParams = {searchText,fields}
        triggerSearchCountriesByName(queryParams)
         setcurrentPage(1)
    }, [searchText])
    
    useEffect(() => {
        if (filterText) {
            const queryParams = {filterText,fields}
            triggerFilterCountriesByName(queryParams)
            setcurrentPage(1)
        }
    }, [filterText])

    function handlePage(num:number) {
        setcurrentPage(prev => prev + num)
    }
    
    const displayCountries: (Country[] | undefined) = searchText ? searchedCountries : filterText ? filteredCountries : allCountries
    
    function GFG(array: (Country[] | undefined), currentPage: number, pageSize: number) {
        console.log(array);
        const startIndex = (currentPage - 1) * pageSize;
        // const endIndex = startIndex + pageSize;
        if (array) {
            const newArray = [...array]
            return newArray.splice(startIndex, pageSize);
        }
    }
    const pageSize = 8;
    const currentPageData = GFG(displayCountries, currentPage, pageSize);

   
  return (
      <div className="w-[80%] mx-auto mt-12">
          
          <SearchFilter filterText={filterText} setFilterText={setFilterText} allCountries={allCountries} searchText={searchText} setSearchText={setSearchText} />

          {allLoading || searchedLoading || filteredLoading ? <p className="text-center text-2xl mt-12">Loading...</p> :
            <div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {currentPageData?.map((cou) => {
                        return <Countrie key={cou.name.common} cou={cou} />
                            })
                    }
                </div>
                <div className="flex justify-end py-8">
                    <div className="flex gap-4">
                        <div className="dark:text-White">Page {currentPage} of {displayCountries && Math.ceil((( displayCountries?.length)/pageSize))}</div>
                            <button disabled={currentPage==1} onClick={()=>handlePage(-1)} className=" px-3 rounded-sm dark:text-White">&lt;&lt; Prvious</button>
                            <button disabled={displayCountries && currentPage >= ((displayCountries?.length-1)/pageSize)} onClick={()=>handlePage(1)} className="border px-3 rounded border-none dark:text-White">Next &gt;&gt;</button>
                        </div>
                  </div> 
            </div>
        }
    </div>
  )
}

export default Home