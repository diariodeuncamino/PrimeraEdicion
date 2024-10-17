import './PaginasExclusivas.scss'

export default function PaginaPresentacionCapitulo(props) {
  return (
    <div className='estiloPagina'>
      <header>

      </header>
      <article className='container-PaginaPresentacionCapitulo' style={{backgroundImage:`url(/Proyecto-LibroMAM${props.imageBG})`}}>
        <h2>{props.numCap}</h2>
        <h1>{props.tituloCap}</h1>
        <p>{props.subtituloCap}</p>
      </article>
      <footer>
        <p>{props.num}</p>
      </footer>
    </div>
  )
}
