import React, { useState } from 'react'
import Data from '../../../Services/particulares.json'
import Image from '../../../Assets/images/icons/poupanca.jpg'
import Nav from '../../../Components/Nav'

export default function VidaCredito() {
  return (
    <div className="habitacao">
      <Nav />
      <div className="ParticularesPage">
        <div className="CadPageContent" data-aos="fade-right">
          <div className="CadPageItem">
            <img className='cadImage' src={Image} alt="" />
            <h1 className='cadTitle'>Poupanca</h1>
          </div>
          <div className="descriptionCad">
            <h3>{Data.Financeiros.Text}</h3>
            <p>{Data.Financeiros.Description}</p>
          </div>
          <div className="descriptionCad">
            <h3>{Data.Financeiros.Text2}</h3>
            <p>{Data.Financeiros.Description2}</p>
          </div>
          <div className="descriptionCad">
            <h3>{Data.Financeiros.Text3}</h3>
            <p>{Data.Financeiros.Description3}</p>
          </div>
        </div>
        <div className="contentPageParticular" data-aos='fade-left'>
          <div className="particulareText">
            <div className="input-cad">
              <p className='input-title'>Nome:</p>
              <input className='input-input' type="text" />
            </div>
            <div className="input-cad">
              <p className='input-title'>Data de Ínicio de atividade:</p>
              <input className='input-input' type="date" />
            </div>
            <div className="input-cad">
              <p className='input-title'>Email:</p>
              <input className='input-input' type="text" />
            </div>
            <div className="input-center">
              <div className="input-cad">
                <div className="input-label">
                  <p className='input-title'>Telemóvel:</p>
                  <input className='input-input' type="text" />
                </div>
                <div className="input-label">
                  <p className='input-title'>Cae:</p>
                  <input className='input-input' type="text" />
                </div>
                <div className="input-label">
                  <p className='input-title'>Faturacão Anual:</p>
                  <input className='input-input' type="text" />
                </div>
                <div className="input-label">
                  <p className='input-title'>Capital Seguro:</p>
                  <input className='input-input' type="text" />
                </div>
              </div>
            </div>
            <div className="input-label">
              <p className='input-title'>Observacões:</p>
              <input className='input-input-obs' type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}