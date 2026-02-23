// Tipos da Plataforma LicitIA

export interface Oportunidade {
  id: string;
  numeroEdital: string;
  orgao: string;
  estado: string;
  cidade: string;
  objeto: string;
  valorEstimado: number;
  dataAbertura: string;
  dataEncerramento: string;
  indiceCompatibilidade: number;
  indiceRisco: number;
  status: 'novo' | 'analise' | 'participando' | 'aguardando' | 'encerrado';
  modalidade: 'pregao_eletronico' | 'pregao_presencial' | 'concorrencia' | 'tomada_preco' | 'convite';
  prioridade: 'alta' | 'media' | 'baixa';
}

export interface IndicadorExecutivo {
  totalOportunidadesAtivas: number;
  pipelineLicitacoes: number;
  margemMediaProjetada: number;
  taxaSucessoEstimada: number;
  indiceRiscoJuridicoMedio: number;
  variacaoMensal: number;
}

export interface HistoricoPreco {
  data: string;
  preco: number;
  volume: number;
}

export interface SimulacaoPreco {
  custoFornecedor: number;
  logistica: number;
  tributos: number;
  margemDesejada: number;
  precoSugerido: number;
  precoMinimoSeguro: number;
  zonaRisco: boolean;
  probabilidadeVitoria: number;
}

export interface EditalAnalise {
  id: string;
  nomeArquivo: string;
  numeroEdital: string;
  orgao: string;
  prazoEnvio: string;
  exigenciasTecnicas: string[];
  documentacaoObrigatoria: string[];
  indiceRiscoJuridico: number;
  checklist: ChecklistItem[];
  alertas: Alerta[];
}

export interface ChecklistItem {
  id: string;
  descricao: string;
  obrigatorio: boolean;
  status: 'pendente' | 'completo' | 'nao_aplicavel';
}

export interface Alerta {
  id: string;
  tipo: 'critico' | 'aviso' | 'info';
  mensagem: string;
  dataCriacao: string;
}

export interface PregaoMonitoramento {
  id: string;
  numeroEdital: string;
  orgao: string;
  objeto: string;
  status: 'aguardando' | 'em_andamento' | 'encerrado';
  ultimoLance: number;
  posicaoRanking: number;
  tempoRestante: number;
  lanceAutomaticoAtivo: boolean;
  limiteFinanceiro: number;
}

export interface ContratoERP {
  id: string;
  numeroContrato: string;
  orgao: string;
  objeto: string;
  valorTotal: number;
  dataInicio: string;
  dataTermino: string;
  empenhos: Empenho[];
  notasFiscais: NotaFiscal[];
  statusEntrega: 'nao_iniciado' | 'em_andamento' | 'concluido';
  conformidade: number;
}

export interface Empenho {
  id: string;
  numero: string;
  valor: number;
  data: string;
  status: 'ativo' | 'cancelado';
}

export interface NotaFiscal {
  id: string;
  numero: string;
  valor: number;
  dataEmissao: string;
  status: 'pendente' | 'paga';
}

export interface Devolutiva {
  id: string;
  tipo: 'aprovacao' | 'documentacao' | 'habilitacao' | 'catalogo';
  orgao: string;
  edital: string;
  status: 'pendente' | 'resolvido';
  dataRecebimento: string;
  prioridade: 'alta' | 'media' | 'baixa';
  descricao: string;
}

export interface IndicadorEstrategico {
  capitalAlocado: number;
  roiEstimado: number;
  projeçãoCrescimentoAnual: number;
  performanceConsolidada: number;
}

export type ModuloLicitIA = 
  | 'dashboard'
  | 'radar'
  | 'analise'
  | 'precificacao'
  | 'monitoramento'
  | 'planejamento'
  | 'erp'
  | 'central'
  | 'relatorios'
  | 'comunicacao'
  | 'configuracoes';
