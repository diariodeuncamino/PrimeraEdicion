import './PaginasExclusivas.scss'
import indice from '../../../utils/Indice.json'





export default function PaginaIndice({ tapa }) {
  return (
    <div className='estiloPagina'>
      <header>
        <h1>Índice</h1>
      </header>
      
        {tapa
          ? <article className='container-paginaIndice' style={{ justifyContent: 'flex-end' }}>
          <div className='indice-container-text'>

          
          <img src="images/dibujoBrujula.png" alt="sellos" className='imageBrujula' />
            <h1>Indice</h1>
            <ul className="container-indice ">
              <li className="indice-item encabezado-indice">
                <b className="capitulo">Capítulo</b>
                <b className="paginacion">Página</b>
              </li>
              {indice.indice.slice(0, 1).map((item, index) => (
                <li key={index} className="indice-item">
                  <span className="capitulo">
                    <b>{`C${item.numero}: `}</b>{`${item.titulo}`}
                  </span>
                  <span className='puntos'></span>
                  <span className="paginacion">{` ${item.pagina}`}</span>
                </li>
              ))}
              {indice.indice.slice(1, 9).map((item, index) => (
                <li key={index} className="indice-item">
                  <span className="capitulo oculto">
                    <b>{`C${item.numero}: `}</b>{`${item.titulo}`}
                  </span>
                  <span className='puntos'></span>
                  <span className="paginacion">{` ${item.pagina}`}</span>
                </li>
              ))}
            </ul>
            </div>
          </article>
          : <article className='container-paginaIndice' style={{ justifyContent: 'flex-start' }}>
          <ul className="container-indice ">
              <li className="indice-item encabezado-indice">
                <b className="capitulo">Capítulo</b>
                <b className="paginacion">Página</b>
              </li>

              {indice.indice.slice(9).map((item, index) => (
                <li key={index} className="indice-item">
                  <span className="capitulo oculto">
                    <b>{`C${item.numero}: `}</b>{`${item.titulo}`}
                  </span>
                  <span className='puntos'></span>
                  <span className="paginacion">{` ${item.pagina}`}</span>
                </li>
              ))}
            </ul>
            <img src="images/sellos.png" alt="sellos" className='imageSellos' />
          </article>
        }
      <footer>
        <p>{tapa ? '5' : '6'}</p>
      </footer>
    </div>
  )
}
