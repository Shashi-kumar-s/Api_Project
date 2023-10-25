import "../flagCard/style.css"
import propTypes from "prop-types"


const FlagCard = ({ allData }) => {
  return (
    <div className="flag__card common__card">
      <h1>{allData.name}</h1>
      <div className="flag">
      <img src={allData.flag} alt="flag" width={"400px"} />
      </div>
    </div>
  )
}
FlagCard.propTypes = {
  allData: propTypes.object,
}

export default FlagCard
