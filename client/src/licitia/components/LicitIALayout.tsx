import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Radar, 
  FileText, 
  Calculator, 
  Activity, 
  Package, 
  Building2, 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  Zap,
  LogOut,
  Search,
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';
import { ModuloLicitIA } from '../types';

interface LicitIALayoutProps {
  children: React.ReactNode;
  moduloAtivo: ModuloLicitIA;
  onModuloChange: (modulo: ModuloLicitIA) => void;
}

interface NavItem {
  id: ModuloLicitIA;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Painel Executivo', icon: LayoutDashboard },
  { id: 'radar', label: 'Prospecção de Editais', icon: Radar, badge: '12' },
  { id: 'analise', label: 'Análise de Editais', icon: FileText, badge: '3' },
  { id: 'precificacao', label: 'Inteligência de Precificação', icon: Calculator },
  { id: 'monitoramento', label: 'Monitoramento de Pregões', icon: Activity, badge: '2' },
  { id: 'planejamento', label: 'Planejamento de Compras', icon: Package },
  { id: 'erp', label: 'Execução Contratual', icon: Building2 },
  { id: 'central', label: 'Central Estratégica', icon: Brain },
  { id: 'relatorios', label: 'Relatórios Gerenciais', icon: BarChart3 },
  { id: 'comunicacao', label: 'Central de Comunicação', icon: MessageSquare, badge: '5' },
  { id: 'configuracoes', label: 'Configurações', icon: Settings },
];

export function LicitIALayout({ children, moduloAtivo, onModuloChange }: LicitIALayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={100}>
      <div className="min-h-screen bg-[#0f1115] flex">
        {/* Sidebar */}
        <aside 
          className={cn(
            "bg-[#161921] border-r border-[#2d3748] flex flex-col transition-all duration-300 ease-in-out",
            sidebarCollapsed ? "w-20" : "w-64"
          )}
        >
          {/* Logo */}
          <div className="h-16 flex items-center px-4 border-b border-[#2d3748]">
            <div className={cn("flex items-center gap-3", sidebarCollapsed && "justify-center w-full")}>
              <div className="w-9 h-9 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              {!sidebarCollapsed && (
                <div className="flex flex-col">
                  <span className="font-bold text-white text-base">LicitIA</span>
                  <span className="text-xs text-gray-500">Cérebro das Licitações</span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = moduloAtivo === item.id;
              
              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => onModuloChange(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                        isActive 
                          ? "bg-[#3b82f6]/20 text-white border-l-2 border-[#3b82f6]" 
                          : "text-gray-400 hover:bg-[#252a33] hover:text-white"
                      )}
                    >
                      <Icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-[#3b82f6]")} />
                      
                      {!sidebarCollapsed && (
                        <>
                          <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className={cn(
                                "text-xs px-1.5 py-0 h-5 min-w-[20px] flex items-center justify-center",
                                isActive ? "bg-[#3b82f6] text-white" : "bg-[#f59e0b] text-black"
                              )}
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </button>
                  </TooltipTrigger>
                  {sidebarCollapsed && (
                    <TooltipContent side="right" className="bg-[#1a1d23] text-white border-[#2d3748]">
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              );
            })}
          </nav>

          {/* Collapse Button */}
          <div className="p-3 border-t border-[#2d3748]">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-full text-gray-400 hover:text-white hover:bg-[#252a33]"
            >
              {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Topbar */}
          <header className="h-16 bg-[#161921] border-b border-[#2d3748] flex items-center justify-between px-6">
            {/* Search */}
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input 
                  placeholder="Buscar editais, contratos ou análises..."
                  className="pl-10 bg-[#0f1115] border-[#2d3748] text-white placeholder:text-gray-500 focus:border-[#3b82f6]"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Status IA */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#10b981]/10 rounded-full border border-[#10b981]/30">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-[#10b981] rounded-full animate-ping opacity-50" />
                </div>
                <span className="text-sm font-medium text-[#10b981]">Motor de Decisão IA Ativo</span>
                <Brain className="w-4 h-4 text-[#10b981]" />
              </div>

              {/* Help */}
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#252a33]">
                <HelpCircle className="w-5 h-5" />
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white hover:bg-[#252a33]">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#f59e0b] rounded-full" />
              </Button>

              {/* User Profile */}
              <div className="flex items-center gap-3 pl-4 border-l border-[#2d3748]">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-white">Carlos Mendes</p>
                  <p className="text-xs text-gray-500">Diretor Comercial</p>
                </div>
                <Avatar className="w-9 h-9 border-2 border-[#3b82f6]">
                  <AvatarFallback className="bg-[#3b82f6] text-white text-sm">CM</AvatarFallback>
                </Avatar>
              </div>

              {/* Logout */}
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-400 hover:bg-red-400/10">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
