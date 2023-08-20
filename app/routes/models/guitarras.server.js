export async function getGuitarras () {
    const respuesta = await fetch(`${ process.env.API_URL }/tiendas?populate=foto`)
    const resultado = await respuesta.json()

  return resultado
}