import { Home } from './pages/Home'
import { Genres } from './pages/Genres'
import { Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import'./App.css'

function App() {
  return (
    <>
    <Navbar />
    <Routes> 
        <Route path="/" element={ <Home /> } /> 
        <Route path="/genre/:genreName" element={ <Genres /> } /> 
      </Routes>
    </>
  )
}

export default App
