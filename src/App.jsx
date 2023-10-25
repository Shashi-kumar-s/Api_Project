import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailsPage from "./pages/detailPage"
import Home from "./pages/home/Home"
import "../src/App.css"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route path="/detailspage/:countryName/:iso2/:iso3" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
