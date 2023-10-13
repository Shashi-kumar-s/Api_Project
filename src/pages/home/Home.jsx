import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import CardSmall from "../../components/card"
import "../home/home.css"
import Pagination from "../../components/pagination/Pagination"

const Home = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(30)

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = data.slice(firstPostIndex, lastPostIndex)

  const fetchData = async () => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => {
        console.log(response.data.data)
        setData(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="card__container">
      <div className="main">
        {currentPost.map((ele, i) => {
          return (
            <div className="card__box" key={i}>
              <CardSmall
                countryName={ele.name}
                capital={ele.capital}
                key={i}
                countryCode={ele.iso3}
                page={currentPost}
              />
            </div>
          )
        })}
      </div>
      <div className="pagination">
        <Pagination
          totalPost={data.length}
          postperpage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default Home
