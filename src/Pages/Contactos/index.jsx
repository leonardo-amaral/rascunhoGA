import React, { useState } from 'react'
import Nav from '../../Components/Nav'
import '../../Styles/Contactos.css'

export default function Contactos() {
  return (
    <div className="contactos">
      <Nav />
      <div className="container-contactos">
        <div className="left-side">
          <div className="left-side-content">
            <div className="loc-p">
              <h1 className='loc'>Localizacão</h1>
              <p>Rua Alexandre Lobo, nº 59 - 1º Esq. 3500-071 Viseu</p>
            </div>

            <div className="loc-tele">
              <h1 className="tele">Telefone:</h1>
              <p className='loc-p'>232 419 720</p>
            </div>
            <div className="loc-tele">
              <h1 className="tele">Fax:</h1>
              <p className='loc-p'>232 419 729</p>
            </div>
            <div className="loc-tele">
              <h1 className="tele">Email:</h1>
              <p className='loc-p'>geral@gestaoactiva.pt</p>
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