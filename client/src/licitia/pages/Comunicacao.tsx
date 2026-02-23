import React from 'react';
import { MessageSquare, Mail, CheckCircle, Clock, AlertCircle, FileText, Package, Send, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';

const devolutivas = [
  {
    id: '1',
    tipo: 'aprovacao',
    orgao: 'Ministério da Infraestrutura',
    edital: 'MINFRA/2024/045',
    descricao: 'Proposta aprovada. Aguardando assinatura do contrato.',
    status: 'resolvido',
    dataRecebimento: '2024-03-10',
    prioridade: 'alta',
  },
  {
    id: '2',
    tipo: 'documentacao',
    orgao: 'Prefeitura de São Paulo',
    edital: 'PMSP/2024/892',
    descricao: 'Solicitação de envio de certificado ISO 27001 atualizado.',
    status: 'pendente',
    dataRecebimento: '2024-03-12',
    prioridade: 'alta',
  },
  {
    id: '3',
    tipo: 'habilitacao',
    orgao: 'Secretaria de Educação/MG',
    edital: 'SEDUC/2024/123',
    descricao: 'Habilitação deferida. Convocação para assinatura.',
    status: 'resolvido',
    dataRecebimento: '2024-03-08',
    prioridade: 'media',
  },
  {
    id: '4',
    tipo: 'catalogo',
    orgao: 'Defesa Nacional',
    edital: 'DEFESA/2024/089',
    descricao: 'Solicitação de envio de catálogo técnico dos equipamentos.',
    status: 'pendente',
    dataRecebimento: '2024-03-11',
    prioridade: 'media',
  },
  {
    id: '5',
    tipo: 'documentacao',
    orgao: 'Tribunal de Justiça/SP',
    edital: 'TJSP/2024/234',
    descricao: 'Pendência de documentação: comprovante de endereço.',
    status: 'pendente',
    dataRecebimento: '2024-03-13',
    prioridade: 'alta',
  },
];

const documentosPendentes = [
  { id: 1, documento: 'Certificado ISO 27001', edital: 'PMSP/2024/892', prazo: '15/03/2024', status: 'pendente' },
  { id: 2, documento: 'Catálogo Técnico', edital: 'DEFESA/2024/089', prazo: '18/03/2024', status: 'pendente' },
  { id: 3, documento: 'Comprovante de Endereço', edital: 'TJSP/2024/234', prazo: '16/03/2024', status: 'urgente' },
  { id: 4, documento: 'Balanço Patrimonial', edital: 'SES/2024/567', prazo: '20/03/2024', status: 'pendente' },
];

export function Comunicacao() {
  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'aprovacao': return <CheckCircle className="w-4 h-4 text-[#1E7F5C]" />;
      case 'documentacao': return <FileText className="w-4 h-4 text-[#F4A261]" />;
      case 'habilitacao': return <CheckCircle className="w-4 h-4 text-[#1E7F5C]" />;
      case 'catalogo': return <Package className="w-4 h-4 text-white" />;
      default: return <Mail className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTipoLabel = (tipo: string) => {
    const labels: Record<string, string> = {
      aprovacao: 'Aprovação de Proposta',
      documentacao: 'Solicitação de Documentos',
      habilitacao: 'Habilitação',
      catalogo: 'Envio de Catálogo',
    };
    return labels[tipo] || tipo;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Central de Comunicação e Devolutivas</h1>
          <p className="text-gray-400 text-sm mt-1">Monitoramento automatizado de e-mails e retornos oficiais</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20">
            <CheckCircle className="w-3 h-3 mr-1" />
            Sistema de Monitoramento Ativo
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Devolutivas Hoje</p>
                <p className="text-xl font-bold text-white">8</p>
              </div>
              <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Pendentes</p>
                <p className="text-xl font-bold text-[#F4A261]">5</p>
              </div>
              <div className="w-10 h-10 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#F4A261]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Resolvidas</p>
                <p className="text-xl font-bold text-[#1E7F5C]">12</p>
              </div>
              <div className="w-10 h-10 bg-[#1E7F5C]/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#1E7F5C]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Taxa de Resposta</p>
                <p className="text-xl font-bold text-white">98%</p>
              </div>
              <div className="w-10 h-10 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="devolutivas" className="w-full">
        <TabsList className="bg-[#1a1d23] border-[#2d3748] p-1">
          <TabsTrigger value="devolutivas">Devolutivas Recebidas</TabsTrigger>
          <TabsTrigger value="pendencias">Checklist de Pendências</TabsTrigger>
          <TabsTrigger value="automacao">Automação de Documentos</TabsTrigger>
        </TabsList>

        <TabsContent value="devolutivas">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2d3748] hover:bg-[#252a33]">
                    <TableHead className="text-gray-400 font-semibold">Tipo</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Órgão/Edital</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Descrição</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Status</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devolutivas.map((dev) => (
                    <TableRow key={dev.id} className="border-[#2d3748] hover:bg-[#252a33]">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTipoIcon(dev.tipo)}
                          <span className="text-sm">{getTipoLabel(dev.tipo)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-white">{dev.orgao}</p>
                          <p className="text-xs text-gray-400">{dev.edital}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-gray-400 max-w-md">{dev.descricao}</p>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            dev.status === 'resolvido' 
                              ? 'bg-[#1E7F5C]/10 text-[#1E7F5C] border-[#1E7F5C]/20'
                              : dev.prioridade === 'alta'
                              ? 'bg-red-50 text-red-600 border-red-200'
                              : 'bg-[#F4A261]/10 text-[#F4A261] border-[#F4A261]/20'
                          }
                        >
                          {dev.status === 'resolvido' ? 'Resolvido' : 
                           dev.prioridade === 'alta' ? 'Urgente' : 'Pendente'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          {dev.status === 'pendente' && (
                            <Button size="sm" className="bg-[#0B3C5D] hover:bg-[#0B3C5D]/90">
                              Responder
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pendencias">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-white">
                  Documentos Pendentes
                </CardTitle>
                <Badge className="bg-[#F4A261]/10 text-[#F4A261] border-[#F4A261]/20">
                  4 documentos pendentes
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documentosPendentes.map((doc) => (
                  <div 
                    key={doc.id} 
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      doc.status === 'urgente' 
                        ? 'bg-red-50 border-red-200' 
                        : 'bg-[#0f1115] border-[#2d3748]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className={`w-5 h-5 ${
                        doc.status === 'urgente' ? 'text-red-500' : 'text-white'
                      }`} />
                      <div>
                        <p className={`font-medium ${
                          doc.status === 'urgente' ? 'text-red-700' : 'text-white'
                        }`}>
                          {doc.documento}
                        </p>
                        <p className="text-sm text-gray-400">{doc.edital}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Prazo</p>
                        <p className={`font-medium ${
                          doc.status === 'urgente' ? 'text-red-600' : 'text-white'
                        }`}>
                          {doc.prazo}
                        </p>
                      </div>
                      <Button size="sm" className={
                        doc.status === 'urgente' 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : 'bg-[#0B3C5D] hover:bg-[#0B3C5D]/90'
                      }>
                        <Upload className="w-4 h-4 mr-1" />
                        Enviar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automacao">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0B3C5D]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Catálogos Técnicos</p>
                    <p className="text-xs text-gray-400">Geração automatizada</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Sistema gera automaticamente catálogos técnicos com base nas especificações dos editais.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Gerar Catálogo
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#1E7F5C]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#1E7F5C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Propostas Comerciais</p>
                    <p className="text-xs text-gray-400">Montagem automática</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Propostas são montadas automaticamente com dados do sistema e precificação inteligente.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Gerar Proposta
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1d23] border-[#2d3748]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#F4A261]/10 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-[#F4A261]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Documentação Complementar</p>
                    <p className="text-xs text-gray-400">Organização automática</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Reunião automática de toda documentação exigida nos editais.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Organizar Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Upload icon component
function Upload({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  );
}
