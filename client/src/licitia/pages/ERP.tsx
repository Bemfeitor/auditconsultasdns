import React from 'react';
import { Building2, FileText, Receipt, Package, CheckCircle, Clock, AlertCircle, TrendingUp, DollarSign, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const contratos = [
  {
    id: '1',
    numero: '2024/001',
    orgao: 'Ministério da Infraestrutura',
    objeto: 'Aquisição de equipamentos de TI',
    valorTotal: 2450000,
    dataInicio: '2024-01-15',
    dataTermino: '2024-12-15',
    empenhos: [
      { id: 'E001', numero: '2024NE000123', valor: 1225000, data: '2024-01-20', status: 'ativo' },
      { id: 'E002', numero: '2024NE000456', valor: 1225000, data: '2024-07-01', status: 'ativo' },
    ],
    notasFiscais: [
      { id: 'NF001', numero: '12345', valor: 612500, dataEmissao: '2024-02-15', status: 'paga' },
      { id: 'NF002', numero: '12346', valor: 612500, dataEmissao: '2024-03-20', status: 'paga' },
    ],
    statusEntrega: 'em_andamento',
    conformidade: 95,
  },
  {
    id: '2',
    numero: '2024/045',
    orgao: 'Prefeitura de São Paulo',
    objeto: 'Serviços de consultoria',
    valorTotal: 890000,
    dataInicio: '2024-02-01',
    dataTermino: '2024-11-30',
    empenhos: [
      { id: 'E003', numero: '2024NE000789', valor: 890000, data: '2024-02-05', status: 'ativo' },
    ],
    notasFiscais: [
      { id: 'NF003', numero: '9876', valor: 222500, dataEmissao: '2024-03-01', status: 'paga' },
    ],
    statusEntrega: 'em_andamento',
    conformidade: 100,
  },
];

export function ERP() {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      nao_iniciado: 'bg-gray-100 text-gray-600 border-gray-200',
      em_andamento: 'bg-[#F4A261]/10 text-[#F4A261] border-[#F4A261]/20',
      concluido: 'bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20',
    };
    return variants[status] || variants.nao_iniciado;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestão de Execução Contratual</h1>
          <p className="text-gray-400 text-sm mt-1">ERP Inteligente - Controle de contratos, empenhos e entregas</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Contratos Ativos</p>
            <p className="text-xl font-bold text-white">12</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Valor Total</p>
            <p className="text-xl font-bold text-white">R$ 8,4M</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Empenhos Ativos</p>
            <p className="text-xl font-bold text-[#1E7F5C]">R$ 4,2M</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Notas Fiscais</p>
            <p className="text-xl font-bold text-[#F4A261]">R$ 2,1M</p>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-400">Conformidade Média</p>
            <p className="text-xl font-bold text-[#1E7F5C]">97%</p>
          </CardContent>
        </Card>
      </div>

      {/* Contratos */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Contratos em Execução
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-[#2d3748] hover:bg-[#252a33]">
                <TableHead className="text-gray-400 font-semibold">Contrato</TableHead>
                <TableHead className="text-gray-400 font-semibold">Valor</TableHead>
                <TableHead className="text-gray-400 font-semibold">Status</TableHead>
                <TableHead className="text-gray-400 font-semibold">Conformidade</TableHead>
                <TableHead className="text-gray-400 font-semibold">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contratos.map((contrato) => (
                <TableRow key={contrato.id} className="border-[#2d3748] hover:bg-[#252a33]">
                  <TableCell>
                    <div>
                      <p className="font-medium text-white">{contrato.numero}</p>
                      <p className="text-sm text-gray-400">{contrato.orgao}</p>
                      <p className="text-xs text-gray-400 line-clamp-1">{contrato.objeto}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-semibold text-white">
                      R$ {contrato.valorTotal.toLocaleString('pt-BR')}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusBadge(contrato.statusEntrega)}>
                      {contrato.statusEntrega === 'em_andamento' ? 'Em Andamento' : 
                       contrato.statusEntrega === 'concluido' ? 'Concluído' : 'Não Iniciado'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={contrato.conformidade} className="w-20 h-2" />
                      <span className="text-sm font-medium">{contrato.conformidade}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-white">
                      Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Tabs: Empenhos e NF */}
      <Tabs defaultValue="empenhos" className="w-full">
        <TabsList className="bg-white border border-gray-200 p-1">
          <TabsTrigger value="empenhos">Empenhos Emitidos</TabsTrigger>
          <TabsTrigger value="notas">Notas Fiscais</TabsTrigger>
        </TabsList>

        <TabsContent value="empenhos">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2d3748] hover:bg-[#252a33]">
                    <TableHead className="text-gray-400 font-semibold">Número</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Contrato</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Valor</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Data</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contratos.flatMap(c => c.empenhos).map((empenho) => (
                    <TableRow key={empenho.id} className="border-[#2d3748] hover:bg-[#252a33]">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-white" />
                          <span className="font-medium">{empenho.numero}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {contratos.find(c => c.empenhos.some(e => e.id === empenho.id))?.numero}
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold text-white">
                          R$ {empenho.valor.toLocaleString('pt-BR')}
                        </p>
                      </TableCell>
                      <TableCell>{empenho.data}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20">
                          {empenho.status === 'ativo' ? 'Ativo' : 'Cancelado'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notas">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2d3748] hover:bg-[#252a33]">
                    <TableHead className="text-gray-400 font-semibold">Número</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Contrato</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Valor</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Emissão</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contratos.flatMap(c => c.notasFiscais).map((nf) => (
                    <TableRow key={nf.id} className="border-[#2d3748] hover:bg-[#252a33]">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Receipt className="w-4 h-4 text-[#F4A261]" />
                          <span className="font-medium">{nf.numero}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {contratos.find(c => c.notasFiscais.some(n => n.id === nf.id))?.numero}
                      </TableCell>
                      <TableCell>
                        <p className="font-semibold text-white">
                          R$ {nf.valor.toLocaleString('pt-BR')}
                        </p>
                      </TableCell>
                      <TableCell>{nf.dataEmissao}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={
                          nf.status === 'paga' 
                            ? 'bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20'
                            : 'bg-[#F4A261]/10 text-[#F4A261] border-[#F4A261]/20'
                        }>
                          {nf.status === 'paga' ? 'Paga' : 'Pendente'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Entrega Status */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">
            Status de Entrega e Estoque
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#0f1115] rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Itens Entregues</span>
                <CheckCircle className="w-5 h-5 text-[#1E7F5C]" />
              </div>
              <p className="text-2xl font-bold text-[#1E7F5C]">245</p>
              <p className="text-xs text-gray-400">de 312 contratados</p>
              <Progress value={78} className="h-2 mt-2" />
            </div>

            <div className="p-4 bg-[#0f1115] rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Em Trânsito</span>
                <Package className="w-5 h-5 text-[#F4A261]" />
              </div>
              <p className="text-2xl font-bold text-[#F4A261]">42</p>
              <p className="text-xs text-gray-400">previsão: 5 dias</p>
              <Progress value={20} className="h-2 mt-2" />
            </div>

            <div className="p-4 bg-[#0f1115] rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Pendentes</span>
                <Clock className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-white">25</p>
              <p className="text-xs text-gray-400">aguardando produção</p>
              <Progress value={12} className="h-2 mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
