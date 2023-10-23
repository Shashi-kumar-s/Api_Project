import { useCallback, useEffect, useMemo, useState } from "react"
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
import { ClipLoader } from "react-spinners"
import "../../styles/mediascreen/style.css"

const DetailsPage = () => {
  const { countryName, iso3, iso2 } = useParams()
  const [allData, setAllData] = useState("")
  const [card, setCard] = useState()

  const CallApi = async (endPoint, param) => {
    const response = await url.post(`/${endPoint}`, param)
    setAllData(response.data.data)
    return response.data.data
  }

  useEffect(() => {
  handleClick("Population")
  }, [])

  console.log(card, "helllllllloooooooooo1111")

  const handleClick = async (ele) => {
    switch (ele) {
      case "Population":
        const data1 = await CallApi("population", { iso3: iso3 })
        if (data1) {
          setCard(<PopulationChart populationData={data1} />)
        }
        break
     
      case "Location":
        CallApi("positions", { iso2: iso2 })
        return <LocationCard allData={allData} />

      case "Flag":
        CallApi("flag/images", { iso2: iso2 })
        return <FlagCard allData={allData} />

      case "Currency":
        CallApi("currency", { country: countryName })
        return <CurrencyCard allData={allData} />

      case "Capital":
        CallApi("capital", { country: countryName })
        return <CapitalCard allData={allData} />

      case "Cities":
        CallApi("cities", { country: countryName })
        return <CitiesCard allData={allData} />

      case "Codes":
        CallApi("codes", { country: countryName })
        return <CodeCard allData={allData} />

      case "States":
        CallApi("states", { country: countryName })
        return <StateCard allData={allData} />

      default:
        ele
        break
    }
  }

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
      {allData == "" ? (
        <div style={{ margin: "auto", paddingTop: "100px" }}>
          <ClipLoader size={100} />
        </div>
      ) : (
        <div className="detail__card">{card}</div>
      )}
    </div>
  )
}

export default DetailsPage
