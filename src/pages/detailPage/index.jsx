import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../detailPage/index.css"
import { url } from "../../config/Config"
import Icon from "../../components/fontawesome"
import PopulationCard from "../../components/detailcard/populationCard"
import LocationCard from "../../components/detailcard/locationCard"
import FlagCard from "../../components/detailcard/flagCard"
import CurrencyCard from "../../components/detailcard/currencyCard"
import CapitalCard from "../../components/detailcard/capitalCard"
import CitiesCard from "../../components/detailcard/citiesCard"
import CodeCard from "../../components/detailcard/codeCard"
import StateCard from "../../components/detailcard/stateCard"
import { categoryData } from "../../utilities/category"

const DetailsPage = () => {
  const { countryName, iso3, iso2 } = useParams()

  const handleClick = useCallback(() => {
    url.post("/population", { iso3: iso3 }).then((response) => {
    })
  }, [])

  return (
    <div className="datail__page">
      <div className="category__list">
        {categoryData.map((ele) => {
          return (
            <>
              <li onClick={handleClick}>
                <Icon className={"icon"} iconName={ele.iconName} />
                {ele.name}
              </li>
            </>
          )
        })}
      </div>
      <div className="detail__card">
        {/* <PopulationCard /> */}
        {/* <LocationCard /> */}
        {/* <FlagCard /> */}
        {/* <CurrencyCard /> */}
        {/* <CapitalCard /> */}
        {/* <CitiesCard /> */}
        {/* <CodeCard /> */}
        <StateCard />
      </div>
    </div>
  )
}

export default DetailsPage
