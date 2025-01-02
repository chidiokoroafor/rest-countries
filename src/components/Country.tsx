import { Link } from "react-router-dom"
import { CountryProps } from "../utils/types"

const Countrie = ({cou}:CountryProps) => {
  return (
   <Link to={`countries/${cou.name.common}`} className="dark:bg-DarkBlue rounded-lg overflow-hidden bg-White  dark:text-White shadow-sm" >
        <div className=" w-full h-[150px] border-1 border-red-500">
        <img className="max-w-full h-full object-cover " src={cou.flags.png} alt={cou.flags.alt} />
        </div>
        <div className="p-4 space-y-1 dark:bg-DarkBlue">
            <h3 className="font-[800] my-3">{cou.name.common}</h3>
            <p className="text-sm text-L"><strong>Population:</strong> {cou.population }</p>
            <p className="text-sm text-L"><strong>Region:</strong> {cou.region }</p>
            <p className="text-sm text-L"><strong>Capital:</strong> {cou.capital+"" }</p>
        </div>
        
    </Link>
  )
}

export default Countrie