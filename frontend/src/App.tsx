import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomToaster from './components/CustomToaster'
import MainPage from './pages/MainPage'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
      <CustomToaster />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<PageNotFound />} />
        {/* todo */}
      </Routes>
    </>
  )
}

export default App
