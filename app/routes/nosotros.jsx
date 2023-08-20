import image from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return [
    {
      title: 'nosotros',
      description: 'acerca de la empresa'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'imagen'
    }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>nosotros</h2>
      <div className="contenedor contenido">
        <img src={image} alt="nosotros" className='img' />
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iusto fuga optio. Nobis, tempore consequatur iure esse error voluptatem amet saepe explicabo dolorem illum quod, praesentium commodi blanditiis rem! Excepturi.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam autem recusandae repellendus, sapiente iure ab. Quae quas in nihil aliquid sint quaerat aperiam ab adipisci, placeat recusandae saepe, sunt autem.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
