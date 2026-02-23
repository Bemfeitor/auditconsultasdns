import React from 'react';
import { Settings, User, Bell, Shield, Database, Mail, Key, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export function Configuracoes() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Configurações do Sistema</h1>
        <p className="text-gray-400 text-sm mt-1">Gerencie preferências e integrações da plataforma</p>
      </div>

      <Tabs defaultValue="perfil" className="w-full">
        <TabsList className="bg-[#1a1d23] border border-[#2d3748] p-1">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          <TabsTrigger value="seguranca">Segurança</TabsTrigger>
          <TabsTrigger value="integracoes">Integrações</TabsTrigger>
        </TabsList>

        <TabsContent value="perfil">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                Informações do Perfil
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome Completo</Label>
                  <Input className="bg-[#0f1115] border-[#2d3748] text-white" defaultValue="Carlos Mendes" />
                </div>
                <div className="space-y-2">
                  <Label>E-mail</Label>
                  <Input className="bg-[#0f1115] border-[#2d3748] text-white" defaultValue="carlos.mendes@licitia.com.br" />
                </div>
                <div className="space-y-2">
                  <Label>Cargo</Label>
                  <Input className="bg-[#0f1115] border-[#2d3748] text-white" defaultValue="Diretor Comercial" />
                </div>
                <div className="space-y-2">
                  <Label>Telefone</Label>
                  <Input className="bg-[#0f1115] border-[#2d3748] text-white" defaultValue="(11) 98765-4321" />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Empresa</Label>
                <Input className="bg-[#0f1115] border-[#2d3748] text-white" defaultValue="LicitIA Tecnologia Ltda." />
              </div>
              <div className="flex justify-end">
                <Button className="bg-[#0B3C5D] hover:bg-[#0B3C5D]/90">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                Preferências de Notificação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'Novos editais compatíveis', desc: 'Receber alerta quando um novo edital for detectado', checked: true },
                { label: 'Prazos de envio', desc: 'Notificação 48h antes do prazo final', checked: true },
                { label: 'Resultados de pregões', desc: 'Informe imediato sobre resultado de licitações', checked: true },
                { label: 'Devolutivas de órgãos', desc: 'Alerta ao receber comunicação oficial', checked: true },
                { label: 'Relatórios semanais', desc: 'Resumo de performance toda segunda-feira', checked: false },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-[#2d3748] last:border-0">
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={item.checked} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seguranca">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                Segurança e Acesso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-[#0f1115] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Key className="w-5 h-5 text-white" />
                  <span className="font-medium">Alterar Senha</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input className="bg-[#0f1115] border-[#2d3748] text-white" type="password" placeholder="Senha atual" />
                  <Input className="bg-[#0f1115] border-[#2d3748] text-white" type="password" placeholder="Nova senha" />
                </div>
                <Button className="mt-4 bg-[#0B3C5D] hover:bg-[#0B3C5D]/90">
                  Atualizar Senha
                </Button>
              </div>

              <div className="p-4 bg-[#0f1115] rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#1E7F5C]" />
                  <div className="flex-1">
                    <span className="font-medium">Autenticação de Dois Fatores (2FA)</span>
                    <p className="text-sm text-gray-400">Adicione uma camada extra de segurança</p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integracoes">
          <Card className="bg-[#1a1d23] border-[#2d3748]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                Integrações Disponíveis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Portal da Transparência', desc: 'Acesso aos dados de licitações públicas', status: 'Conectado', color: 'green' },
                { name: 'CNPJ.ws', desc: 'Consulta de dados empresariais', status: 'Conectado', color: 'green' },
                { name: 'Sistema de E-mail', desc: 'Notificações automáticas', status: 'Conectado', color: 'green' },
                { name: 'ERP Externo', desc: 'Integração com sistema de gestão', status: 'Não conectado', color: 'gray' },
                { name: 'Assinatura Digital', desc: 'Certificado digital para documentos', status: 'Configurar', color: 'orange' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#0f1115] rounded-lg">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-white" />
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <Badge className={
                    item.color === 'green' ? 'bg-[#1E7F5C]/10 text-[#1E7F5C]' :
                    item.color === 'orange' ? 'bg-[#F4A261]/10 text-[#F4A261]' :
                    'bg-gray-100 text-gray-600'
                  }>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
