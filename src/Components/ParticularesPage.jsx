import React, { useState } from 'react'
import ParticularesContent from './ParticularesContent'
import '../Styles/ParticularPage.css'
import Auto from '../Assets/images/icons/auto.jpg'
import Habitacao from '../Assets/images/icons/mr.jpg'
import VidaCredito from '../Assets/images/icons/credito-habitacao.jpg'
import Poupanca from '../Assets/images/icons/poupanca.jpg'
import Saude from '../Assets/images/icons/saude.jpg'
import AcidentePessoais from '../Assets/images/icons/acidpessoais.jpg'
import Vida from '../Assets/images/icons/vida.jpg'
import Dental from '../Assets/images/icons/dental.jpg'
import AcidenteTrabalho from '../Assets/images/icons/acidtrab.jpg'
import Doméstica from '../Assets/images/icons/domestica.jpg'
import Animais from '../Assets/images/icons/animais.jpg'
import ResponsabilidadeCivil from '../Assets/images/icons/RC.jpg'
import Viagem from '../Assets/images/icons/viagem.jpg'
import Caca from '../Assets/images/icons/caca.jpg'
import Embarcacoes from '../Assets/images/icons/embarcacoes.jpg'
import Golfe from '../Assets/images/icons/golf.jpg'





export default function ParticularesPage() {
  return (
    <div className="ParticularesPage">
      <div className="contentPageParticular" data-aos='fade-right'>
        <div className="particulareText">
          <h1 className='ParticularesContentTitle'>Particulares</h1>
          <p className='ParticularesContentDescription'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="ParticularesPageContent" data-aos="fade-right">
        <div className="ParticularesPageItem">
          <ParticularesContent title="Auto" image={Auto} link="/particulares/" />
          <ParticularesContent title="Saude" image={Saude} link="/particulares/" />
          <ParticularesContent title="AcidenteTrabalho" image={AcidenteTrabalho} link="/particulares/" />
          <ParticularesContent title="Viagens" image={Viagem} link="/particulares/" />
          <ParticularesContent title="Habitacao" image={Habitacao} link="/particulares/" />
          <ParticularesContent title="AcidentePessoais" image={AcidentePessoais} link="/particulares/" />
          <ParticularesContent title="AcidenteDomestico" image={Doméstica} link="/particulares/" />
          <ParticularesContent title="Caca" image={Caca} link="/particulares/" />
          <ParticularesContent title="VidaCredito" image={VidaCredito} link="/particulares/" />
          <ParticularesContent title="Vida" image={Vida} link="/particulares/" />
          <ParticularesContent title="Animais" image={Animais} link="/particulares/" />
          <ParticularesContent title="Embarcacoes" image={Embarcacoes} link="/particulares/" />
          <ParticularesContent title="Poupanca" image={Poupanca} link="/particulares/" />
          <ParticularesContent title="Dental" image={Dental} link="/particulares/" />
          <ParticularesContent title="ResponsabilidadeCivil" image={ResponsabilidadeCivil} link="/particulares/" />
          <ParticularesContent title="Golfe" image={Golfe} link="/particulares/" />
        </div>
      </div>
    </div>
  )
}