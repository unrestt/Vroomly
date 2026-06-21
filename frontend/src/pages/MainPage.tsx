import { Footer } from "../components/Footer"
import Navbar from "../components/Navbar"

const MainPage = () => {
  return (
    <main>
      <Navbar/>
        <h1>Znajdź swój wymarzony samochód</h1>
        <FilterList/>
        <ListingList/>
      <Footer/>
    </main>
  )
}

export default MainPage