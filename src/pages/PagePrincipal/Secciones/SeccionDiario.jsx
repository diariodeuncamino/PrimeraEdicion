import Libro from '../../../components/Libro/Libro'
import '../PagePrincipal.scss'

// eslint-disable-next-line react/prop-types
export default function SeccionDiario({idElement}) {
  return (

    <section className='seccion-libro '>
      <header className='seccion-libro-header'>

      </header>
      <article className='seccion-libro-article' ref={idElement}>
        <Libro />
      </article>

    </section>



  )
}
