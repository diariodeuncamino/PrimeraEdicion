import './IconArrow.scss'

export default function IconArrow( props ) {
  return (
    <div>
  <svg
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    // eslint-disable-next-line react/prop-types
    className={props.typeLeft ? 'flechaIzquierda':'flechaDerecha'}
  >
    <path d="M207.6 59.7 128 139.4 48.4 59.7c-8.8-8.8-23-8.8-31.8 0s-8.8 22.9 0 31.7l79.6 79.7 31.8 31.7 31.8-31.7 79.6-79.7c8.8-8.8 8.8-22.9 0-31.7-8.8-8.7-23-8.7-31.8 0z" />
  </svg>
    </div>
  )
}
