import "../codeCard/style.css"
const CodeCard = ({allData}) => {
  return (
    <div className='code__card'>
    <h1>{allData.name}</h1>
    <p><span>Code :- </span>{allData.code}</p>
    <p><span>dial Code :- </span>{allData.dial_code}</p>
  </div>
  )
}

export default CodeCard