import { Link } from "@remix-run/react"

function Guitarra({ guitarra }) {
  const { nombre, descripcion, moneda, url, foto} = guitarra
  const urlFoto = foto.data.attributes.formats.medium.url
  return (
    <div className="guitarra">
      <img src={urlFoto} alt={nombre} />
      <div className="contenido">
        <h3>{ nombre }</h3>
        <p className="descripcion">{ descripcion }</p>
        <p className="precio">{ moneda }</p>
        <Link to={ `/guitarras${ url }` } className="enlace" >Ver más</Link>
      </div>
    </div>
  )
}

export default Guitarra