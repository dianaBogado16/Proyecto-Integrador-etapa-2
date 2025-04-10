import './Footer.scss'

const Footer = () => {
    return (
        <footer className="foot">
        <div className="seguir">
          <p>Seguinos en nuestras redes sociales!</p>
        </div>
  
        <div className="logos">
          <div className="instagram">
            <img src="/imgs/instagram-logo.png" alt="Instagram Logo" style={{ width: '50px', height: 'auto' }} />
          </div>
  
          <div className="facebook">
            
            <img src="/imgs/facebook-logo.png" alt="Instagram Logo" style={{ width: '50px', height: 'auto' }} />
            
          </div>
  
          <div className="twitter">
            <img src="/imgs/twitter-logo.png" alt="twitter Logo" style={{ width: '50px', height: 'auto' }} />
          </div>
        </div>
        
  
        <p className="copy">Copyright 2025©. Designed by TecnoBaires</p>
      </footer>
    )
  }
  
  export default Footer