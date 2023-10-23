import "../locationCard/style.css"
const LocationCard = ({ allData }) => {
  console.log(allData, "??????")
  return (
    <div className="location__card">
      <h1>{allData.name}</h1>
      <div className="location__box">
      <p>
        <span className="loca">Iso2 :-</span> {allData.iso2}
      </p>
      <p>
        <span className="loca">Latitude :-</span> {allData.lat}
      </p>
      <p>
        <span className="loca">Longitude :-</span> {allData.long}
      </p>
      </div>
    </div>
  )
}

export default LocationCard
