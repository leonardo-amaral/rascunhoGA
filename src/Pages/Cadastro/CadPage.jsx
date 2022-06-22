import React, { useState } from 'react'
import Auto from '../../Assets/images/icons/auto.jpg'
import '../../Styles/CadastroPage.css'
import Data from '../../Services/particulares.json'

export default function ParticularesPage(props) {
  return (
    <div className="ParticularesPage">
      <div className="CadPageContent" data-aos="fade-right">
        <div className="CadPageItem">
          <img className='cadImage' src={props.image} alt="" />
          <h1 className='cadTitle'>{props.title}</h1>
        </div>
        <div className="descriptionCad">
          <p>{Data.Auto.Text}</p>
          <p>{Data.Auto.Text2}</p>
          <div className="listItem">
            {
              Data.Auto.Text3.map((item) => {
                return (
                  <ul>
                    <li>{item}</li>
                  </ul>
                )
              })
            }
          </div>
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
  )
}