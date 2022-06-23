import React, { useState } from 'react'
import { SiGmail } from 'react-icons/si'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import Logo from '../Assets/images/logo.png'
import '../Styles/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="content-left-footer">
          <h1 className="logo-footer">Gestão<p className="logo-footer-p">Activa</p></h1>
          <div className="text-footer">
            <div className="all-icons">
              <SiGmail className="icon" />
              <AiFillFacebook className="icon" />
              <AiFillLinkedin className="icon" />
              <FaInstagramSquare className="icon" />
            </div>
            <p className='todos-direitos'>Todos os direitos reservados</p>
          </div>
        </div>
        <div className="content-right-footer">
          <img className="logo-home" src={Logo} alt="" />
        </div>
      </div>
    </footer>
  )
}