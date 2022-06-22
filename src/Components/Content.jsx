import React, { useState } from 'react'
import Empresas from '../Assets/images/empresas.jpg'
import Maos from '../Assets/images/maos.jpg'
import Logo from '../Assets/images/logo.png'
import '../Styles/Content-home.css'

export default function Content() {
  return (
    <div className="container-content">
      <div className="content" data-aos="fade-up">
        <img className='logo-home' src={Logo} alt="" />
        <h1 className='title'>Sinta-se Seguro e Confiante!</h1>
        <h3 className='subTitle'>Gestão activa, Todos os direitos reservados.</h3>
      </div>
      <div className="container-post" data-aos="fade-up">
        <div className="post">
          <img className='emp' src={Empresas} alt="" />
          <div className="text-post">
            <h1 className="post-title">LOREN IPSUM</h1>
            <p className="post-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
        <div className="post" data-aos="fade-up">
          <div className="text-post">
            <h1 className="post-title">LOREN IPSUM</h1>
            <p className="post-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <img className='emp' src={Maos} alt="" />
        </div>
      </div>
    </div>
  )
}