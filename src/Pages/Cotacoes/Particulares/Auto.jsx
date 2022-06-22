import React, { useState } from 'react'
import Nav from '../../../Components/Nav'
import CadPage from '../../Cadastro/CadPage'
import AutoMovel from '../../../Assets/images/icons/auto.jpg'

export default function Auto() {
  return (
    <div className="Auto">
      <Nav />
      <CadPage image={AutoMovel} title='Auto' />
    </div>
  )
}