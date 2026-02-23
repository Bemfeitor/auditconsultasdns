import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Percent, 
  Shield, 
  AlertTriangle,
  Target,
  Clock,
  Award
} from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { TendenciaPrecosChart, PerformanceChart, DistribuicaoChart } from '../components/Charts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';

const tendenciaPrecosData = [
  { name: 'Jan', value: 125000, media: 128000 },
  { name: 'Fev', value: 132000, media: 135000 },
  { name: 'Mar', value: 128000, media: 133000 },
  { name: 'Abr', value: 145000, media: 138000 },
  { name: 'Mai', value: 152000, media: 142000 },
  { name: 'Jun', value: 148000, media: 140000 },
  { name: 'Jul', value: 165000, media: 145000 },
];

const performanceData = [
  { name: 'Jan', valor: 2.1, meta: 2.5 },
  { name: 'Fev', valor: 2.4, meta: 2.5 },
  { name: 'Mar', valor: 2.8, meta: 2.5 },
  { name: 'Abr', valor: 3.2, meta: 3.0 },
  { name: 'Mai', valor: 3.5, meta: 3.0 },
  { name: 'Jun', valor: 3.8, meta: 3.5 },
  { name: 'Jul', valor: 4.2, meta: 4.0 },
];

const distribuicaoData = [
  { name: 'Pregão Eletrônico', value: 45 },
  { name: 'Concorrência', value: 25 },
  { name: 'Tomada de Preço', value: 15 },
  { name: 'Convite', value: 10 },
  { name: 'Outros', value: 5 },
];

const alertas = [
  { id: 1, tipo: 'critico', mensagem: 'Edital SEINFRA/2024/045 com prazo de envio em 24h', tempo: '10 minutos atrás' },
  { id: 2, tipo: 'aviso', mensagem: 'Novo edital compatível detectado: PM-SP/2024/892', tempo: '30 minutos atrás' },
  { id: 3, tipo: 'info', mensagem: 'Análise de risco concluída para edital DEFESA/2024/123', tempo: '1 hora atrás' },
  { id: 4, tipo: 'aviso', mensagem: 'Pregão SES/2024/567 em andamento - Posição #2', tempo: '2 horas atrás' },
  { id: 5, tipo: 'critico', mensagem: 'Documentação pendente para habilitação - EDU/2024/234', tempo: '3 horas atrás' },
];

const oportunidadesPrioritarias = [
  { id: 1, orgao: 'Ministério da Infraestrutura', objeto: 'Aquisição de equipamentos de TI', valor: 2450000, compatibilidade: 95, status: 'analise' },
  { id: 2, orgao: 'Prefeitura de São Paulo', objeto: 'Serviços de consultoria', valor: 890000, compatibilidade: 88, status: 'novo' },
  { id: 3, orgao: 'Defesa Nacional', objeto: 'Manutenção de sistemas', valor: 1200000, compatibilidade: 92, status: 'participando' },
  { id: 4, orgao: 'Estado de Minas Gerais', objeto: 'Licença de software', valor: 450000, compatibilidade: 85, status: 'novo' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Painel Executivo</h1>
          <p className="text-gray-400 text-sm mt-1">A primeira plataforma IA-First que não apenas busca editais, mas executa a vitória para você.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-[#1a1d23] text-gray-400 border-[#2d3748]">
            <Clock className="w-3 h-3 mr-1" />
            Atualizado: {new Date().toLocaleTimeString('pt-BR')}
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Oportunidades Ativas"
          value="47"
          subtitle="12 novas esta semana"
          trend="up"
          trendValue="+23%"
          icon={Briefcase}
          color="blue"
        />
        <StatCard
          title="Pipeline de Licitações"
          value="R$ 28,4M"
          subtitle="Valor total estimado"
          trend="up"
          trendValue="+15%"
          icon={TrendingUp}
          color="green"
        />
        <StatCard
          title="Margem Média Projetada"
          value="18,5%"
          subtitle="Meta: 20%"
          trend="up"
          trendValue="+2,3%"
          icon={Percent}
          color="orange"
        />
        <StatCard
          title="Taxa de Sucesso"
          value="34%"
          subtitle="Média do mercado: 22%"
          trend="up"
          trendValue="+8%"
          icon={Target}
          color="purple"
        />
      </div>

      {/* Second Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Índice de Risco Jurídico"
          value="Baixo"
          subtitle="Média: 2,3/10"
          icon={Shield}
          color="green"
        />
        <StatCard
          title="Alertas Estratégicos"
          value="5"
          subtitle="2 críticos, 3 avisos"
          icon={AlertTriangle}
          color="orange"
        />
        <StatCard
          title="Performance vs Meta"
          value="112%"
          subtitle="Acima da meta mensal"
          icon={Award}
          color="blue"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-white">
              Tendência Histórica de Preços
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TendenciaPrecosChart data={tendenciaPrecosData} height={300} />
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-white">
              Performance vs Meta (R$ Milhões)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart data={performanceData} height={300} />
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 + Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-[#1a1d23] border-[#2d3748]">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-white">
              Distribuição por Modalidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DistribuicaoChart data={distribuicaoData} height={280} />
          </CardContent>
        </Card>

        <Card className="bg-[#1a1d23] border-[#2d3748] lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-white">
                Alertas Estratégicos
              </CardTitle>
              <Badge className="bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/30">
                5 alertas
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[280px]">
              <div className="space-y-3">
                {alertas.map((alerta) => (
                  <div 
                    key={alerta.id} 
                    className={`p-4 rounded-lg border-l-4 ${
                      alerta.tipo === 'critico' 
                        ? 'bg-[#ef4444]/10 border-[#ef4444]' 
                        : alerta.tipo === 'aviso' 
                        ? 'bg-[#f59e0b]/10 border-[#f59e0b]' 
                        : 'bg-[#3b82f6]/10 border-[#3b82f6]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                          alerta.tipo === 'critico' 
                            ? 'text-[#ef4444]' 
                            : alerta.tipo === 'aviso' 
                            ? 'text-[#f59e0b]' 
                            : 'text-[#3b82f6]'
                        }`} />
                        <div>
                          <p className="text-gray-200">{alerta.mensagem}</p>
                          <p className="text-xs text-gray-500 mt-1">{alerta.tempo}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          alerta.tipo === 'critico' 
                            ? 'border-[#ef4444] text-[#ef4444]' 
                            : alerta.tipo === 'aviso' 
                            ? 'border-[#f59e0b] text-[#f59e0b]' 
                            : 'border-[#3b82f6] text-[#3b82f6]'
                        }`}
                      >
                        {alerta.tipo.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Oportunidades Prioritárias */}
      <Card className="bg-[#1a1d23] border-[#2d3748]">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-white">
              Oportunidades Prioritárias
            </CardTitle>
            <Badge className="bg-[#10b981]/20 text-[#10b981] border-[#10b981]/30">
              Top 4
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {oportunidadesPrioritarias.map((opp) => (
              <div key={opp.id} className="p-4 bg-[#0f1115] rounded-xl border border-[#2d3748] hover:border-[#3b82f6]/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="outline" 
                    className={`
                      ${opp.status === 'participando' ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30' : ''}
                      ${opp.status === 'analise' ? 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30' : ''}
                      ${opp.status === 'novo' ? 'bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/30' : ''}
                    `}
                  >
                    {opp.status === 'participando' ? 'Participando' : opp.status === 'analise' ? 'Em Análise' : 'Novo'}
                  </Badge>
                  <span className="text-lg font-bold text-[#10b981]">{opp.compatibilidade}%</span>
                </div>
                <h4 className="font-semibold text-white mb-1 line-clamp-1" title={opp.orgao}>{opp.orgao}</h4>
                <p className="text-sm text-gray-400 mb-3 line-clamp-1" title={opp.objeto}>{opp.objeto}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">
                    R$ {(opp.valor / 1000000).toFixed(1)}M
                  </span>
                  <div className="w-16">
                    <Progress value={opp.compatibilidade} className="h-1.5 bg-[#2d3748]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
