import React from 'react';
import { BarChart3, Download, Calendar, TrendingUp, DollarSign, Target, FileText, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { PerformanceChart, TendenciaPrecosChart, DistribuicaoChart } from '../components/Charts';

const impactoData = [
  { metrica: 'Faturamento Anual', antes: 'R$ 12,5M', depois: 'R$ 18,2M', variacao: '+45,6%' },
  { metrica: 'Margem Média', antes: '14,2%', depois: '18,5%', variacao: '+4,3pp' },
  { metrica: 'Taxa de Sucesso', antes: '22%', depois: '34%', variacao: '+12pp' },
  { metrica: 'Risco Jurídico', antes: '4,5/10', depois: '2,3/10', variacao: '-49%' },
  { metrica: 'Tempo de Análise', antes: '8 dias', depois: '2 dias', variacao: '-75%' },
];

const performanceData = [
  { name: 'Jan', valor: 1.2, meta: 1.0 },
  { name: 'Fev', valor: 1.5, meta: 1.2 },
  { name: 'Mar', valor: 1.8, meta: 1.4 },
  { name: 'Abr', valor: 2.1, meta: 1.8 },
  { name: 'Mai', valor: 2.4, meta: 2.2 },
  { name: 'Jun', valor: 2.8, meta: 2.5 },
];

const modalidadeData = [
  { name: 'Pregão Eletrônico', value: 45 },
  { name: 'Concorrência', value: 30 },
  { name: 'Tomada de Preço', value: 15 },
  { name: 'Dispensa', value: 7 },
  { name: 'Inexigibilidade', value: 3 },
];

const precoTendenciaData = [
  { name: 'Jan', value: 12500, media: 12800 },
  { name: 'Fev', value: 13200, media: 13000 },
  { name: 'Mar', value: 12800, media: 13100 },
  { name: 'Abr', value: 14500, media: 13500 },
  { name: 'Mai', value: 14200, media: 13800 },
  { name: 'Jun', value: 13800, media: 14000 },
];

export function Relatorios() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Relatórios Gerenciais e Análise de Rentabilidade</h1>
          <p className="text-gray-400 text-sm mt-1">Simulações de impacto financeiro e indicadores estratégicos</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="2024">
            <SelectTrigger className="w-[140px] bg-[#0f1115] border-[#2d3748] text-white">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1d23] border-[#2d3748]">
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#0B3C5D] hover:bg-[#0B3C5D]/90">
            <Download className="w-4 h-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* Impacto LicitIA */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-white">
              Impacto da LicitIA - Comparativo Antes/Depois
            </CardTitle>
            <Badge className="bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20">
              Simulação anual
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-[#2d3748] hover:bg-[#252a33]">
                  <th className="text-left py-3 px-4 text-white font-semibold">Métrica</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Antes da LicitIA</th>
                  <th className="text-center py-3 px-4 text-white font-semibold">Com LicitIA</th>
                  <th className="text-center py-3 px-4 text-[#1E7F5C] font-semibold">Variação</th>
                </tr>
              </thead>
              <tbody>
                {impactoData.map((item, index) => (
                  <tr key={index} className="border-b border-[#2d3748] last:border-0 hover:border-[#2d3748] hover:bg-[#252a33]">
                    <td className="py-4 px-4 font-medium text-white">{item.metrica}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{item.antes}</td>
                    <td className="py-4 px-4 text-center font-semibold text-white">{item.depois}</td>
                    <td className="py-4 px-4 text-center">
                      <Badge className="bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {item.variacao}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Performance Mensal (R$ Milhões)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart data={performanceData} height={300} />
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Distribuição por Modalidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DistribuicaoChart data={modalidadeData} height={300} />
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Tendência de Preços de Mercado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TendenciaPrecosChart data={precoTendenciaData} height={300} />
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Indicadores Estratégicos Consolidados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-[#0B3C5D]/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Participação em Editais</span>
                  <span className="font-bold text-white">47</span>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-xs text-gray-400 mt-1">Meta anual: 60</p>
              </div>

              <div className="p-4 bg-[#1E7F5C]/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Taxa de Conversão</span>
                  <span className="font-bold text-[#1E7F5C]">34%</span>
                </div>
                <Progress value={68} className="h-2" />
                <p className="text-xs text-gray-400 mt-1">Meta: 35%</p>
              </div>

              <div className="p-4 bg-[#F4A261]/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Margem Média</span>
                  <span className="font-bold text-[#F4A261]">18,5%</span>
                </div>
                <Progress value={92} className="h-2" />
                <p className="text-xs text-gray-400 mt-1">Meta: 20%</p>
              </div>

              <div className="p-4 bg-[#0f1115] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Satisfação do Cliente</span>
                  <span className="font-bold text-gray-700">4,8/5,0</span>
                </div>
                <Progress value={96} className="h-2" />
                <p className="text-xs text-gray-400 mt-1">Base: 12 contratos ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ROI Summary */}
      <Card className="border-0 shadow-sm bg-gradient-to-r from-[#0B3C5D] to-[#1F5E8C] text-white">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-blue-200 text-sm mb-1">Investimento LicitIA</p>
              <p className="text-3xl font-bold">R$ 180K</p>
              <p className="text-xs text-blue-200/70">anual</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm mb-1">Retorno Estimado</p>
              <p className="text-3xl font-bold text-[#1E7F5C]">R$ 2,8M</p>
              <p className="text-xs text-blue-200/70">incremento anual</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm mb-1">ROI</p>
              <p className="text-3xl font-bold text-[#F4A261]">1.456%</p>
              <p className="text-xs text-blue-200/70">retorno sobre investimento</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm mb-1">Payback</p>
              <p className="text-3xl font-bold">1,5 meses</p>
              <p className="text-xs text-blue-200/70">tempo de retorno</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
