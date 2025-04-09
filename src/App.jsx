import { BrowserRouter } from "react-router"
import Cabecera from "./components/cabecera"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      
      <Cabecera/>

      <Footer/>

    
    </BrowserRouter>

  )
}

export default App
