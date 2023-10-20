import "../stateCard/style.css"
const StateCard = (allData) => {
  console.log(allData, "*******")
  return (
    <div className="state__card">
      <h1>{allData.name}</h1>
      <div>
        {/* {allData !==undefined && allData.states.map((ele, i) => {
          return (
            <div key={i}>
              <p>{ele.name}</p>
              <p>{ele.state_code}</p>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default StateCard
