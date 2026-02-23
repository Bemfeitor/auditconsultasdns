import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, TrendingUp, Eye, Star, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';

const oportunidadesMock = [
  {
    id: '1',
    numeroEdital: 'MINFRA/2024/045',
    orgao: 'Ministério da Infraestrutura',
    estado: 'DF',
    cidade: 'Brasília',
    valorEstimado: 2450000,
    indiceCompatibilidade: 95,
    status: 'novo',
  },
  {
    id: '2',
    numeroEdital: 'PMSP/2024/892',
    orgao: 'Prefeitura Municipal de São Paulo',
    estado: 'SP',
    cidade: 'São Paulo',
    valorEstimado: 890000,
    indiceCompatibilidade: 88,
    status: 'analise',
  },
  {
    id: '3',
    numeroEdital: 'MD/2024/123',
    orgao: 'Ministério da Defesa',
    estado: 'RJ',
    cidade: 'Rio de Janeiro',
    valorEstimado: 1200000,
    indiceCompatibilidade: 92,
    status: 'participando',
  },
  {
    id: '4',
    numeroEdital: 'SES/MG/2024/567',
    orgao: 'Secretaria de Estado de Saúde de MG',
    estado: 'MG',
    cidade: 'Belo Horizonte',
    valorEstimado: 450000,
    indiceCompatibilidade: 85,
    status: 'novo',
  },
  {
    id: '5',
    numeroEdital: 'TJSP/2024/234',
    orgao: 'Tribunal de Justiça de São Paulo',
    estado: 'SP',
    cidade: 'São Paulo',
    valorEstimado: 680000,
    indiceCompatibilidade: 78,
    status: 'aguardando',
  },
];

export function RadarOportunidades() {
  const [busca, setBusca] = useState('');

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      novo: 'bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/30',
      analise: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30',
      participando: 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30',
      aguardando: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
    };
    return variants[status] || variants.novo;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Prospecção de Editais</h1>
          <p className="text-gray-400 text-sm mt-1">Radar inteligente de oportunidades em licitações públicas</p>
        </div>
        <Button className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">
          <Download className="w-4 h-4 mr-2" />
          Exportar Relatório
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Editais Detectados</p>
                <p className="text-2xl font-bold text-white">127</p>
              </div>
              <div className="w-10 h-10 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#3b82f6]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Compatíveis {'>'}80%</p>
                <p className="text-2xl font-bold text-white">34</p>
              </div>
              <div className="w-10 h-10 bg-[#10b981]/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-[#10b981]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Em Análise</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
              <div className="w-10 h-10 bg-[#f59e0b]/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#f59e0b]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Potencial Total</p>
                <p className="text-2xl font-bold text-white">R$ 45,2M</p>
              </div>
              <div className="w-10 h-10 bg-[#8b5cf6]/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-[#8b5cf6]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input 
                  placeholder="Buscar por órgão, objeto ou número do edital..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-10 bg-[#0f1115] border-[#2d3748] text-white placeholder:text-gray-500"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px] bg-[#0f1115] border-[#2d3748] text-white">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1d23] border-[#2d3748]">
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="SP">São Paulo</SelectItem>
                <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                <SelectItem value="MG">Minas Gerais</SelectItem>
                <SelectItem value="DF">Distrito Federal</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-[#0f1115] border-[#2d3748] text-white">
                <Filter className="w-4 h-4 mr-2 text-gray-500" />
                <SelectValue placeholder="Modalidade" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1d23] border-[#2d3748]">
                <SelectItem value="todas">Todas</SelectItem>
                <SelectItem value="pregao">Pregão Eletrônico</SelectItem>
                <SelectItem value="concorrencia">Concorrência</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-white">
            Editais Priorizados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px]">
            <Table>
              <TableHeader>
                <TableRow className="border-[#2d3748] hover:bg-transparent">
                  <TableHead className="text-gray-400 font-semibold">Edital/Órgão</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Valor Est.</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Compat.</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Status</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {oportunidadesMock.map((opp) => (
                  <TableRow key={opp.id} className="border-[#2d3748] hover:bg-[#252a33]">
                    <TableCell>
                      <div>
                        <p className="font-medium text-white">{opp.numeroEdital}</p>
                        <p className="text-sm text-gray-400">{opp.orgao}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{opp.cidade}/{opp.estado}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-semibold text-white">
                        R$ {(opp.valorEstimado / 1000000).toFixed(1)}M
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 bg-[#2d3748] rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              opp.indiceCompatibilidade >= 90 ? 'bg-[#10b981]' :
                              opp.indiceCompatibilidade >= 70 ? 'bg-[#f59e0b]' : 'bg-[#ef4444]'
                            }`}
                            style={{ width: `${opp.indiceCompatibilidade}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-white">{opp.indiceCompatibilidade}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusBadge(opp.status)}>
                        {opp.status === 'participando' ? 'Participando' : 
                         opp.status === 'analise' ? 'Em Análise' : 
                         opp.status === 'aguardando' ? 'Aguardando' : 'Novo'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white">
                        Analisar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
