import { useRef } from 'react';

import HTMLFlipBook from "react-pageflip";
import './Libro.scss'
import IconArrow from '../IconArrow/IconArrow';

import data from '../../utils/Capitulo1.json'
import Pagina from './Pagina';
import PaginaPresentacion from './PaguinasExclusivas/PaginaPresentacion';
import PaginaIndice from './PaguinasExclusivas/PaginaIndice';
import PaginaPresentacionCapitulo from './PaguinasExclusivas/PaginaPresentacionCapitulo';
import PaginaIntroduccion from './PaguinasExclusivas/PaginaIntroduccion';
import PaginaAgradecimientos from './PaguinasExclusivas/PaginaAgradecimientos';
import PaginaFinal from './PaguinasExclusivas/PaginaFinal';

export default function Libro() {
  const book = useRef(null);

  const goToPreviousPage = () => {
    book.current.pageFlip().flipPrev();
  };

  const goToNextPage = () => {
    book.current.pageFlip().flipNext();
  };

  const capitulo1 = data.chapters[0]
  const paginas = data.chapters[0].pages

  return (
    <>
      <div className="container-libro">
        <HTMLFlipBook
          ref={book}
          width={550}
          height={730}
          size="fixed"
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          maxShadowOpacity={0.4}
          showCover={true}
          mobileScrollSupport={true}
          usePortrait={true}
          className="estiloslibro"
        >
          <div className="page cover">
            <img src='images/libro-portada-v3.png' className="imgProtada" />
          </div>
          <div className="page cover">
            <img src='images/libro-contra-tapa-v1.png' className="imgProtada" />
          </div>
          <div className="page">
            <PaginaPresentacion />
          </div>
          <div className="page">
            <PaginaAgradecimientos />
          </div>
          <div className="page">
            <PaginaIntroduccion tapa={true} />
          </div>
          <div className="page">
            <PaginaIntroduccion tapa={false} />
          </div>
          <div className="page">
            <PaginaIndice tapa={true} />
          </div>
          <div className="page">
            <PaginaIndice tapa={false} />
          </div>

          <div className="page">
            <PaginaPresentacionCapitulo
              num='7'
              numCap={capitulo1.chapterNumber}
              tituloCap={capitulo1.chapterTitle}
              subtituloCap={capitulo1.chapterSubtitle}
              imageBG={capitulo1.backgroundImage}
            />
          </div>

          {paginas.map((page, index) => (
            <div key={index + 8} className="page">
              <Pagina
                titulo={page.title}
                tipo={page.type}
                num={index + 8}
                parrafos={page.paragraphs}
                imagen={page.images[0].url}
                background={page.background}
              />
            </div>
          ))}

          <div className="page">
          <PaginaFinal tapa={true} />
          </div>
          <div className="page">
          <PaginaFinal tapa={false} />
          </div>

          <div className="page cover">
            <img src='images/PortadaFinal-v1.png' className="imgProtada" />
          </div>
          <div className="page cover">
            <img src='images/ContratapaFinal-v1.png' className="imgProtada" />
          </div>
        </HTMLFlipBook>
      </div>
      <div className="button-container">
        <button onClick={goToPreviousPage}>
          <IconArrow typeLeft={true} />
        </button>
        <button onClick={goToNextPage}>
          <IconArrow typeLeft={false} />
        </button>
      </div>

    </>
  )
}
