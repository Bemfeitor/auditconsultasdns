import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, DollarSign, Package, Truck, Receipt, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { TendenciaPrecosChart } from '../components/Charts';

const historicoPrecosData = [
  { name: 'Q1 2022', value: 12500, media: 12800 },
  { name: 'Q2 2022', value: 13200, media: 13000 },
  { name: 'Q3 2022', value: 12800, media: 13100 },
  { name: 'Q4 2022', value: 14500, media: 13500 },
  { name: 'Q1 2023', value: 14200, media: 13800 },
  { name: 'Q2 2023', value: 13800, media: 14000 },
  { name: 'Q3 2023', value: 15200, media: 14300 },
  { name: 'Q4 2023', value: 14800, media: 14500 },
  { name: 'Q1 2024', value: 15500, media: 14800 },
];

export function Precificacao() {
  const [custoFornecedor, setCustoFornecedor] = useState('8500');
  const [logistica, setLogistica] = useState('1200');
  const [tributos, setTributos] = useState('18');
  const [margemDesejada, setMargemDesejada] = useState('25');
  
  const [resultado, setResultado] = useState({
    precoSugerido: 0,
    precoMinimo: 0,
    zonaRisco: false,
    probabilidadeVitoria: 0,
  });

  useEffect(() => {
    const custo = parseFloat(custoFornecedor) || 0;
    const log = parseFloat(logistica) || 0;
    const trib = parseFloat(tributos) || 0;
    const margem = parseFloat(margemDesejada) || 0;
    
    const custoTotal = custo + log;
    const valorTributos = custoTotal * (trib / 100);
    const precoMinimo = custoTotal + valorTributos;
    const precoSugerido = precoMinimo * (1 + (margem / 100));
    
    // Cálculo simulado de probabilidade baseado no preço vs histórico
    const precoMedioMercado = 14800;
    const diferenca = ((precoSugerido - precoMedioMercado) / precoMedioMercado) * 100;
    let probabilidade = 0;
    
    if (diferenca <= -10) probabilidade = 85;
    else if (diferenca <= -5) probabilidade = 70;
    else if (diferenca <= 0) probabilidade = 55;
    else if (diferenca <= 5) probabilidade = 40;
    else if (diferenca <= 10) probabilidade = 25;
    else probabilidade = 15;
    
    setResultado({
      precoSugerido,
      precoMinimo,
      zonaRisco: precoSugerido < precoMinimo * 1.05,
      probabilidadeVitoria: probabilidade,
    });
  }, [custoFornecedor, logistica, tributos, margemDesejada]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Inteligência de Precificação</h1>
          <p className="text-gray-400 text-sm mt-1">Simulação inteligente de preços com análise de mercado</p>
        </div>
        <Badge className="bg-[#0B3C5D]/10 text-white border-[#0B3C5D]/20">
          <TrendingUp className="w-3 h-3 mr-1" />
          Baseado em 847 registros históricos
        </Badge>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Preço Mínimo Histórico</p>
            <p className="text-xl font-bold text-[#1E7F5C]">R$ 12.500,00</p>
            <p className="text-xs text-gray-400">Q1 2022</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Preço Médio de Mercado</p>
            <p className="text-xl font-bold text-white">R$ 14.800,00</p>
            <p className="text-xs text-gray-400">Últimos 12 meses</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Preço Máximo Histórico</p>
            <p className="text-xl font-bold text-[#F4A261]">R$ 15.500,00</p>
            <p className="text-xs text-gray-400">Q1 2024</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Desvio Padrão</p>
            <p className="text-xl font-bold text-white">R$ 1.247,00</p>
            <p className="text-xs text-gray-400">8,4% do preço médio</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Simulator */}
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Simulador de Formação de Preço
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Inputs */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="custo" className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    Custo do Fornecedor
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R$</span>
                    <Input
                      id="custo"
                      type="number"
                      value={custoFornecedor}
                      onChange={(e) => setCustoFornecedor(e.target.value)}
                      className="pl-10 bg-[#0f1115] border-[#2d3748] text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logistica" className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-gray-400" />
                    Logística
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R$</span>
                    <Input
                      id="logistica"
                      type="number"
                      value={logistica}
                      onChange={(e) => setLogistica(e.target.value)}
                      className="pl-10 bg-[#0f1115] border-[#2d3748] text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tributos" className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-gray-400" />
                    Tributos (%)
                  </Label>
                  <div className="relative">
                    <Input className="bg-[#0f1115] border-[#2d3748] text-white"
                      id="tributos"
                      type="number"
                      value={tributos}
                      onChange={(e) => setTributos(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="margem" className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-gray-400" />
                    Margem Desejada
                  </Label>
                  <div className="relative">
                    <Input className="bg-[#0f1115] border-[#2d3748] text-white"
                      id="margem"
                      type="number"
                      value={margemDesejada}
                      onChange={(e) => setMargemDesejada(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Results */}
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${resultado.zonaRisco ? 'bg-red-50 border border-red-200' : 'bg-[#1E7F5C]/10 border border-[#1E7F5C]/20'}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">Preço Sugerido pela IA</p>
                  {resultado.zonaRisco ? (
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-[#1E7F5C]" />
                  )}
                </div>
                <p className={`text-3xl font-bold ${resultado.zonaRisco ? 'text-red-600' : 'text-[#1E7F5C]'}`}>
                  {formatCurrency(resultado.precoSugerido)}
                </p>
                {resultado.zonaRisco && (
                  <p className="text-sm text-red-600 mt-2">
                    ⚠️ Preço na zona de risco de inexequibilidade
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0f1115] rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Preço Mínimo Seguro</p>
                  <p className="text-xl font-semibold text-white">
                    {formatCurrency(resultado.precoMinimo)}
                  </p>
                </div>
                <div className="p-4 bg-[#0f1115] rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Prob. de Vitória</p>
                  <p className={`text-xl font-semibold ${
                    resultado.probabilidadeVitoria >= 70 ? 'text-[#1E7F5C]' :
                    resultado.probabilidadeVitoria >= 40 ? 'text-[#F4A261]' : 'text-red-500'
                  }`}>
                    {resultado.probabilidadeVitoria}%
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Posicionamento vs Mercado</span>
                  <span className={`text-sm font-medium ${
                    resultado.precoSugerido <= 14800 ? 'text-[#1E7F5C]' : 'text-[#F4A261]'
                  }`}>
                    {resultado.precoSugerido <= 14800 ? 'Abaixo da média' : 'Acima da média'}
                  </span>
                </div>
                <Progress 
                  value={Math.min((resultado.precoSugerido / 16000) * 100, 100)} 
                  className="h-3"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>R$ 12.500</span>
                  <span>R$ 14.800 (média)</span>
                  <span>R$ 16.000</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart */}
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Histórico de Preços Públicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TendenciaPrecosChart data={historicoPrecosData} height={350} />
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-[#0f1115] rounded-lg">
                <TrendingDown className="w-5 h-5 text-[#1E7F5C] mx-auto mb-1" />
                <p className="text-xs text-gray-400">Tendência</p>
                <p className="font-semibold text-[#1E7F5C]">Alta (+5,2%)</p>
              </div>
              <div className="text-center p-3 bg-[#0f1115] rounded-lg">
                <DollarSign className="w-5 h-5 text-white mx-auto mb-1" />
                <p className="text-xs text-gray-400">Volume Médio</p>
                <p className="font-semibold text-white">R$ 2,4M/mês</p>
              </div>
              <div className="text-center p-3 bg-[#0f1115] rounded-lg">
                <Package className="w-5 h-5 text-[#F4A261] mx-auto mb-1" />
                <p className="text-xs text-gray-400">Itens/Edital</p>
                <p className="font-semibold text-[#F4A261]">12,5 média</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#1E7F5C]/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#1E7F5C]" />
              </div>
              <div>
                <p className="font-medium text-white">Recomendação da IA</p>
                <p className="text-sm text-gray-400 mt-1">
                  Com base no histórico, recomendamos preço entre R$ 14.200 e R$ 14.800 
                  para maximizar probabilidade de vitória mantendo margem saudável.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#F4A261]" />
              </div>
              <div>
                <p className="font-medium text-white">Pontos de Atenção</p>
                <p className="text-sm text-gray-400 mt-1">
                  Preços acima de R$ 15.500 têm apenas 15% de chance de vitória. 
                  Considere reduzir margem para editais com alta concorrência.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Tendência de Mercado</p>
                <p className="text-sm text-gray-400 mt-1">
                  Os preços vêm aumentando 5,2% ao ano. Recomendamos ajustar 
                  seus custos estimados em +3% para o próximo trimestre.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
