import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL_CD } from "../../config/Config"
import { useParams } from "react-router-dom"
import "../detailPage/index.css"

const DetailsPage = () => {
  const [detailsData, setDetailsData] = useState([])
  const { id } = useParams()
  console.log(id, "++++++++")

  const fetchData = () => {
    axios
      .get(
        `${BASE_URL_CD}//info?returns= currency%2Cflag%2CunicodeFlag%2Cdialcode%2Ccities`
      )
      .then((response) => {
        console.log(response.data.data)
        setDetailsData(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {detailsData.map((ele, i) => {
        if (ele.name.toLowerCase() === id.toLowerCase()) {
          return (
            <div key={i} className="details__container">
              <img src={ele.flag} alt="flag" width={"200px"} />
              <h2>{ele.name}</h2>
              <div className="details">
                <span><b>Cities:-</b></span>
                {ele.cities.slice(0,20).map((ele, i) => {
                  return <p key={i} className="cities">{ele} ,</p>
                })}
              </div>
              <p><b>Currency :- </b>{ele.currency}</p>
              <p></p>
            </div>
          )
        } else {
          ;<p>country name not found !!</p>
        }
        return
      })}
    </>
  )
}

export default DetailsPage
