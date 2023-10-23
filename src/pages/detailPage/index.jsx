import { useCallback, useState } from "react"
import { useParams } from "react-router-dom"
import "../detailPage/index.css"
import { url } from "../../config/Config"
import Icon from "../../components/fontawesome"
import LocationCard from "../../components/detailcard/locationCard"
import FlagCard from "../../components/detailcard/flagCard"
import CurrencyCard from "../../components/detailcard/currencyCard"
import CapitalCard from "../../components/detailcard/capitalCard"
import CitiesCard from "../../components/detailcard/citiesCard"
import CodeCard from "../../components/detailcard/codeCard"
import StateCard from "../../components/detailcard/stateCard"
import { categoryData } from "../../utilities/category"
import PopulationChart from "../../components/chart"

const DetailsPage = () => {
  const { countryName, iso3, iso2 } = useParams()
  const [allData, setAllData] = useState("")
  const [card, setCard] = useState(null)

  const CallApi = (endPoint, param) => {
    url.post(`/${endPoint}`, param).then((response) => {
      setAllData(response.data.data)
    })
  }

  // console.log("*****", allData)

  const handleClick = (ele) => {
    switch (ele) {
      case "Population":
        CallApi("population", { iso3: iso3 })
        return <PopulationChart populationData={allData} />
        break
      case "Location":
        CallApi("positions", { iso2: iso2 })
        return <LocationCard allData={allData} />
        break

      case "Flag":
        CallApi("flag/images", { iso2: iso2 })
        return <FlagCard allData={allData} />
        break

      case "Currency":
        CallApi("currency", { country: countryName })
        return <CurrencyCard allData={allData} />
        break

      case "Capital":
        CallApi("capital", { country: countryName })
        return <CapitalCard allData={allData} />
        break

      case "Cities":
        CallApi("cities", { country: countryName })
        return <CitiesCard allData={allData} />
        break

      case "Codes":
        CallApi("codes", { country: countryName })
        return <CodeCard allData={allData} />
        break

      case "States":
        CallApi("states", { country: countryName })
        return <StateCard allData={allData} />
        break

      default:
        ele
        break
    }
  }

  // console.log(card, "____________________")
  return (
    <div className="datail__page">
      <div className="category__list">
        {categoryData.map((ele) => {
          return (
            <li onClick={() => setCard(handleClick(ele.name))} key={ele.id}>
              <Icon className={"icon"} iconName={ele.iconName} />
              {ele.name}
            </li>
          )
        })}
      </div>
      <div className="detail__card">{card}</div>
    </div>
  )
}

export default DetailsPage
