import React from 'react';
import { Activity, Clock, TrendingUp, AlertCircle, Play, Pause, Settings, Zap, Shield, DollarSign, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const pregoesAtivos = [
  {
    id: '1',
    numeroEdital: 'SEINFRA/2024/045',
    orgao: 'Secretaria de Infraestrutura/SP',
    objeto: 'Aquisição de equipamentos de informática',
    status: 'em_andamento',
    ultimoLance: 125800,
    melhorLance: 118500,
    posicaoRanking: 2,
    totalParticipantes: 8,
    tempoRestante: 45,
    lanceAutomaticoAtivo: true,
    limiteFinanceiro: 120000,
  },
  {
    id: '2',
    numeroEdital: 'SEDUC/2024/123',
    orgao: 'Secretaria de Educação/MG',
    objeto: 'Licenças de software educacional',
    status: 'em_andamento',
    ultimoLance: 89000,
    melhorLance: 87500,
    posicaoRanking: 1,
    totalParticipantes: 5,
    tempoRestante: 12,
    lanceAutomaticoAtivo: false,
    limiteFinanceiro: 90000,
  },
  {
    id: '3',
    numeroEdital: 'DEFESA/2024/089',
    orgao: 'Ministério da Defesa',
    objeto: 'Serviços de manutenção de redes',
    status: 'aguardando',
    ultimoLance: 0,
    melhorLance: 0,
    posicaoRanking: 0,
    totalParticipantes: 0,
    tempoRestante: 180,
    lanceAutomaticoAtivo: true,
    limiteFinanceiro: 250000,
  },
];

export function Monitoramento() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Monitoramento de Pregões</h1>
          <p className="text-gray-400 text-sm mt-1">Acompanhamento em tempo real de licitações ativas</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20">
            <Activity className="w-3 h-3 mr-1" />
            2 Pregões Ativos
          </Badge>
          <Badge className="bg-[#F4A261]/10 text-[#F4A261] border-[#F4A261]/20">
            <Clock className="w-3 h-3 mr-1" />
            1 Aguardando
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Valor em Disputa</p>
                <p className="text-xl font-bold text-white">R$ 4,2M</p>
              </div>
              <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Posição Média</p>
                <p className="text-xl font-bold text-[#1E7F5C]">#1.5</p>
              </div>
              <div className="w-10 h-10 bg-[#1E7F5C]/10 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-[#1E7F5C]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Lance Automático</p>
                <p className="text-xl font-bold text-white">2/3 Ativos</p>
              </div>
              <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Redução Média</p>
                <p className="text-xl font-bold text-[#F4A261]">-12.5%</p>
              </div>
              <div className="w-10 h-10 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#F4A261]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pregões List */}
        <Card className="bg-[#1a1d23] border-[#2d3748] lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Pregões em Andamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-[#2d3748] hover:bg-[#252a33]">
                  <TableHead className="text-gray-400 font-semibold">Edital/Órgão</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Status</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Último Lance</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Posição</TableHead>
                  <TableHead className="text-gray-400 font-semibold">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pregoesAtivos.map((pregao) => (
                  <TableRow key={pregao.id} className="border-[#2d3748] hover:bg-[#252a33]">
                    <TableCell>
                      <div>
                        <p className="font-medium text-white">{pregao.numeroEdital}</p>
                        <p className="text-sm text-gray-400">{pregao.orgao}</p>
                        <p className="text-xs text-gray-400 line-clamp-1">{pregao.objeto}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge 
                          variant="outline"
                          className={
                            pregao.status === 'em_andamento' 
                              ? 'bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20' 
                              : 'bg-[#F4A261]/10 text-[#F4A261] border-[#F4A261]/20'
                          }
                        >
                          {pregao.status === 'em_andamento' ? 'Em Andamento' : 'Aguardando'}
                        </Badge>
                        {pregao.status === 'em_andamento' && (
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <Clock className="w-3 h-3" />
                            {pregao.tempoRestante}min rest.
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {pregao.ultimoLance > 0 ? (
                        <div>
                          <p className="font-semibold text-white">
                            R$ {pregao.ultimoLance.toLocaleString('pt-BR')}
                          </p>
                          <p className="text-xs text-[#1E7F5C]">
                            Melhor: R$ {pregao.melhorLance.toLocaleString('pt-BR')}
                          </p>
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {pregao.posicaoRanking > 0 ? (
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${
                            pregao.posicaoRanking === 1 ? 'text-[#1E7F5C]' : 'text-[#F4A261]'
                          }`}>
                            #{pregao.posicaoRanking}
                          </span>
                          <span className="text-xs text-gray-400">
                            de {pregao.totalParticipantes}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Activity className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="bg-[#0B3C5D] hover:bg-[#0B3C5D]/90">
                          Acompanhar
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Strategy Panel */}
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">
              Estratégia Automática
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Selected Pregao */}
            <div className="p-4 bg-[#0B3C5D]/5 rounded-lg">
              <p className="text-sm font-medium text-white">SEINFRA/2024/045</p>
              <p className="text-xs text-gray-400">Secretaria de Infraestrutura/SP</p>
            </div>

            <Separator />

            {/* Auto Bid Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#F4A261]" />
                  <span className="text-sm font-medium">Lance Automático</span>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-400">Lance Mínimo Competitivo</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Reduzir até</span>
                  <Badge variant="outline">0,5%</Badge>
                  <span className="text-sm text-gray-400">por lance</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-400">Intervalo Máximo de Redução</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Máx.</span>
                  <Badge variant="outline">R$ 500,00</Badge>
                  <span className="text-sm text-gray-400">por lance</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-400">Limite Financeiro Seguro</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">R$</span>
                  <input 
                    type="text" 
                    defaultValue="120.000,00"
                    className="w-full pl-10 pr-3 py-2 bg-[#0f1115] border-[#2d3748] text-white rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Status Indicators */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#1E7F5C]/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-[#1E7F5C]" />
                  <span className="text-sm text-[#1E7F5C]">Lance Automático Ativo</span>
                </div>
                <div className="w-2 h-2 bg-[#1E7F5C] rounded-full animate-pulse" />
              </div>

              <div className="flex items-center justify-between p-3 bg-[#F4A261]/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <Pause className="w-4 h-4 text-[#F4A261]" />
                  <span className="text-sm text-[#8B5A2B]">Aguardando Movimentação</span>
                </div>
                <Clock className="w-4 h-4 text-[#F4A261]" />
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-red-600">Zona de Risco Financeiro</span>
                </div>
                <Shield className="w-4 h-4 text-red-500" />
              </div>
            </div>

            <Button className="w-full bg-[#0B3C5D] hover:bg-[#0B3C5D]/90">
              <Settings className="w-4 h-4 mr-2" />
              Configurar Estratégia
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Risk Alert */}
      <Alert className="border-[#F4A261] bg-[#F4A261]/10">
        <AlertCircle className="h-4 w-4 text-[#F4A261]" />
        <AlertTitle className="text-[#8B5A2B]">Atenção - Limite de Segurança</AlertTitle>
        <AlertDescription className="text-[#8B5A2B]/80">
          O pregão SEINFRA/2024/045 está próximo do limite financeiro configurado (R$ 120.000,00). 
          O sistema irá desativar lances automáticos ao atingir R$ 118.000,00.
        </AlertDescription>
      </Alert>
    </div>
  );
}

// Simple Label component for the form
function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={`text-sm font-medium ${className}`}>{children}</label>;
}
