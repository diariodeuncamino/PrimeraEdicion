import IconArrowsButton from '../../../components/IconArrowsButton/IconArrowsButton'
import TituloLogo from '../../../components/TituloLogo/TituloLogo'
import './EstilosSecciones.scss'


// eslint-disable-next-line react/prop-types
export default function SeccionPresentacion({handleScroll}) {
  return (
      <section className='seccion-presentacion'>

        <header>
          <img src='images/webp/sombrero-v1.webp' className='imgSombrero' />
          <img src='images/webp/pulsera-v1.webp' className='imgPulsera' />
          <img src='images/webp/anteojos-v1.webp' className='imgAnteojos' />
        </header>
        <article>
          <div className='container-logo'>
            <TituloLogo />
          </div>
        </article>
        <footer>
          <div className='container-map'>
            <img src='images/webp/mapa-v1.webp' className='imgMap' />
            <img src='images/webp/planta1-v1.webp' className='imgPlanta1' />
            <img src='images/webp/birome-v1.webp' className='imgBirome' />
          </div>
          <img src='images/webp/brujula-v1.webp' className='imgBrujula' />
          <img src='images/webp/camara-v1.webp' className='imgCamara' />
          <img src='images/webp/binoculares-v1.webp' className='imgBinoculares' />
          <div className='container-button-principal-page'>
            <div className='button-principal-page' onClick={() => handleScroll()}>
              <p>
                IR AL DIARIO
              </p>
              <IconArrowsButton />
            </div>
          </div>

        </footer>
      </section>
  )
}
