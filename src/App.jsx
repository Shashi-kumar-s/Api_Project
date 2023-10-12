import { BrowserRouter, Route,Routes } from "react-router-dom"
import DetailsPage from "./pages/detailPage"
import Home from "./pages/home/Home"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailsPage" element={<DetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
