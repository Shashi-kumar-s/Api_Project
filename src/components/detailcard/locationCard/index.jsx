import "../locationCard/style.css"
import propTypes from "prop-types"


const LocationCard = ({ allData }) => {
  return (
    <div className="location__card common__card">
      <h1>{allData.name}</h1>
      <div className="location__box">
      <p>
        <span className="loca">Iso2 :-</span> {allData.iso2}
      </p>
      <p>
        <span className="loca">Latitude :-</span> {allData.lat}&#176;
      </p>
      <p>
        <span className="loca">Longitude :-</span> {allData.long}&#176;
      </p>
      </div>
    </div>
  )
}
LocationCard.propTypes = {
  allData: propTypes.object,
}

export default LocationCard
