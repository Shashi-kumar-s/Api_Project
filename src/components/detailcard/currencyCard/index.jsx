import "../currencyCard/style.css"
const CurrencyCard = ({ allData }) => {
  return (
    <div className="currency__card">
      <h1>{allData.name}</h1>
      <p><span>Currency :-</span> {allData.currency}</p>
    </div>
  )
}

export default CurrencyCard
