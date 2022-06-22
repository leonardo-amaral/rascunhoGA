import React, { useState } from 'react'
import '../Styles/Content-cotacao.css'
import { Link } from 'react-router-dom'
import { BsBuilding } from 'react-icons/bs'
import { TbUsers } from 'react-icons/tb'

export default function contentCotacao() {
  return (
    <div className='cotacao-container'>
      <div className="cotacao-image">
        <Link className='sem-linha' to='/cotacao/particulares'>
          <div className="cotacao-image1" data-aos="fade-right">
            <div className="text-cotacao-image">
              <h1 className='text-cotacao-title'>Particulares</h1>
            </div>
          </div>
        </Link>
        <Link className='sem-linha' to='/cotacao/empresas'>
          <div className="cotacao-image2" data-aos="fade-left">
            <div className="text-cotacao-image">
              <h1 className='text-cotacao-title'>Empresas</h1>
            </div>
          </div>
        </Link>
      </div>
      <div className='content-cotacao'>
        <div className="cotacao-content-item" data-aos="fade-up">
          <h1 className='cotacao-item-title'>Particulares  </h1>
          <div className='cotacao-box-item'>
            <TbUsers className='icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique repellat, temporibus fuga sed reprehenderit nisi, minus sit aliquam cumque aspernatur reiciendis! Iste architecto ex a blanditiis alias tenetur vitae sunt.</p>
          </div>
        </div>
        <div className="cotacao-content-item" data-aos="fade-up">
          <h1 className='cotacao-item-title'>Empresas</h1>
          <div className='cotacao-box-item'>
            <BsBuilding className='icon' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique repellat, temporibus fuga sed reprehenderit nisi, minus sit aliquam cumque aspernatur reiciendis! Iste architecto ex a blanditiis alias tenetur vitae sunt.</p>
          </div>
        </div>
      </div>
    </div>
  )
}