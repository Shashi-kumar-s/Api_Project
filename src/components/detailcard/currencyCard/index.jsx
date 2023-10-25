import "../currencyCard/style.css"
import propTypes from "prop-types"

const CurrencyCard = ({ allData }) => {
  return (
    <div className="currency__card common__card">
      <h1>{allData.name}</h1>
      <p><span>Currency :-</span> {allData.currency}</p>
    </div>
  )
}
CurrencyCard.propTypes = {
  allData: propTypes.object,
}


export default CurrencyCard
