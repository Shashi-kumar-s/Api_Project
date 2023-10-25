import { useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom"
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
import { ClipLoader } from "react-spinners"
import "../../styles/mediascreen/style.css"

const DetailsPage = () => {
  const { countryName, iso3, iso2 } = useParams()
  const [allData, setAllData] = useState("")
  const [card, setCard] = useState([])

  const CallApi = async (endPoint, param) => {
    const response = await url.post(`/${endPoint}`, param)
    setAllData(response.data.data)
    return response.data.data
  }

  useEffect(() => {
    handleClick("Population")
  }, [])

  const handleClick = async (ele) => {
    let newCard = null
    switch (ele) {
      case "Population":
        const populationData = await CallApi("population", { iso3: iso3 })
        if (populationData) {
          newCard = <PopulationChart populationData={populationData} />
        }
        break
      case "Location":
        const locationData = await CallApi("positions", { iso2: iso2 })
        if (locationData) {
          newCard = <LocationCard allData={locationData} />
        }
        break
      case "Flag":
        const flagData = await CallApi("flag/images", { iso2: iso2 })
        if (flagData) {
          newCard = <FlagCard allData={flagData} />
        }
        break
      case "Currency":
        const currencyData = await CallApi("currency", { country: countryName })
        if (currencyData) {
          newCard = <CurrencyCard allData={currencyData} />
        }
        break
      case "Capital":
        const capitalData = await CallApi("capital", { country: countryName })
        if (capitalData) {
          newCard = <CapitalCard allData={capitalData} />
        }
        break
      case "Cities":
        const citiesData = await CallApi("cities", { country: countryName })
        if (citiesData) {
          newCard = <CitiesCard allData={citiesData} />
        }
        break
      case "Codes":
        const codeData = await CallApi("codes", { country: countryName })
        if (codeData) {
          newCard = <CodeCard allData={codeData} />
        }
        break
      case "States":
        const stateData = await CallApi("states", { country: countryName })
        if (stateData) {
          newCard = <StateCard allData={stateData} />
        }
        break
      default:
        ele
        break
    }
    setCard(newCard)
  }

  return (
    <div className="detailPage_main">
      <Link to="/">
      <button className="go__to__home">Back To HomePage</button>
      </Link>
      <div className="datail__page">
        <div className="category__list">
          {categoryData.map((ele) => {
            return (
              <li onClick={() => handleClick(ele.name)} key={ele.id}>
                <Icon className={"icon"} iconName={ele.iconName} />
                {ele.name}
              </li>
            )
          })}
        </div>
        {allData == "" ? (
          <div style={{ margin: "auto", paddingTop: "100px" }}>
            <ClipLoader size={100} />
          </div>
        ) : (
          <div className="detail__card">{card}</div>
        )}
      </div>
    </div>
  )
}

export default DetailsPage
