import { Route, Routes } from "react-router"
import Banner from "./components/Banner/Banner"
import Error from "./pages/Error"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/banner" element={<Banner/>} />
          <Route path="*" element={<Error/>} />
      </Routes>
      
    </div>
  )
}

export default App
