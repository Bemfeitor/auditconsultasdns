import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MonitorHub from "./pages/MonitorHub";
import Clientes from "./pages/Clientes";
import Certificados from "./pages/Certificados";
import Procuracoes from "./pages/Procuracoes";
import Notificacoes from "./pages/Notificacoes";
import Agendamentos from "./pages/Agendamentos";
import Configuracoes from "./pages/Configuracoes";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/monitor" component={MonitorHub} />
      <Route path="/clientes" component={Clientes} />
      <Route path="/certificados" component={Certificados} />
      <Route path="/procuracoes" component={Procuracoes} />
      <Route path="/notificacoes" component={Notificacoes} />
      <Route path="/agendamentos" component={Agendamentos} />
      <Route path="/configuracoes" component={Configuracoes} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
