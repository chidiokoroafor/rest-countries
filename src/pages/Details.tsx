import { useNavigate, useParams } from "react-router-dom"
import { useGetCountryDetailByNameQuery } from "../services/country"


const Details = () => {
    const { countryName } = useParams()
    const navigate = useNavigate()
    const fields = "capital,name,region,population,flags,subregion,borders,tld,currencies,languages"
    const queryParams = { name: countryName, fields }
    
    const { data, isLoading } = useGetCountryDetailByNameQuery(queryParams)
    const countries = data || []
    const country = countries[0]
    
    
  return (
      <div className="w-[80%] mx-auto mt-12 ">
          <div className="mb-8">
              <button onClick={()=>navigate(-1)} className=" px-6 shadow-md py-1 dark:text-White dark:bg-DarkBlue">&larr; Back</button>
      </div>
      
      {isLoading ? <p className="text-center text-2xl mt-12 dark:text-White">Loading...</p> :
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className=" w-full">
            <img className="w-full object-cover" src={country?.flags?.svg} alt="" />
          </div>
          <div className="borde px-1 dark:text-White">
            <h2 className="font-[800] text-3xl mb-8">{country?.name.common}</h2>
            <div className="grid grid-cols-2 ">
              <div className="space-y-2">
                <p><strong>Native Name:</strong> {country?.name.common}</p>
                <p><strong>Population:</strong> {country?.population}</p>
                <p><strong>Region:</strong> {country?.region}</p>
                <p><strong>Sub Region:</strong> {country?.subregion}</p>
                <p><strong>Capital:</strong> {country?.capital + ""}</p>
              </div>
              <div className="space-y-2 ">
                <p><strong>Top Level Domain: </strong>{country?.tld && country?.tld[0]}</p>
                      
                <p><strong>Currencies: </strong>{country?.currencies && Object.keys(country?.currencies)[0]} </p>
                      
                <p><strong>Languages: </strong> {country?.languages && Object.values(country?.languages).join(", ")}</p>
                    
              </div>
            </div>
            <div className="flex gap-2 mt-16">
              <strong>Border Countries: </strong>
              <div className="flex gap-2">
                {country?.borders && country?.borders.map((bord) => {
                  return <button className="border capitalize text-xs p-[4px] "> {bord} </button>
                })}
              </div>
                  
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Details