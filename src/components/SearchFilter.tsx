import { SearchFilterProps } from "../utils/types"

const SearchFilter = ({filterText, setSearchText, searchText, setFilterText, allCountries}:SearchFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
              <input className="py-3 px-4 shadow-sm rounded text-sm w-80 dark:bg-DarkBlue text-DarkGray" type="text" placeholder="Search for a country..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
              
              <select value={filterText} onChange={(e) => setFilterText(e.target.value)} className="py-2 px-4 shadow-sm text-DarkGray rounded dark:bg-DarkBlue" name="region" id="">
                  <option value="">Filter by Region</option>
                  {
                      [... new Set(allCountries?.map((ct) => {
                          return ct.region
                      }))].map((reg) => {
                          return <option key={reg} value={reg}>{reg }</option>
                      })
                  }
              </select>
          </div>
  )
}

export default SearchFilter