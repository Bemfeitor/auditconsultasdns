import React from 'react';
import { Brain, TrendingUp, Target, DollarSign, Award, BarChart3, ArrowUpRight, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PerformanceChart, DistribuicaoChart } from '../components/Charts';

const performanceData = [
  { name: '2022', valor: 12.5, meta: 10.0 },
  { name: '2023', valor: 18.2, meta: 15.0 },
  { name: '2024 (P)', valor: 24.8, meta: 22.0 },
];

const priorizacaoData = [
  { name: 'Pregão Eletrônico', value: 45 },
  { name: 'Concorrência', value: 30 },
  { name: 'Dispensa', value: 15 },
  { name: 'Inexigibilidade', value: 10 },
];

const sugestoes = [
  { id: 1, edital: 'SEINFRA/2024/045', prioridade: 'alta', score: 95, motivo: 'Alta compatibilidade técnica e margem projetada de 28%' },
  { id: 2, edital: 'PMSP/2024/892', prioridade: 'alta', score: 88, motivo: 'Órgão com histórico de pagamento pontual e baixa concorrência' },
  { id: 3, edital: 'MD/2024/123', prioridade: 'media', score: 78, motivo: 'Boa margem mas prazo curto para documentação' },
  { id: 4, edital: 'SES/MG/2024/567', prioridade: 'baixa', score: 65, motivo: 'Concorrência estimada alta (15+ participantes)' },
];

export function CentralEstrategica() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Central Estratégica de Decisão</h1>
          <p className="text-gray-400 text-sm mt-1">Inteligência artificial para priorização e otimização estratégica</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E7F5C]/10 to-[#1F5E8C]/10 rounded-full border border-[#1E7F5C]/20">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-[#1E7F5C] rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-[#1E7F5C] rounded-full animate-ping opacity-50" />
            </div>
            <span className="text-sm font-medium text-white">IA Analítica Ativa</span>
            <Brain className="w-4 h-4 text-[#1F5E8C]" />
          </div>
        </div>
      </div>

      {/* Main KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-blue-200 text-sm">Capital Alocado</p>
                <p className="text-3xl font-bold mt-1">R$ 12,4M</p>
                <p className="text-xs text-blue-200/70 mt-1">+23% vs 2023</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-200/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-green-100 text-sm">ROI Estimado</p>
                <p className="text-3xl font-bold mt-1">28,5%</p>
                <p className="text-xs text-green-100/70 mt-1">+4,2pp vs projeção</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-100/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-orange-100 text-sm">Projeção Anual</p>
                <p className="text-3xl font-bold mt-1">+42%</p>
                <p className="text-xs text-orange-100/70 mt-1">faturamento vs 2023</p>
              </div>
              <BarChart3 className="w-8 h-8 text-orange-100/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm">Performance Consolidada</p>
                <p className="text-3xl font-bold text-white mt-1">94/100</p>
                <p className="text-xs text-[#1E7F5C] mt-1">Excelente desempenho</p>
              </div>
              <Award className="w-8 h-8 text-[#F4A261]" />
            </div>
            <Progress value={94} className="h-2 mt-4" />
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Evolução do Faturamento (R$ Milhões)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart data={performanceData} height={300} />
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Distribuição de Oportunidades por Modalidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DistribuicaoChart data={priorizacaoData} height={300} />
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#F4A261]" />
              Sugestões de Priorização IA
            </CardTitle>
            <Badge className="bg-[#0B3C5D]/10 text-white border-[#0B3C5D]/20">
              Atualizado em tempo real
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sugestoes.map((sug) => (
              <div key={sug.id} className="flex items-center justify-between p-4 bg-[#0f1115] rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    sug.prioridade === 'alta' ? 'bg-[#1E7F5C]/10' :
                    sug.prioridade === 'media' ? 'bg-[#F4A261]/10' : 'bg-gray-100'
                  }`}>
                    <Target className={`w-6 h-6 ${
                      sug.prioridade === 'alta' ? 'text-[#1E7F5C]' :
                      sug.prioridade === 'media' ? 'text-[#F4A261]' : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white">{sug.edital}</p>
                      <Badge className={
                        sug.prioridade === 'alta' ? 'bg-[#1E7F5C]/10 text-[#1E7F5C]' :
                        sug.prioridade === 'media' ? 'bg-[#F4A261]/10 text-[#F4A261]' :
                        'bg-gray-100 text-gray-600'
                      }>
                        Prioridade {sug.prioridade}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{sug.motivo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{sug.score}</p>
                    <p className="text-xs text-gray-400">Score IA</p>
                  </div>
                  <Button size="sm" className="bg-[#0B3C5D] hover:bg-[#0B3C5D]/90">
                    Analisar
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#1E7F5C]/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#1E7F5C]" />
              </div>
              <div>
                <p className="font-medium text-white">Risco Jurídico Médio</p>
                <p className="text-2xl font-bold text-[#1E7F5C]">2,3/10</p>
                <p className="text-xs text-gray-400">Baixo risco no portfolio</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Taxa de Sucesso</p>
                <p className="text-2xl font-bold text-white">34%</p>
                <p className="text-xs text-gray-400">vs 22% mercado médio</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#F4A261]" />
              </div>
              <div>
                <p className="font-medium text-white">Margem Média</p>
                <p className="text-2xl font-bold text-[#F4A261]">18,5%</p>
                <p className="text-xs text-gray-400">Meta: 20%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
