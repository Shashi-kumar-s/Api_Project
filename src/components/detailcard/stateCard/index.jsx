import "../stateCard/style.css"
import propTypes from "prop-types"

const StateCard = ({ allData }) => {
  return (
    <div className="state__main common__card">
      <h1>{allData.name}</h1>
      <div className="state__box">
        {allData.states.map((ele, i) => {
          return <span>{ele.name}</span>
        })}
      </div>
    </div>
  )
}

StateCard.propTypes = {
  allData: propTypes.object,
}

export default StateCard
