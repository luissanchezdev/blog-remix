import {
  Link
} from '@remix-run/react'
import logo from '../../../public/img/logo.svg'
import Navegacion from './Navegacion'

function Header() {

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to='/'>
          <img src={logo} alt='logo' className='logo'></img>
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
