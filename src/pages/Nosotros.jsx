import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'
const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <>

      <h1 className="titulo-nosotros" >Nosotros</h1>

      <div className="intro" >
        <p>En <b className="marca">TecnoBaires</b>, somos apasionados por la tecnología
        y nos dedicamos a ofrecerte los productos más innovadores del mercado.
        Nuestro objetivo es brindarte una experiencia de compra única, con
        asesoramiento especializado y un servicio al cliente que te haga sentir
        como en casa. Con años de experiencia en el sector, nos comprometemos a
        ofrecerte las mejores soluciones tecnológicas para que encuentres lo que
        necesitas, siempre con la más alta calidad y a precios competitivos.</p>
      </div>

      {/* foto local */}

      {/* logos */}
      
      <div className="intro">
        <p>
          Nos complace invitarte a visitar nuestro local ubicado en la calle
          <b> AV 9 de Julio,CABA</b>
        </p>
      </div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016890550913!2d-58.3861838258848!3d-34.60373439770637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1739506836362!5m2!1ses-419!2sar"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""  
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      {/* logo whatsap  */}
    </>
  )
}

export default Nosotros