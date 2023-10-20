import { useState } from "react"
import { useEffect } from "react"
import CardSmall from "../../components/card"
import "../home/home.css"
import Pagination from "../../components/pagination/Pagination"
import { url } from "../../config/Config"
import { ClipLoader } from "react-spinners"

const Home = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(24)

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = data.slice(firstPostIndex, lastPostIndex)

  useEffect(() => {
    url.get("/flag/images").then((response) => {
      setData(response.data.data)
    })
  }, [])

  return (
    <div className="card__container">
      <div className="main">
        {data.length == 0 ? (
          <div style={{ margin: "auto", paddingTop: "100px" }}>
            <ClipLoader size={100} />
          </div>
        ) : (
          currentPost.map((ele, i) => {
            return (
              <div className="card__box" key={i}>
                <CardSmall
                  img={ele.flag}
                  countryName={ele.name}
                  iso3={ele.iso3}
                  key={i}
                  iso2={ele.iso2}
                  page={currentPost}
                  id={ele.name}
                />
              </div>
            )
          })
        )}
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
