import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

// Cores para tema dark
const COLORS = {
  primary: '#3b82f6',
  secondary: '#60a5fa',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  purple: '#8b5cf6',
  gray: '#6b7280',
};

const PIE_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#6b7280'];

// Estilo dos tooltips para tema dark
const tooltipStyle = {
  backgroundColor: '#1a1d23',
  border: '1px solid #2d3748',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
  color: '#fff',
};

// Gráfico de Linha - Tendência de Preços
interface LineChartProps {
  data: Array<{ name: string; value: number; media?: number }>;
  height?: number;
}

export function TendenciaPrecosChart({ data, height = 300 }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
        <YAxis stroke="#6b7280" fontSize={12} />
        <Tooltip 
          contentStyle={tooltipStyle}
          labelStyle={{ color: '#9ca3af' }}
        />
        <Legend wrapperStyle={{ color: '#9ca3af' }} />
        <Line 
          type="monotone" 
          dataKey="value" 
          name="Preço Real" 
          stroke={COLORS.primary} 
          strokeWidth={3}
          dot={{ fill: COLORS.primary, r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="media" 
          name="Preço Médio" 
          stroke={COLORS.success} 
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// Gráfico de Barras - Pipeline
interface BarChartProps {
  data: Array<{ name: string; value: number; label?: string }>;
  height?: number;
  color?: string;
}

export function PipelineChart({ data, height = 300, color = COLORS.primary }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
        <YAxis stroke="#6b7280" fontSize={12} />
        <Tooltip 
          formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
          contentStyle={tooltipStyle}
          labelStyle={{ color: '#9ca3af' }}
        />
        <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Gráfico de Área - Performance
interface AreaChartProps {
  data: Array<{ name: string; valor: number; meta: number }>;
  height?: number;
}

export function PerformanceChart({ data, height = 300 }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3}/>
            <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorMeta" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={COLORS.success} stopOpacity={0.3}/>
            <stop offset="95%" stopColor={COLORS.success} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
        <YAxis stroke="#6b7280" fontSize={12} />
        <Tooltip 
          contentStyle={tooltipStyle}
          labelStyle={{ color: '#9ca3af' }}
        />
        <Legend wrapperStyle={{ color: '#9ca3af' }} />
        <Area 
          type="monotone" 
          dataKey="valor" 
          name="Realizado"
          stroke={COLORS.primary} 
          fillOpacity={1} 
          fill="url(#colorValor)" 
          strokeWidth={2}
        />
        <Area 
          type="monotone" 
          dataKey="meta" 
          name="Meta"
          stroke={COLORS.success} 
          fillOpacity={1} 
          fill="url(#colorMeta)" 
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// Gráfico de Pizza - Distribuição
interface PieChartProps {
  data: Array<{ name: string; value: number }>;
  height?: number;
}

export function DistribuicaoChart({ data, height = 300 }: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          labelStyle={{ fill: '#9ca3af', fontSize: 12 }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value: number) => [`${value}%`, 'Percentual']}
          contentStyle={tooltipStyle}
          labelStyle={{ color: '#9ca3af' }}
        />
        <Legend wrapperStyle={{ color: '#9ca3af' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

// Gráfico Radar - Análise de Risco
interface RadarChartProps {
  data: Array<{ subject: string; A: number; fullMark: number }>;
  height?: number;
}

export function RiscoRadarChart({ data, height = 300 }: RadarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#2d3748" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="Índice de Risco"
          dataKey="A"
          stroke={COLORS.warning}
          fill={COLORS.warning}
          fillOpacity={0.3}
          strokeWidth={2}
        />
        <Tooltip 
          formatter={(value: number) => [`${value}%`, 'Risco']}
          contentStyle={tooltipStyle}
          labelStyle={{ color: '#9ca3af' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

// Gráfico de Barras Horizontais - Ranking
interface HorizontalBarChartProps {
  data: Array<{ name: string; value: number; compatibilidade: number }>;
  height?: number;
}

export function RankingChart({ data, height = 300 }: HorizontalBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" horizontal={false} />
        <XAxis type="number" stroke="#6b7280" fontSize={12} />
        <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={11} width={120} />
        <Tooltip 
          contentStyle={tooltipStyle}
          labelStyle={{ color: '#9ca3af' }}
        />
        <Legend wrapperStyle={{ color: '#9ca3af' }} />
        <Bar dataKey="value" name="Valor Estimado (R$ mil)" fill={COLORS.primary} radius={[0, 4, 4, 0]} />
        <Bar dataKey="compatibilidade" name="Compatibilidade (%)" fill={COLORS.success} radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
