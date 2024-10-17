import { useEffect, useState } from 'react';
import './App.scss'

import PagePrincipal from './pages/PagePrincipal/PagePrincipal';
import PagePantallaDeCarga from './pages/PagePantallaDeCarga/PagePresentacion';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Cambia el estado después de 5 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [])

  return (
    <>
      {loading ? (
        <PagePantallaDeCarga />
      ) : (
        <>
        
        <PagePrincipal />
        </>
        
      )}
    </>
  )
}

export default App

