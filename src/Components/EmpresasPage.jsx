import React, { useState } from 'react'
import '../Styles/EmpresasPage.css'
import Auto from '../Assets/images/icons/auto.jpg'
import Habitacao from '../Assets/images/icons/acid-emp.jpg'
import VidaCredito from '../Assets/images/icons/patrimoniais.jpg'
import SaudeEmpresas from '../Assets/images/icons/viagem-emp.jpg'
import Saude from '../Assets/images/icons/saude-empresas.jpg'
import AcidentePessoais from '../Assets/images/icons/vida-emp.jpg'
import Vida from '../Assets/images/icons/acid-pess-emp.jpg'
import AcidenteTrabalho from '../Assets/images/icons/rc-emp.jpg'
import Doméstica from '../Assets/images/icons/financeiros.jpg'
import Animais from '../Assets/images/icons/perdas.jpg'
import ResponsabilidadeCivil from '../Assets/images/icons/RC.jpg'
import Viagem from '../Assets/images/icons/viagem.jpg'
import Caca from '../Assets/images/icons/mercadorias.jpg'
import Embarcacoes from '../Assets/images/icons/engenharias.jpg'
import Golfe from '../Assets/images/icons/golf.jpg'
import ParticularesContent from './ParticularesContent'





export default function ParticularesPage() {
  return (
    <div className="ParticularesPage">
      <div className="contentPageParticular" data-aos='fade-left'>
        <div className="particulareText">
          <h1 className='ParticularesContentTitle'>Empresas</h1>
          <p className='ParticularesContentDescription'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="ParticularesPageContent" data-aos="fade-right">
        <div className="EmpresasPageItem">
          <ParticularesContent title="Auto" image={Auto} link="/empresas/" />
          <ParticularesContent title="Saude" image={Saude} link="/empresas/" />
          <ParticularesContent title="ResponsabilidadeCivil" image={AcidenteTrabalho} link="/empresas/" />
          <ParticularesContent title="Viagens" image={SaudeEmpresas} link="/empresas/" />
          <ParticularesContent title="AcidentesTrabalho" image={Habitacao} link="/empresas/" />
          <ParticularesContent title="Vida" image={AcidentePessoais} link="/empresas/" />
          <ParticularesContent title="Financeiros" image={Doméstica} link="/empresas/" />
          <ParticularesContent title="MercadoriasTransportada" image={Caca} link="/empresas/" />
          <ParticularesContent title="Patrimoniais" image={VidaCredito} link="/empresas/" />
          <ParticularesContent title="AcidentesPessoais" image={Vida} link="/empresas/" />
          <ParticularesContent title="PerdasExploracao" image={Animais} link="/empresas/" />
          <ParticularesContent title="Engenharias" image={Embarcacoes} link="/empresas/" />
        </div>
      </div>
    </div>
  )
}