import './LoaderBook.scss'

export default function LoaderBook() {
  const pages = Array.from({ length: 18 }, (_, i) => <li key={i}></li>);

  return (
    <div className='container-LouderBook'>
      <div className="book">
        <div className="inner">
          <div className="left"></div>
          <div className="middle"></div>
          <div className="right"></div>
        </div>
        <ul>
          {pages}
        </ul>
      </div>
      <div className='textLoaderBook'>
       <h1>CARGANDO...</h1> 
      </div>
      
    </div>
  )
}
