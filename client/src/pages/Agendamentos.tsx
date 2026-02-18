import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { trpc } from "@/lib/trpc";
import { Calendar, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Agendamentos() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { data: schedules, isLoading, refetch } = trpc.schedules.list.useQuery();

  const createSchedule = trpc.schedules.create.useMutation({
    onSuccess: () => {
      toast.success("Agendamento criado com sucesso!");
      setDialogOpen(false);
      refetch();
    },
    onError: (error) => {
      toast.error("Erro ao criar agendamento: " + error.message);
    },
  });

  const updateSchedule = trpc.schedules.update.useMutation({
    onSuccess: () => {
      toast.success("Agendamento atualizado!");
      refetch();
    },
  });

  const deleteSchedule = trpc.schedules.delete.useMutation({
    onSuccess: () => {
      toast.success("Agendamento excluído!");
      refetch();
    },
  });

  const [formData, setFormData] = useState({
    scheduleType: "" as any,
    dayOfMonth: 1,
    active: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.scheduleType) {
      toast.error("Selecione um tipo de agendamento");
      return;
    }
    createSchedule.mutate(formData);
  };

  const scheduleTypeLabels: Record<string, string> = {
    das_simples: "DAS - Simples Nacional",
    das_mei: "DAS - MEI",
    parcelamentos: "Parcelamentos",
    dctfweb: "DCTFWeb",
    declaracoes: "Declarações",
  };

  return (
    <DashboardLayout>
      <div className="container py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Agendamentos</h1>
            <p className="text-muted-foreground mt-1">
              Configure as datas de agendamento para automações
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Agendamento
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Agendamento</DialogTitle>
                <DialogDescription>
                  Configure um novo agendamento para automação
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="scheduleType">Tipo de Agendamento</Label>
                  <Select
                    value={formData.scheduleType}
                    onValueChange={(value) => setFormData({ ...formData, scheduleType: value as any })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="das_simples">DAS - Simples Nacional</SelectItem>
                      <SelectItem value="das_mei">DAS - MEI</SelectItem>
                      <SelectItem value="parcelamentos">Parcelamentos</SelectItem>
                      <SelectItem value="dctfweb">DCTFWeb</SelectItem>
                      <SelectItem value="declaracoes">Declarações</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dayOfMonth">Dia do Mês</Label>
                  <Input
                    id="dayOfMonth"
                    type="number"
                    min="1"
                    max="31"
                    value={formData.dayOfMonth}
                    onChange={(e) => setFormData({ ...formData, dayOfMonth: parseInt(e.target.value) })}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Dia do mês em que a automação será executada (1-31)
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="active">Ativo</Label>
                  <Switch
                    id="active"
                    checked={formData.active}
                    onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={createSchedule.isPending}>
                    {createSchedule.isPending ? "Salvando..." : "Salvar"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Agendamentos Configurados</CardTitle>
            <CardDescription>
              {schedules?.length || 0} agendamento{schedules?.length !== 1 ? "s" : ""} configurado{schedules?.length !== 1 ? "s" : ""}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Carregando...</p>
              </div>
            ) : schedules && schedules.length > 0 ? (
              <div className="space-y-3">
                {schedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-4">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">
                          {scheduleTypeLabels[schedule.scheduleType] || schedule.scheduleType}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Dia {schedule.dayOfMonth} de cada mês
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`active-${schedule.id}`} className="text-sm">
                          {schedule.active ? "Ativo" : "Inativo"}
                        </Label>
                        <Switch
                          id={`active-${schedule.id}`}
                          checked={schedule.active}
                          onCheckedChange={(checked) =>
                            updateSchedule.mutate({ id: schedule.id, active: checked })
                          }
                        />
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (confirm("Deseja realmente excluir este agendamento?")) {
                            deleteSchedule.mutate({ id: schedule.id });
                          }
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Nenhum agendamento configurado
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Crie seu primeiro agendamento para automações
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setDialogOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Criar agendamento
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
