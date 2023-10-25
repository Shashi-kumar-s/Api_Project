import { useEffect, useState } from "react"
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
import "../../styles/mediascreen/style.css"
import { ColorRing } from "react-loader-spinner"

const DetailsPage = () => {
  const { countryName, iso3, iso2 } = useParams()
  const [card, setCard] = useState([])
  const [activeCategoryId, setActiveCategoryId] = useState(null)
  const [loader, setLoader] = useState(null)

  const CallApi = async (endPoint, param) => {
    const response= await url.post(`/${endPoint}`, param)
    console.log(response,"^^^^^^^^^");
    return response
  }

  useEffect(() => {
    handleClick("Population")
  }, [])

  const handleClick = async (ele, id) => {
    setActiveCategoryId(id)
    setLoader(true)
    let newCard = null
    switch (ele) {
      case "Population":
        const populationData = await CallApi("population", { iso3: iso3 })
        if (populationData) {
          setActiveCategoryId(1)
          newCard = <PopulationChart populationData={populationData.data.data} />
        }
        break
      case "Location":
        const locationData = await CallApi("positions", { iso2: iso2 })
        if (locationData) {
          newCard = <LocationCard allData={locationData.data.data} />
        }
        break
      case "Flag":
        const flagData = await CallApi("flag/images", { iso2: iso2 })
        if (flagData) {
          newCard = <FlagCard allData={flagData.data.data} />
        }
        break
      case "Currency":
        const currencyData = await CallApi("currency", { country: countryName })
        if (currencyData) {
          newCard = <CurrencyCard allData={currencyData.data.data} />
        }
        break
      case "Capital":
        const capitalData = await CallApi("capital", { country: countryName })
        if (capitalData) {
          newCard = <CapitalCard allData={capitalData.data.data} />
        }
        break
      case "Cities":
        const citiesData = await CallApi("cities", { country: countryName })
        if (citiesData) {
          newCard = <CitiesCard allData={citiesData.data.data} />
        }
        break
      case "Codes":
        const codeData = await CallApi("codes", { country: countryName })
        if (codeData) {
          newCard = <CodeCard allData={codeData.data.data} />
        }
        break
      case "States":
        const stateData = await CallApi("states", { country: countryName })
        if (stateData) {
          newCard = <StateCard allData={stateData.data.data} />
        }
        break
      default:
        ele
        break
    }
    setLoader(false)
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
              <li
                onClick={() => handleClick(ele.name, ele.id)}
                key={ele.id}
                className={ele.id === activeCategoryId ? "active-category" : ""}
              >
                <Icon className={"icon"} iconName={ele.iconName} />
                {ele.name}
              </li>
            )
          })}
        </div>
        <div className="detail__card">
          {loader ? (
            <div className="loader__box">
              <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          ) : (
            <div>{card}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
