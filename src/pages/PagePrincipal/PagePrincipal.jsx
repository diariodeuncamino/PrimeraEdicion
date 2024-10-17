import './PagePrincipal.scss'
import SeccionPresentacion from './Secciones/SeccionPresentacion';
import SeccionFooter from './Secciones/SeccionFooter';
import SeccionDiario from './Secciones/SeccionDiario';
import { useRef } from 'react';


export default function PagePrincipal() {
  const idRef = useRef(null);

  /*
  const scrollToSection = () => {
    const element = idRef.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  */
  const scrollToSection = () => {
    const element = idRef.current;
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Duración en milisegundos
      let start = null;

      const smoothScroll = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1); // Limitar al 100%

        // Función de desplazamiento (puedes usar un easing como easeInOutQuad)
        window.scrollTo(0, startPosition + distance * percent);

        if (progress < duration) {
          window.requestAnimationFrame(smoothScroll);
        }
      };

      window.requestAnimationFrame(smoothScroll);
    }
  };


  return (
    <div className='conteiner-PagePrincipal'>
      <div className='container-SectionHeader '>
        <SeccionPresentacion handleScroll={scrollToSection} />
      </div>
      <div className='container-SectionDiario'>
        <SeccionDiario idElement={idRef} />
      </div>
      
      <SeccionFooter />
     




    </div>
  )
}
