import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import Guitarra from "../components/Guitarra"
import tienda from "../styles/tienda.css"

export function meta(){
  return [
    {
      title: 'Tienda',
      description: 'Conoce nuestros productos'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: tienda
    }
  ]
}

export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {

  const guitarras  = useLoaderData()
  return (
    <div>
      <main className="contenedor">
        <h2 className="heading">Productos</h2>
        { guitarras.length && (
          <div className="guitarras-grid">
            { guitarras.map( guitarra => {
              return (
                <Guitarra 
                  key={guitarra?.id}
                  guitarra={guitarra.attributes}
                />
              )
            }) }
          </div>
        ) }
      </main>
    </div>
  )
}

export default Tienda
