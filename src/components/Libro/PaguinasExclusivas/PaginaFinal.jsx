import './PaginasExclusivas.scss'

export default function PaginaFinal({ tapa }) {
  return (
    <div className='estiloPagina'>
    <header>
     
    </header>
    <article className='conteiner-paginaFinal'>
      {tapa
        ? <>
        <h1>FIN</h1>
          <img src="images/final-huellas.png" alt="" className='imagenHuellas'/>
          </>
        : <>
          <img src="images/sellos.png" alt="sellos" className='imageSellos' />
          </>
      }
      
    </article>
     
    <footer>
      <p>{tapa ? '332' : '333'}</p>
    </footer>
  </div>
  )
}
