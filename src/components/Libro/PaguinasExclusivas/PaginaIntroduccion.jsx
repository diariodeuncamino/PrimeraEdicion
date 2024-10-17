import './PaginasExclusivas.scss'

export default function PaginaIntroduccion({ tapa }) {
  return (
    <div className='estiloPagina'>
      <header>

      </header>
      <article className='conteiner-paginaIntroduccion'>
        {tapa
          ? <>
            <h1>Introduccion</h1>
            <div className='container-fotoPerfil'>
              <img src="images/fotoPerfil.png" alt="perfil" />
              <p>
                Hola, soy Mauro... Y sí, soy el personaje
                <br /> que ves en la foto. ¡Jajaja!
              </p>
              <p>
                Soy la persona responsable de escribir
                <br />este humilde libro, que no es más
                <br />que una especie de cuaderno de viajes,
                <br />donde trato de plasmar con palabras,
                <br />fotos y dibujos los momentos vividos
                <br />en algunos de mis viajes por
                <br />Argentina.
              </p>

            </div>


            <p>
              Voy a intentar contarles una historia que capture la esencia y la magia de cada uno de los lugares que me tocó visitar. Todo esto lo haré mediante frases, reflexiones, anegdotas y enseñanzas que el camino me fue dejando en cada uno de los sitios que mencionaré a lo largo del diario. También me apoyaré en ilustraciones, como fotos que fui capturando y dibujos de mi autoría, para hacer más agradable la inmersión en esta historia.<p></p>
            </p>
            <div className='container-mateenlugares'>
              <img src="images/mateenlugares.png" alt="perfil" />
              <p>
                Ah, casi me olvidaba. Antes de seguir, les presento a mi compañero inseparable de viajes y aventuras: mi mate. Pueden encontrarlo en Instagram como @mate.en.lugares.<p></p>
              </p>
            </div>

            <p>
              Y sin más preámbulos, les presento <b>"Diario de un Camino"</b> y te invito a que lo recorramos juntos.
            </p>
          </>
          : <>
            <p> Dicho todo esto, es hora de comenzar este viaje, de conocer un poquito de este increíble País en el que me tocó nacer, que es la Argentina, y poder verlo de una forma diferente. Te invito nuevamente a comenzar a recorrer este camino y poder ver este pedacito del mundo desde mis ojos…<br /> Todo camino comienza con un primer paso, VAMOS..???</p>
            <img src="images/inicio-huellas.png" alt="" className='inicioHuellas' />
            <img src="images/hobby-viajes2.png" alt="" className='imageIntro' />
          </>

        }
      </article>

      <footer>
        <p>{tapa ? '3' : '4'}</p>
      </footer>
    </div>
  )
}
