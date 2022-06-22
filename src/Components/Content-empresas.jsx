import React, { useState } from 'react'
import '../Styles/Content-empresas.css'

export default function ContentEmpresas() {
  return (
    <div className="content-empresas">
      <div className="empresas-img" data-aos="fade-up">
        <div className="empresas-text">
          <h1 className='title-empresas'>Gestão Activa</h1>
          <p className='text-empresas'>A Gestão Activa é mais que uma seguradora, é um ecossistema de soluções de serviços de proteção com tecnologia embarcada, para melhorar e facilitar a experiência do cliente.</p>
        </div>
      </div>
      <div className="text-content-empresas" data-aos="fade-up">
        <h1 className='text-title-empresas'>Conheça os valores e ideais que nos movem, todos os dias, para oferecer a você produtos e serviços que proporcionem mais tranquilidade, segurança e conveniência.</h1>
      </div>
      <div className="boxes-empresas" data-aos="fade-up">
        <div className="box-empresa">
          <h1 className='box-empresa-title'>Title</h1>
          <p className='box-empresa-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sit. Voluptatem praesentium ad officiis, veniam facilis consequatur dolores explicabo unde consectetur repellendus, nisi asperiores quibusdam molestiae totam dolorum, ipsa ipsam!</p>
        </div>
        <div className="box-empresa">
          <h1 className='box-empresa-title'>Title</h1>
          <p className='box-empresa-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sit. Voluptatem praesentium ad officiis, veniam facilis consequatur dolores explicabo unde consectetur repellendus, nisi asperiores quibusdam molestiae totam dolorum, ipsa ipsam!</p>
        </div>
        <div className="box-empresa">
          <h1 className='box-empresa-title'>Title</h1>
          <p className='box-empresa-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sit. Voluptatem praesentium ad officiis, veniam facilis consequatur dolores explicabo unde consectetur repellendus, nisi asperiores quibusdam molestiae totam dolorum, ipsa ipsam!</p>
        </div>
      </div>
    </div>
  )
}