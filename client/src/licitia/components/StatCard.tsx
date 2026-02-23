import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ElementType;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
  className?: string;
}

const colorVariants = {
  blue: {
    icon: 'bg-[#3b82f6]/20 text-[#3b82f6]',
    trend: 'text-[#3b82f6]',
  },
  green: {
    icon: 'bg-[#10b981]/20 text-[#10b981]',
    trend: 'text-[#10b981]',
  },
  orange: {
    icon: 'bg-[#f59e0b]/20 text-[#f59e0b]',
    trend: 'text-[#f59e0b]',
  },
  red: {
    icon: 'bg-[#ef4444]/20 text-[#ef4444]',
    trend: 'text-[#ef4444]',
  },
  purple: {
    icon: 'bg-[#8b5cf6]/20 text-[#8b5cf6]',
    trend: 'text-[#8b5cf6]',
  },
};

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendValue, 
  icon: Icon,
  color = 'blue',
  className 
}: StatCardProps) {
  const colors = colorVariants[color];
  
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <Card className={cn(
      "bg-[#1a1d23] border-[#2d3748] hover:border-[#3b82f6]/50 transition-colors duration-200",
      className
    )}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-400 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-white">{value}</h3>
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
            {trend && trendValue && (
              <div className="flex items-center gap-1 mt-2">
                <TrendIcon className={cn(
                  "w-3.5 h-3.5",
                  trend === 'up' ? 'text-[#10b981]' : trend === 'down' ? 'text-[#ef4444]' : 'text-gray-500'
                )} />
                <span className={cn(
                  "text-sm font-medium",
                  trend === 'up' ? 'text-[#10b981]' : trend === 'down' ? 'text-[#ef4444]' : 'text-gray-400'
                )}>
                  {trendValue}
                </span>
              </div>
            )}
          </div>
          {Icon && (
            <div className={cn(
              "w-11 h-11 rounded-xl flex items-center justify-center",
              colors.icon
            )}>
              <Icon className="w-5 h-5" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
