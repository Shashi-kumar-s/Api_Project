import "../codeCard/style.css"
import propTypes from "prop-types"

const CodeCard = ({allData}) => {
  return (
    <div className='code__card common__card'>
    <h1>{allData.name}</h1>
    <p><span>Code :- </span>{allData.code}</p>
    <p><span>dial Code :- </span>{allData.dial_code}</p>
  </div>
  )
}
CodeCard.propTypes = {
  allData: propTypes.object,
}
export default CodeCard