import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Bell, Search, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Notificacoes() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: notifications, isLoading, refetch } = trpc.notifications.list.useQuery();
  const markAsRead = trpc.notifications.markAsRead.useMutation({
    onSuccess: () => {
      toast.success("Notificação marcada como lida");
      refetch();
    },
  });

  const unreadCount = notifications?.filter(n => !n.read).length || 0;
  const filteredNotifications = notifications?.filter(n => 
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="container py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notificações</h1>
            <p className="text-muted-foreground mt-1">
              Acompanhe suas notificações fiscais
            </p>
          </div>
          {unreadCount > 0 && (
            <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary">
              <span className="font-semibold">{unreadCount}</span> não lida{unreadCount > 1 ? "s" : ""}
            </div>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Buscar Notificações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por título ou descrição..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Notificações</CardTitle>
            <CardDescription>
              {filteredNotifications?.length || 0} notificação{filteredNotifications?.length !== 1 ? "ões" : ""} encontrada{filteredNotifications?.length !== 1 ? "s" : ""}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Carregando...</p>
              </div>
            ) : filteredNotifications && filteredNotifications.length > 0 ? (
              <div className="space-y-3">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-colors ${
                      notification.read 
                        ? "border-border bg-card" 
                        : "border-primary bg-primary/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{notification.title}</h3>
                          {!notification.read && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-primary text-primary-foreground">
                              Nova
                            </span>
                          )}
                        </div>
                        {notification.description && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {notification.description}
                          </p>
                        )}
                        {notification.processType && (
                          <span className="text-xs px-2 py-1 rounded-md bg-muted">
                            {notification.processType}
                          </span>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                          {new Date(notification.createdAt).toLocaleString("pt-BR")}
                        </p>
                      </div>
                      {!notification.read && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => markAsRead.mutate({ id: notification.id })}
                          disabled={markAsRead.isPending}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Marcar como lida
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {searchTerm ? "Nenhuma notificação encontrada" : "Nenhuma notificação disponível"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {searchTerm ? "Tente buscar com outros termos" : "Suas notificações aparecerão aqui"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
