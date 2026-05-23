import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Over from "./pages/Over.tsx";
import Contact from "./pages/Contact.tsx";
import Diensten from "./pages/Diensten.tsx";
import DienstSingle from "./pages/DienstSingle.tsx";
import Projecten from "./pages/Projecten.tsx";
import ProjectSingle from "./pages/ProjectSingle.tsx";
import Team from "./pages/Team.tsx";
import TeamSingle from "./pages/TeamSingle.tsx";

import Bouwersdagen from "./pages/Bouwersdagen.tsx";
import WdcHome from "./pages/wdc/Home.tsx";
import Wdc2026 from "./pages/Wdc2026.tsx";
import Reserveren from "./pages/Reserveren.tsx";
import Sponsoren from "./pages/Sponsoren.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* DDT hoofdsite */}
              <Route path="/" element={<Index />} />
              <Route path="/over-ons" element={<Over />} />
              <Route path="/diensten" element={<Diensten />} />
              <Route path="/projecten" element={<Projecten />} />
              <Route path="/team" element={<Team />} />
              <Route path="/bouwersdagen" element={<Bouwersdagen />} />
              <Route path="/contact" element={<Contact />} />

              {/* WDC sub-site */}
              <Route path="/wdc" element={<WdcHome />} />
              <Route path="/wdc/2026" element={<Wdc2026 />} />
              <Route path="/wdc/reserveren" element={<Reserveren />} />
              <Route path="/wdc/sponsoren" element={<Sponsoren />} />

              {/* Backwards-compat redirects via element re-use */}
              <Route path="/wdc-2026" element={<Wdc2026 />} />
              <Route path="/reserveren" element={<Reserveren />} />
              <Route path="/sponsoren" element={<Sponsoren />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
