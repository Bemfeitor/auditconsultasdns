import React, { useState } from 'react';
import { Upload, FileText, AlertTriangle, CheckCircle, Clock, Shield, Search, TrendingUp, DollarSign, Package, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Dados simulados da análise do edital
const analiseEdital = {
  numero: 'PE 012/2026',
  orgao: 'Prefeitura Municipal de São Paulo',
  objeto: 'Fornecimento de Ar-Condicionado 12.000 BTUs',
  valorEstimado: 1280000,
  prazoContratual: '12 meses',
  compatibilidadeTecnica: 87,
  complexidadeDocumental: 'Média',
  scoreGeral: 74,
  recomendacao: 'Participação Recomendada',
};

const indicadoresRisco = {
  juridico: { valor: 32, status: 'Médio', cor: 'yellow' },
  financeiro: { valor: 28, status: 'Baixo-Médio', cor: 'green' },
  operacional: { valor: 41, status: 'Médio-Alto', cor: 'orange' },
};

const composicaoRiscoJuridico = [
  { item: 'Atestados técnicos específicos', pontos: 12 },
  { item: 'Prazo curto documental', pontos: 8 },
  { item: 'Cláusula de multa acima da média', pontos: 7 },
  { item: 'Critério técnico restritivo', pontos: 5 },
];

const simulacaoFinanceira = {
  precoMinimoHistorico: 1164000,
  precoMedioVencedor: 1221000,
  precoIdealIA: 1198500,
  margemOperacional: 9.4,
  margemMinimaSegura: 6.8,
  probabilidadeVitoria: 63,
};

const historicoPrecos = [
  { mes: 'Jan/24', preco: 1285000 },
  { mes: 'Mar/24', preco: 1262000 },
  { mes: 'Mai/24', preco: 1248000 },
  { mes: 'Jul/24', preco: 1235000 },
  { mes: 'Set/24', preco: 1221000 },
  { mes: 'Nov/24', preco: 1215000 },
  { mes: 'Jan/25', preco: 1198500 },
];

const distribuicaoLances = [
  { faixa: '1.16M-1.18M', quantidade: 3 },
  { faixa: '1.18M-1.20M', quantidade: 7 },
  { faixa: '1.20M-1.22M', quantidade: 12 },
  { faixa: '1.22M-1.24M', quantidade: 8 },
  { faixa: '1.24M-1.26M', quantidade: 4 },
  { faixa: '1.26M+', quantidade: 2 },
];

const checklistEdital = [
  { id: 1, item: 'Certidão Negativa Federal válida', categoria: 'Documental', obrigatorio: true, status: 'pendente' },
  { id: 2, item: 'Atestado de capacidade técnica', categoria: 'Técnico', obrigatorio: true, status: 'pendente' },
  { id: 3, item: 'Catálogo técnico detalhado', categoria: 'Técnico', obrigatorio: true, status: 'pendente' },
  { id: 4, item: 'Certificado ISO 9001', categoria: 'Qualidade', obrigatorio: false, status: 'completo' },
  { id: 5, item: 'Comprovante de experiência', categoria: 'Técnico', obrigatorio: true, status: 'completo' },
];

const tooltipStyle = {
  backgroundColor: '#1a1d23',
  border: '1px solid #2d3748',
  borderRadius: '8px',
  color: '#fff',
};

export function AnaliseEditais() {
  const [analiseCompleta, setAnaliseCompleta] = useState(true);
  const checklistCompleto = checklistEdital.filter(i => i.status === 'completo').length;
  const checklistTotal = checklistEdital.length;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#10b981]';
    if (score >= 60) return 'text-[#3b82f6]';
    if (score >= 40) return 'text-[#f59e0b]';
    return 'text-[#ef4444]';
  };

  const getRiscoBadge = (valor: number) => {
    if (valor <= 25) return { label: 'Baixo', class: 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30' };
    if (valor <= 50) return { label: 'Médio', class: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30' };
    if (valor <= 75) return { label: 'Alto', class: 'bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/30' };
    return { label: 'Crítico', class: 'bg-red-500/10 text-red-500 border-red-500/30' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Análise de Edital + Gestão de Riscos</h1>
          <p className="text-gray-400 text-sm mt-1">Análise preditiva e extração inteligente de dados</p>
        </div>
        <Badge className="bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30 text-sm px-3 py-1">
          <CheckCircle className="w-4 h-4 mr-1" />
          Análise Completa
        </Badge>
      </div>

      {/* Score Geral Destaque */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Score */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Score Estratégico</p>
              <div className="text-5xl font-bold text-white">{analiseEdital.scoreGeral}</div>
              <p className="text-xs text-gray-500 mt-1">de 100 pontos</p>
            </div>
            {/* Compatibilidade */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Compatibilidade Técnica</p>
              <div className="text-5xl font-bold text-[#3b82f6]">{analiseEdital.compatibilidadeTecnica}%</div>
              <p className="text-xs text-gray-500 mt-1">Índice técnico</p>
            </div>
            {/* Probabilidade */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Prob. de Vitória</p>
              <div className="text-5xl font-bold text-[#10b981]">{simulacaoFinanceira.probabilidadeVitoria}%</div>
              <p className="text-xs text-gray-500 mt-1">Baseado em IA</p>
            </div>
            {/* Recomendação */}
            <div className="text-center flex flex-col items-center justify-center">
              <Badge className="bg-[#10b981]/20 text-[#10b981] border-[#10b981]/40 px-4 py-2 text-base">
                <Award className="w-5 h-5 mr-2" />
                {analiseEdital.recomendacao}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cards de Risco */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#f59e0b]" />
                <span className="text-gray-400 text-sm">Risco Jurídico</span>
              </div>
              <Badge className={getRiscoBadge(indicadoresRisco.juridico.valor).class}>
                {getRiscoBadge(indicadoresRisco.juridico.valor).label}
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{indicadoresRisco.juridico.valor}%</div>
            <Progress value={indicadoresRisco.juridico.valor} className="h-2 bg-[#2d3748]" />
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#10b981]" />
                <span className="text-gray-400 text-sm">Risco Financeiro</span>
              </div>
              <Badge className={getRiscoBadge(indicadoresRisco.financeiro.valor).class}>
                {getRiscoBadge(indicadoresRisco.financeiro.valor).label}
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{indicadoresRisco.financeiro.valor}%</div>
            <Progress value={indicadoresRisco.financeiro.valor} className="h-2 bg-[#2d3748]" />
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[#ef4444]" />
                <span className="text-gray-400 text-sm">Risco Operacional</span>
              </div>
              <Badge className={getRiscoBadge(indicadoresRisco.operacional.valor).class}>
                {getRiscoBadge(indicadoresRisco.operacional.valor).label}
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{indicadoresRisco.operacional.valor}%</div>
            <Progress value={indicadoresRisco.operacional.valor} className="h-2 bg-[#2d3748]" />
          </CardContent>
        </Card>
      </div>

      {/* Conteúdo Principal */}
      <Tabs defaultValue="resumo" className="w-full">
        <TabsList className="bg-[#1a1d23] border border-[#2d3748]">
          <TabsTrigger value="resumo" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-[#252a33]">Resumo</TabsTrigger>
          <TabsTrigger value="riscos" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-[#252a33]">Análise de Riscos</TabsTrigger>
          <TabsTrigger value="financeiro" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-[#252a33]">Simulação Financeira</TabsTrigger>
          <TabsTrigger value="graficos" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-[#252a33]">Estatísticas</TabsTrigger>
          <TabsTrigger value="checklist" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-[#252a33]">Checklist</TabsTrigger>
        </TabsList>

        {/* Tab Resumo */}
        <TabsContent value="resumo" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Informações do Edital</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Número</p>
                    <p className="text-white font-medium">{analiseEdital.numero}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Órgão</p>
                    <p className="text-white font-medium">{analiseEdital.orgao}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Valor Estimado</p>
                    <p className="text-white font-medium text-xl">R$ {(analiseEdital.valorEstimado / 1000000).toFixed(3)}M</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Prazo Contratual</p>
                    <p className="text-white font-medium">{analiseEdital.prazoContratual}</p>
                  </div>
                </div>
                <Separator className="bg-[#2d3748]" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Objeto</p>
                  <p className="text-gray-300">{analiseEdital.objeto}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Alertas Críticos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert className="bg-[#f59e0b]/10 border-[#f59e0b]/30">
                  <AlertTriangle className="h-4 w-4 text-[#f59e0b]" />
                  <AlertTitle className="text-[#f59e0b]">Prazo Curto Documental</AlertTitle>
                  <AlertDescription className="text-gray-400">
                    Apenas 5 dias úteis para preparação da documentação completa.
                  </AlertDescription>
                </Alert>
                <Alert className="bg-[#3b82f6]/10 border-[#3b82f6]/30">
                  <Target className="h-4 w-4 text-[#3b82f6]" />
                  <AlertTitle className="text-[#3b82f6]">Oportunidade Detectada</AlertTitle>
                  <AlertDescription className="text-gray-400">
                    Histórico de preços em queda de 3,8% nos últimos 12 meses. Janela favorável.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Riscos */}
        <TabsContent value="riscos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Composição Risco Jurídico</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {composicaoRiscoJuridico.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#0f1115] rounded-lg">
                      <span className="text-gray-300">{item.item}</span>
                      <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30">+{item.pontos}%</Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-[#0f1115] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Total Risco Jurídico</span>
                    <span className="text-xl font-bold text-[#f59e0b]">{indicadoresRisco.juridico.valor}%</span>
                  </div>
                  <Progress value={indicadoresRisco.juridico.valor} className="h-2 bg-[#2d3748]" />
                  <p className="text-xs text-gray-500 mt-2">Classificação: Médio Controlável (26-50%)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Risco Operacional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-[#0f1115] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Prazo de entrega em 30 dias</span>
                    <Badge className="bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/30">+15%</Badge>
                  </div>
                  <Progress value={15} max={41} className="h-2 bg-[#2d3748]" />
                </div>
                <div className="p-4 bg-[#0f1115] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Estoque atual (60% do volume)</span>
                    <Badge className="bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/30">+17%</Badge>
                  </div>
                  <Progress value={17} max={41} className="h-2 bg-[#2d3748]" />
                </div>
                <div className="p-4 bg-[#0f1115] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Logística interestadual</span>
                    <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30">+9%</Badge>
                  </div>
                  <Progress value={9} max={41} className="h-2 bg-[#2d3748]" />
                </div>
                <Alert className="bg-[#ef4444]/10 border-[#ef4444]/30">
                  <AlertTriangle className="h-4 w-4 text-[#ef4444]" />
                  <AlertDescription className="text-gray-400">
                    Recomendação: Acionar Supply Chain Agent e negociar lote inicial com fornecedor
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Financeiro */}
        <TabsContent value="financeiro">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Simulação de Preços</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-[#0f1115] rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Preço Mínimo Histórico</p>
                  <p className="text-xl font-bold text-white">R$ {(simulacaoFinanceira.precoMinimoHistorico / 1000).toFixed(0)}K</p>
                </div>
                <div className="p-4 bg-[#0f1115] rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Preço Médio Vencedor</p>
                  <p className="text-xl font-bold text-white">R$ {(simulacaoFinanceira.precoMedioVencedor / 1000).toFixed(0)}K</p>
                </div>
                <div className="p-4 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-lg">
                  <p className="text-xs text-[#3b82f6] mb-1">Preço Ideal IA</p>
                  <p className="text-2xl font-bold text-[#3b82f6]">R$ {(simulacaoFinanceira.precoIdealIA / 1000).toFixed(0)}K</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Margens Estimadas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                  <p className="text-xs text-[#10b981] mb-1">Margem Operacional Estimada</p>
                  <p className="text-3xl font-bold text-[#10b981]">{simulacaoFinanceira.margemOperacional}%</p>
                </div>
                <div className="p-4 bg-[#0f1115] rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Margem Mínima Segura</p>
                  <p className="text-xl font-bold text-white">{simulacaoFinanceira.margemMinimaSegura}%</p>
                </div>
                <div className="p-4 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-lg">
                  <p className="text-xs text-[#f59e0b] mb-1">Último Vencedor (Margem)</p>
                  <p className="text-xl font-bold text-[#f59e0b]">6.2%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Probabilidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-6">
                  <p className="text-gray-400 text-sm mb-2">Probabilidade de Vitória</p>
                  <p className="text-5xl font-bold text-[#10b981]">{simulacaoFinanceira.probabilidadeVitoria}%</p>
                  <p className="text-xs text-gray-500 mt-2">Baseado em IA + Histórico</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Concorrentes médios</span>
                    <span className="text-white font-medium">9</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Redução média de lances</span>
                    <span className="text-white font-medium">11.4%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Histórico órgão (24m)</span>
                    <span className="text-white font-medium">18 pregões</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Gráficos */}
        <TabsContent value="graficos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Tendência Histórica de Preços</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={historicoPrecos}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                    <XAxis dataKey="mes" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(value) => `R$${(value/1000).toFixed(0)}K`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1d23', border: '1px solid #2d3748', borderRadius: '8px', color: '#fff' }}
                      formatter={(value: number) => [`R$ ${(value/1000).toFixed(0)}K`, 'Preço']}
                    />
                    <Line type="monotone" dataKey="preco" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Distribuição de Lances (Últimos 18 Pregões)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={distribuicaoLances}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                    <XAxis dataKey="faixa" stroke="#6b7280" fontSize={11} interval={0} angle={-45} textAnchor="end" height={80} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1d23', border: '1px solid #2d3748', borderRadius: '8px', color: '#fff' }}
                      formatter={(value: number) => [value, 'Quantidade']}
                    />
                    <Bar dataKey="quantidade" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Checklist */}
        <TabsContent value="checklist">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-white">Checklist de Documentação</CardTitle>
                <Badge className="bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/30">
                  {checklistCompleto} de {checklistTotal} itens
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklistEdital.map((item) => (
                  <div 
                    key={item.id} 
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      item.status === 'completo' 
                        ? 'bg-[#10b981]/5 border-[#10b981]/20' 
                        : 'bg-[#0f1115] border-[#2d3748]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.status === 'completo' ? (
                        <CheckCircle className="w-5 h-5 text-[#10b981]" />
                      ) : (
                        <Clock className="w-5 h-5 text-[#f59e0b]" />
                      )}
                      <div>
                        <p className={`font-medium ${item.status === 'completo' ? 'text-white' : 'text-gray-300'}`}>
                          {item.item}
                        </p>
                        <p className="text-xs text-gray-500">{item.categoria}</p>
                      </div>
                      {item.obrigatorio && (
                        <Badge variant="outline" className="text-xs border-[#ef4444]/30 text-[#ef4444]">
                          Obrigatório
                        </Badge>
                      )}
                    </div>
                    <Badge 
                      className={item.status === 'completo' 
                        ? 'bg-[#10b981]/10 text-[#10b981]' 
                        : 'bg-[#f59e0b]/10 text-[#f59e0b]'
                      }
                    >
                      {item.status === 'completo' ? 'Completo' : 'Pendente'}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Progresso Documental</span>
                  <span className="text-white font-medium">{Math.round((checklistCompleto / checklistTotal) * 100)}%</span>
                </div>
                <Progress value={(checklistCompleto / checklistTotal) * 100} className="h-2 bg-[#2d3748]" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
