import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import Empresas from './Pages/Empresas/Index'
import Cotacao from './Pages/Cotacoes/Index'
import Particulares from './Pages/Cotacoes/Particulares'
import Auto from './Pages/Cotacoes/Particulares/Auto'
import Habitacao from './Pages/Cotacoes/Particulares/Habitacao'
import VidaCredito from './Pages/Cotacoes/Particulares/VidaCredito'
import Poupanca from './Pages/Cotacoes/Particulares/Poupanca'
import Saude from './Pages/Cotacoes/Particulares/Saude'
import AcidPessoais from './Pages/Cotacoes/Particulares/AcidePessoais'
import Vida from './Pages/Cotacoes/Particulares/Vida'
import Dental from './Pages/Cotacoes/Particulares/Dental'
import AcidenteTrabalho from './Pages/Cotacoes/Particulares/AcidenteTrabalho'
import AcidDomestico from './Pages/Cotacoes/Particulares/AcidDomestico'
import Animais from './Pages/Cotacoes/Particulares/Animais'
import RespCivil from './Pages/Cotacoes/Particulares/RespCivil'
import Viagens from './Pages/Cotacoes/Particulares/Viagens'
import Caca from './Pages/Cotacoes/Particulares/Caca'
import Embarcacoes from './Pages/Cotacoes/Particulares/Embarcacoes'
import Golfe from './Pages/Cotacoes/Particulares/Golfe'
import EmpresasCot from './Pages/Cotacoes/Empresas'
import AutoEmp from './Pages/empresas/Auto'
import AcidTrabalho from './Pages/empresas/AcidTrabalho'
import Patrimoniais from './Pages/Empresas/Patrimoniais'
import SaudeEmp from './Pages/Empresas/Saude'
import VidaEmp from './Pages/Empresas/Vida'
import AcidPessoaisEmp from './Pages/Empresas/AcidPessoais'
import RespCivilEmp from './Pages/Empresas/RespCivil'
import FinanceiroEmp from './Pages/Empresas/Financeiro'
import PerdasEmp from './Pages/Empresas/PerdasExploracao'
import ViagensEmp from './Pages/Empresas/Viagens'
import MercadoriaTrans from './Pages/Empresas/MercadoriaTrans'
import Engenharia from './Pages/Empresas/Engenharias'
import Contactos from './Pages/Contactos'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresas />} />
          <Route path="/cotacao" element={<Cotacao />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/cotacao/particulares" element={<Particulares />} />
          <Route path="/particulares/Auto" element={<Auto />} />
          <Route path="/particulares/Habitacao" element={<Habitacao />} />
          <Route path="/particulares/VidaCredito" element={<VidaCredito />} />
          <Route path="/particulares/Poupanca" element={<Poupanca />} />
          <Route path="/particulares/Saude" element={<Saude />} />
          <Route path="/particulares/AcidentePessoais" element={<AcidPessoais />} />
          <Route path="/particulares/Vida" element={<Vida />} />
          <Route path="/particulares/Dental" element={<Dental />} />
          <Route path="/particulares/AcidenteTrabalho" element={<AcidenteTrabalho />} />
          <Route path="/particulares/AcidenteDomestico" element={<AcidDomestico />} />
          <Route path="/particulares/Animais" element={<Animais />} />
          <Route path="/particulares/ResponsabilidadeCivil" element={<RespCivil />} />
          <Route path="/particulares/Viagens" element={<Viagens />} />
          <Route path="/particulares/Caca" element={<Caca />} />
          <Route path="/particulares/Embarcacoes" element={<Embarcacoes />} />
          <Route path="/particulares/Golfe" element={<Golfe />} />
          <Route path="/cotacao/empresas" element={<EmpresasCot />} />
          <Route path="/empresas/Auto" element={<AutoEmp />} />
          <Route path="/empresas/AcidentesTrabalho" element={<AcidTrabalho />} />
          <Route path="/empresas/Patrimoniais" element={<Patrimoniais />} />
          <Route path="/empresas/Saude" element={<SaudeEmp />} />
          <Route path="/empresas/Vida" element={<VidaEmp />} />
          <Route path="/empresas/AcidentesPessoais" element={<AcidPessoaisEmp />} />
          <Route path="/empresas/ResponsabilidadeCivil" element={<RespCivilEmp />} />
          <Route path="/empresas/Financeiros" element={<FinanceiroEmp />} />
          <Route path="/empresas/PerdasExploracao" element={<PerdasEmp />} />
          <Route path="/empresas/Viagens" element={<ViagensEmp />} />
          <Route path="/empresas/MercadoriasTransportada" element={<MercadoriaTrans />} />
          <Route path="/empresas/Engenharias" element={<Engenharia />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
