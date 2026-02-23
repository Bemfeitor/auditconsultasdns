import React, { useState } from 'react';
import { LicitIALayout } from './components/LicitIALayout';
import { Dashboard } from './pages/Dashboard';
import { RadarOportunidades } from './pages/RadarOportunidades';
import { AnaliseEditais } from './pages/AnaliseEditais';
import { Precificacao } from './pages/Precificacao';
import { Monitoramento } from './pages/Monitoramento';
import { Planejamento } from './pages/Planejamento';
import { ERP } from './pages/ERP';
import { CentralEstrategica } from './pages/CentralEstrategica';
import { Relatorios } from './pages/Relatorios';
import { Comunicacao } from './pages/Comunicacao';
import { Configuracoes } from './pages/Configuracoes';
import { ModuloLicitIA } from './types';

export function LicitIA() {
  const [moduloAtivo, setModuloAtivo] = useState<ModuloLicitIA>('dashboard');

  const renderModulo = () => {
    switch (moduloAtivo) {
      case 'dashboard':
        return <Dashboard />;
      case 'radar':
        return <RadarOportunidades />;
      case 'analise':
        return <AnaliseEditais />;
      case 'precificacao':
        return <Precificacao />;
      case 'monitoramento':
        return <Monitoramento />;
      case 'planejamento':
        return <Planejamento />;
      case 'erp':
        return <ERP />;
      case 'central':
        return <CentralEstrategica />;
      case 'relatorios':
        return <Relatorios />;
      case 'comunicacao':
        return <Comunicacao />;
      case 'configuracoes':
        return <Configuracoes />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <LicitIALayout moduloAtivo={moduloAtivo} onModuloChange={setModuloAtivo}>
      {renderModulo()}
    </LicitIALayout>
  );
}
