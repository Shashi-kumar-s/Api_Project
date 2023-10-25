import { useState } from "react"
import { useEffect } from "react"
import CardSmall from "../../components/card"
import "../home/home.css"
import Pagination from "../../components/pagination/Pagination"
import { url } from "../../config/Config"
import { ColorRing } from "react-loader-spinner"

const Home = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(24)
  const [errorMsg, setErrorMsg] = useState(null)

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = data.slice(firstPostIndex, lastPostIndex)

  const fetchData = async () => {
    try {
      const response = await url.get("/flag/images")
      setData(response.data.data)
    } catch (error) {
      setErrorMsg("you seem to be lost !!")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="card__container">
      <div className="main">
        {data.length == 0 ? (
          <>
            {errorMsg ? (
              <div className="error__msg">
                <p>{errorMsg}</p> 
              </div>
            ) : (
              <ColorRing
              visible={true}
              height="110"
              width="110"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[
                "#e15b64",
                "#f47e60",
                "#f8b26a",
                "#abbd81",
                "#849b87",
              ]}
            />
            )}
          </>
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
