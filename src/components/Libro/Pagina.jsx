/* eslint-disable react/prop-types */
import './Pagina.scss'

export default function Pagina(props) {

  const { tipo, titulo, parrafos, num, imagen, background} = props;

  const PaginaTipo1 = ({ parrafos, background }) => (
    // Pagina Tipo 1 - Pagina solo de TEXTO
    <article  style={{backgroundImage:`url(/PrimeraEdicion${background})`, backgroundSize: '100%'}}>
      {parrafos.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
  
  const PaginaTipo2 = ({ parrafos, imagen, background  }) => (
    // Pagina Tipo 2 - Pagina TEXTO y IMAGEN
    <article  style={{backgroundImage:`url(/PrimeraEdicion${background})`, backgroundSize: '100%'}}>
      <div className='oculto'>
        {parrafos.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className='oculto'>
        <img src={imagen} alt="" />
      </div>
    </article>
  );

  const PaginaTipo3 = ({ parrafos, imagen, background }) => (
    // Pagina Tipo 3 - Pagina IMAGEN y TEXTO
    <article  style={{backgroundImage:`url(/PrimeraEdicion${background})`, backgroundSize: '100%'}}>
      <div className='oculto'>
        <img src={imagen} alt="" />
      </div>
      <div className='oculto'>
        {parrafos.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

    </article>
  );
  const PaginaTipo4 = ({ imagen, background  }) => (
    // Pagina Tipo 4 - Pagina con solo una IMAGEN 
    <article  style={{backgroundImage:`url(/PrimeraEdicion${background})`, backgroundSize: '100%'}}>
      <div>
        <img src={imagen} alt="" />
      </div>
    </article>
  );
  const renderContent = ({ parrafos, imagen, background }) => {
    switch (tipo) {
      case '1':
        return <PaginaTipo1 parrafos={parrafos} background={background} />;
      case '2':
        return <PaginaTipo2 parrafos={parrafos} imagen={imagen} background={background} />;
      case '3':
        return <PaginaTipo3 parrafos={parrafos} imagen={imagen} background={background} />;
      case '4':
        return <PaginaTipo4 imagen={imagen} background={background} />;
      default:
        return <p>No se ha definido un tipo de artículo válido</p>;
    }
  };

  return (
    <div className='estiloPagina'>
      <header>
        <h1>{titulo}</h1>
      </header>

      { renderContent ({ parrafos, imagen, background })}

      <footer>
        <p>{num}</p>
      </footer>
    </div>
  )
}
