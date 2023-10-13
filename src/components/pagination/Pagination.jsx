import { Button } from "@radix-ui/themes"
import React from "react"

const Pagination = ({ totalPost, postperpage,setCurrentPage }) => {
  let page = []
  for (let i = 1; i <= Math.ceil(totalPost / postperpage); i++) {
    page.push(i)
  }
  return (
    <div>
      {page.map((page, index) => {
        return <Button className="page__button" key={index} onClick={()=>setCurrentPage(page)}>{page}</Button>
      })}
    </div>
  )
}

export default Pagination
