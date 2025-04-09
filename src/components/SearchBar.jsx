import { Link } from 'react-router'
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className="search-bar">
        <div className="search-bar__logo-container">
        TecnoBaires<i className="fa-solid fa-bag-shopping"></i>
        </div>
    <form action="#" className="search-bar__form-container">
      <label for="busqueda" className="search-bar__form-label">Buscar</label>
    
    <input
              type="search"
              id="busqueda"
              className="search-bar__form-search"
    />
      <button type="submit" className="search-bar__form-submit">Buscar</button>
    </form>
    <div className="search-bar__carrito-container">
      <Link to="/carrito" >C</Link>
    </div>
    <div className="menu-toogle">
      <label for="menu" className="menu-toogle__label">
        <span className="menu-toogle__top-bread"></span>
        <span className="menu-toogle__meat"></span>
        <span className="menu-toogle__bottom-bread"></span>
      </label>
    </div>
    
  </div>

  )
}

export default SearchBar