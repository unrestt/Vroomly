import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomToaster from './components/CustomToaster'
import MainPage from './pages/MainPage'
import PageNotFound from './pages/PageNotFound'
import ListingDetailsPage from './pages/ListingDetailsPage'

function App() {

  return (
    <>
      <CustomToaster />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/listings/:id' element={<ListingDetailsPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
