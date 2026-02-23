import React from 'react';
import { Package, TrendingUp, Calendar, DollarSign, ShoppingCart, Warehouse, AlertTriangle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PerformanceChart } from '../components/Charts';

const forecastData = [
  { name: 'Jan', valor: 450, meta: 400 },
  { name: 'Fev', valor: 520, meta: 450 },
  { name: 'Mar', valor: 480, meta: 500 },
  { name: 'Abr', valor: 600, meta: 550 },
  { name: 'Mai', valor: 650, meta: 600 },
  { name: 'Jun', valor: 720, meta: 650 },
];

const insumosPrevistos = [
  { id: 1, nome: 'Equipamentos de TI', categoria: 'Tecnologia', quantidade: 45, custoUnitario: 8500, previsao: 'Q2 2024', fornecedor: 'TechSupply' },
  { id: 2, nome: 'Licenças de Software', categoria: 'Software', quantidade: 120, custoUnitario: 1200, previsao: 'Q2 2024', fornecedor: 'SoftCorp' },
  { id: 3, nome: 'Material de Escritório', categoria: 'Suprimentos', quantidade: 500, custoUnitario: 150, previsao: 'Q3 2024', fornecedor: 'OfficePlus' },
  { id: 4, nome: 'Serviços de Consultoria', categoria: 'Serviços', quantidade: 12, custoUnitario: 15000, previsao: 'Q2 2024', fornecedor: 'ConsultX' },
];

export function Planejamento() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Planejamento de Compras e Suprimentos</h1>
          <p className="text-gray-400 text-sm mt-1">Previsão de demandas e otimização de aquisições</p>
        </div>
        <Button className="bg-[#0B3C5D] hover:bg-[#0B3C5D]/90">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Nova Requisição
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Previsão Q2 2024</p>
                <p className="text-xl font-bold text-white">R$ 2,8M</p>
              </div>
              <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Eficiência Operacional</p>
                <p className="text-xl font-bold text-[#1E7F5C]">94%</p>
              </div>
              <div className="w-10 h-10 bg-[#1E7F5C]/10 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-[#1E7F5C]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Hedge Estratégico</p>
                <p className="text-xl font-bold text-[#F4A261]">R$ 450K</p>
              </div>
              <div className="w-10 h-10 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#F4A261]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Itens em Estoque</p>
                <p className="text-xl font-bold text-white">847</p>
              </div>
              <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                <Warehouse className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts + Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Forecast Chart */}
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Previsão de Custo Futuro (R$ mil)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart data={forecastData} height={300} />
          </CardContent>
        </Card>

        {/* Insumos Table */}
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Planejamento de Aquisição
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-[#2d3748] hover:bg-[#252a33]">
                  <TableHead className="text-gray-400 font-semibold">Insumo</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Qtd</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Previsão</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {insumosPrevistos.map((insumo) => (
                  <TableRow key={insumo.id} className="border-[#2d3748] hover:bg-[#252a33]">
                    <TableCell>
                      <div>
                        <p className="font-medium text-white">{insumo.nome}</p>
                        <p className="text-xs text-gray-400">{insumo.categoria}</p>
                      </div>
                    </TableCell>
                    <TableCell>{insumo.quantidade}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {insumo.previsao}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <p className="font-semibold text-white">
                        R$ {(insumo.quantidade * insumo.custoUnitario / 1000).toFixed(0)}K
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Hedge Strategy */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Indicador de Hedge Estratégico
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#1E7F5C]/5 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-[#1E7F5C]" />
                <span className="font-medium text-white">Cobertura de Preço</span>
              </div>
              <p className="text-2xl font-bold text-[#1E7F5C]">68%</p>
              <p className="text-sm text-gray-400 mt-1">
                dos insumos críticos com preços travados
              </p>
              <Progress value={68} className="h-2 mt-3" />
            </div>

            <div className="p-4 bg-[#0B3C5D]/5 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-white" />
                <span className="font-medium text-white">Prazo Médio de Entrega</span>
              </div>
              <p className="text-2xl font-bold text-white">23 dias</p>
              <p className="text-sm text-gray-400 mt-1">
                redução de 15% vs ano anterior
              </p>
              <div className="flex items-center gap-1 mt-3 text-sm text-[#1E7F5C]">
                <TrendingUp className="w-4 h-4" />
                <span>Melhoria contínua</span>
              </div>
            </div>

            <div className="p-4 bg-[#F4A261]/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-[#F4A261]" />
                <span className="font-medium text-white">Alertas de Estoque</span>
              </div>
              <p className="text-2xl font-bold text-[#F4A261]">3 itens</p>
              <p className="text-sm text-gray-400 mt-1">
                abaixo do estoque mínimo recomendado
              </p>
              <Button variant="link" className="p-0 h-auto text-[#F4A261] mt-2">
                Ver detalhes <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
