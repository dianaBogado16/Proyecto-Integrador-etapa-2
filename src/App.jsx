import { BrowserRouter } from "react-router"
import Rutas from "./routes/Rutas"
import Cabecera from "./components/cabecera"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>

      <Cabecera />
    
      <Rutas />

      <Footer />
    
    </BrowserRouter>
  )
}

export default App