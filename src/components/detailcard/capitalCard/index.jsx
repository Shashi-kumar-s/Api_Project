import "../capitalCard/style.css"

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

export default CapitalCard
