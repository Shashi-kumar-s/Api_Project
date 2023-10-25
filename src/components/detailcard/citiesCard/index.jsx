import "../citiesCard/style.css"
import propTypes from "prop-types"

const CitiesCard = ({ allData }) => {
  return (
    <div className="city__card common__card">
      <h1>City</h1>
      <div className="cities">
        {allData.length > 0 &&
          allData.map((ele, i) => {
            return <span key={i}>{ele}</span>
          })}
      </div>
    </div>
  )
}
CitiesCard.propTypes = {
  allData: propTypes.object,
}

export default CitiesCard
