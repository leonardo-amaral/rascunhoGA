import React, { useState } from 'react'
import Nav from '../../Components/Nav'
import '../../Styles/Contactos.css'

export default function Contactos() {
  return (
    <div className="contactos">
      <Nav />
      <div className="container-contactos">
        <div className="left-side">
          <div className="info">
            <h1 className="telefone">Endereco:<p className='number'>Rua Alexandre Lobo, nº59 - Viseu</p></h1>
            <h1 className="telefone">Telefone:<p className='number'>232 419 720</p></h1>
            <h1 className="telefone">Email:<p className='number'>gestaoactiva@contato.pt</p></h1>
          </div>

          <div className="form-contactos">
            <div className="input-cont">
              <p className='input-title'>Nome:</p>
              <input className='input-contactos' type="text" />
            </div>
            <div className="input-cont">
              <div className='input100'>
                <p className='input-title'>Email:</p>
                <input className='input-contactos' type="text" />
              </div>
              <div className='input100'>
                <p className='input-title'>Telefone:</p>
                <input className='input-contactos' type="text" />
              </div>
            </div>
            <div className="input-cont">
              <p className='input-title'>Mensagem:</p>
              <input className='input-obs-cont' type="text" />
              <button className="cont">ENVIAR</button>
              <button className="cont-limpar">LIMPAR</button>
            </div>
          </div>
        </div>
        <div className="right-side">
          <iframe width='100%' height='100%' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.17352982212932!2d-7.910983538669974!3d40.65685737645405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2336520d8df81b%3A0xa895ce6d7e91d89c!2sR.%20Alexandre%20Lobo%2C%203500-135%20Viseu%2C%20Portugal!5e0!3m2!1spt-PT!2sbr!4v1655764528659!5m2!1spt-PT!2sbr" ></iframe>
        </div>
      </div>
    </div>
  )
}