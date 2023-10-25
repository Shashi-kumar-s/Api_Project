import "../capitalCard/style.css"
import propTypes from "prop-types"

const CapitalCard = ({ allData }) => {
  return (
    <div className="capital__card common__card">
      <h1>{allData.name}</h1>
      <p>
        <span>Capital :-</span>
        {allData.capital}
      </p>
    </div>
  )
}

CapitalCard.propTypes = {
  allData: propTypes.object,
}
export default CapitalCard
