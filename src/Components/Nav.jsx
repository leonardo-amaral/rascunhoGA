import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/images/logo.png'
import '../Styles/Nav.css'
// import GrMenu from 'react-icons/gr'

export default function Nav() {
  return (
    <header>
      <div className="Nav">
        <div className="logo-content" data-aos="fade-right">
          {/* <img className='logo-nav' src={Logo} alt="" /> */}
          <h1 className="logo">Gestão<p className='logo-p'>Activa</p></h1>
        </div>
        {/* <BiMenuAltRight /> */}
      </div>
      <div className='nav-items' data-aos="fade-left">
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/empresa'>Empresa</Link>
        <Link className='nav-link' to='/cotacao'>Cotacões</Link>
        <Link className='nav-link' to='/contactos'>Contactos</Link>
      </div>
    </header>
  )
}