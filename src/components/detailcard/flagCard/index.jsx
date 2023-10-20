import "../flagCard/style.css"
const FlagCard = ({ allData }) => {
  console.log("***", allData)
  return (
    <div className="flag__card">
      <h1>{allData.name}</h1>
      <div className="flag">
      <img src={allData.flag} alt="flag" width={"400px"} />
      </div>
    </div>
  )
}

export default FlagCard
